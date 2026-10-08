const nodemailer = require('nodemailer');
const { correoSolicitud } = require('./_correo');

// Cada solicitud llega siempre a Ventas y Dirección; CONTACT_TO (separado por comas) agrega más destinatarios.
const DESTINOS = [...new Set([
  'ventas@ceahestructural.com.mx',
  'direccion@ceahestructural.com.mx',
  ...(process.env.CONTACT_TO || '').split(','),
].map((d) => d.trim().toLowerCase()).filter(Boolean))];

// Cuentas SMTP de Titan (HostGator): se envía con Ventas y, si falla, con Dirección.
const CUENTAS = [
  [process.env.SMTP_USER, process.env.SMTP_PASS],
  [process.env.SMTP_FALLBACK_USER, process.env.SMTP_FALLBACK_PASS],
].filter(([user, pass]) => user && pass);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Método no permitido' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const { nombre = '', empresa = '', correo = '', solucion = '', mensaje = '', sitio = '' } = body;

  // Campo trampa para bots: si viene lleno, se ignora en silencio.
  if (sitio) return res.status(200).json({ ok: true });

  if (!nombre.trim() || !mensaje.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    return res.status(400).json({ ok: false, error: 'Revisa nombre, correo y mensaje.' });
  }
  if ([nombre, empresa, correo, solucion].some((v) => v.length > 200) || mensaje.length > 5000) {
    return res.status(400).json({ ok: false, error: 'El mensaje es demasiado largo.' });
  }

  const { html, text } = correoSolicitud({ nombre, empresa, correo, solucion: solucion || 'Asesoría técnica', mensaje });
  const port = Number(process.env.SMTP_PORT || 465);

  for (const [user, pass] of CUENTAS) {
    try {
      await nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.titan.email', port, secure: port === 465, auth: { user, pass },
      }).sendMail({
        from: `"Sitio web CEAH" <${user}>`,
        to: DESTINOS,
        replyTo: `"${nombre.replace(/["\r\n]/g, '')}" <${correo}>`,
        subject: `Nueva solicitud web · ${solucion || 'Asesoría técnica'} · ${empresa || nombre}`,
        text,
        html,
      });
      return res.status(200).json({ ok: true });
    } catch (error) {
      console.error(`Error enviando correo de contacto con ${user}:`, error.message);
    }
  }
  return res.status(500).json({ ok: false, error: 'No pudimos enviar tu solicitud. Intenta de nuevo.' });
};
