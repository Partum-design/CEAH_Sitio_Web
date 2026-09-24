const nodemailer = require('nodemailer');

const DESTINO = process.env.CONTACT_TO || 'ventas@ceahesteuctural.com.mx';

const escapeHtml = (value = '') => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

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

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.titan.email',
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const filas = [
    ['Nombre', nombre], ['Empresa', empresa || 'No indicada'], ['Correo', correo], ['Solución', solucion],
  ];

  try {
    await transporter.sendMail({
      from: `"Sitio web CEAH" <${process.env.SMTP_USER}>`,
      to: DESTINO,
      replyTo: `"${nombre.replace(/"/g, '')}" <${correo}>`,
      subject: `Solicitud web CEAH · ${empresa || nombre}`,
      text: `${filas.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nMensaje:\n${mensaje}`,
      html: `<table>${filas.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`).join('')}</table>`
        + `<p><b>Mensaje:</b></p><p>${escapeHtml(mensaje).replace(/\n/g, '<br>')}</p>`,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error enviando correo de contacto:', error);
    return res.status(500).json({ ok: false, error: 'No pudimos enviar tu solicitud. Intenta de nuevo.' });
  }
};
