// Plantilla HTML del aviso que reciben Ventas y Dirección. Los archivos con "_" no se publican como endpoint en Vercel.
const SITIO = 'https://www.ceahestructural.com.mx';
const AZUL = '#0c2d5e';
const AMARILLO = '#fbc02d';
const FUENTE = "'Poppins','Helvetica Neue',Arial,sans-serif";

const escapeHtml = (value = '') => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const fila = (etiqueta, valor) => `
  <tr>
    <td style="padding:12px 0;border-bottom:1px solid #e6ecf5;width:130px;vertical-align:top;font:600 12px/1.5 ${FUENTE};color:#6b7c99;text-transform:uppercase;letter-spacing:.06em;">${etiqueta}</td>
    <td style="padding:12px 0;border-bottom:1px solid #e6ecf5;vertical-align:top;font:500 15px/1.5 ${FUENTE};color:${AZUL};">${valor}</td>
  </tr>`;

const correoSolicitud = ({ nombre, empresa, correo, solucion, mensaje }) => {
  const fecha = new Intl.DateTimeFormat('es-MX', {
    dateStyle: 'full', timeStyle: 'short', timeZone: 'America/Mexico_City',
  }).format(new Date());
  const respuesta = `mailto:${encodeURIComponent(correo)}?subject=${encodeURIComponent(`Re: Solicitud de información CEAH · ${solucion}`)}`;

  const html = `<!doctype html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"><title>Nueva solicitud web CEAH</title></head>
<body style="margin:0;padding:0;background:#eef2f8;">
  <div style="display:none;max-height:0;overflow:hidden;">${escapeHtml(nombre)} pide informes de ${escapeHtml(solucion)}.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f8;padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 8px 30px rgba(12,45,94,.12);">
        <tr><td align="center" style="padding:26px 32px 20px;background:#f7f7f7;">
          <a href="${SITIO}"><img src="${SITIO}/logo-wide.jpg" width="220" alt="CEAH Compuestos Estructurales" style="display:block;width:220px;max-width:100%;height:auto;border:0;"></a>
        </td></tr>
        <tr><td style="height:5px;background:${AMARILLO};font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr><td style="padding:30px 32px 26px;background:${AZUL};">
          <p style="margin:0 0 8px;font:700 12px/1 ${FUENTE};letter-spacing:.14em;text-transform:uppercase;color:${AMARILLO};">Nueva solicitud desde el sitio web</p>
          <h1 style="margin:0;font:700 26px/1.25 ${FUENTE};color:#ffffff;">${escapeHtml(nombre)}${empresa ? `<span style="display:block;font-weight:400;font-size:17px;color:#c9d6ec;margin-top:4px;">${escapeHtml(empresa)}</span>` : ''}</h1>
        </td></tr>
        <tr><td style="padding:28px 32px 6px;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 22px;"><tr>
            <td style="padding:8px 14px;background:#fff6d9;border:1px solid ${AMARILLO};border-radius:999px;font:600 13px/1 ${FUENTE};color:${AZUL};">Interés: ${escapeHtml(solucion)}</td>
          </tr></table>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${fila('Nombre', escapeHtml(nombre))}
            ${fila('Empresa', escapeHtml(empresa || 'No indicada'))}
            ${fila('Correo', `<a href="mailto:${escapeHtml(correo)}" style="color:#1f5fbf;text-decoration:none;">${escapeHtml(correo)}</a>`)}
            ${fila('Producto', escapeHtml(solucion))}
          </table>
          <p style="margin:26px 0 10px;font:600 12px/1.5 ${FUENTE};color:#6b7c99;text-transform:uppercase;letter-spacing:.06em;">Mensaje</p>
          <div style="padding:18px 20px;background:#f4f7fc;border-left:4px solid ${AMARILLO};border-radius:8px;font:400 15px/1.65 ${FUENTE};color:#1d3557;">${escapeHtml(mensaje).replace(/\n/g, '<br>')}</div>
        </td></tr>
        <tr><td align="center" style="padding:26px 32px 32px;">
          <a href="${respuesta}" style="display:inline-block;padding:14px 30px;background:${AMARILLO};border-radius:8px;font:700 15px/1 ${FUENTE};color:${AZUL};text-decoration:none;">Responder a ${escapeHtml(nombre.split(' ')[0])}</a>
          <p style="margin:14px 0 0;font:400 12px/1.5 ${FUENTE};color:#8a99b3;">También puedes contestar este correo directamente: la respuesta le llega al cliente.</p>
        </td></tr>
        <tr><td style="padding:18px 32px;background:#071f45;font:400 12px/1.6 ${FUENTE};color:#9fb2d0;text-align:center;">
          Recibido el ${fecha}<br>
          <a href="${SITIO}" style="color:${AMARILLO};text-decoration:none;">ceahestructural.com.mx</a> · Formulario de contacto
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const text = [
    'NUEVA SOLICITUD DESDE EL SITIO WEB CEAH', '',
    `Nombre:   ${nombre}`, `Empresa:  ${empresa || 'No indicada'}`, `Correo:   ${correo}`, `Producto: ${solucion}`, '',
    'Mensaje:', mensaje, '', `Recibido el ${fecha}`,
  ].join('\n');

  return { html, text };
};

module.exports = { correoSolicitud };
