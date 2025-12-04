import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST,
  port: parseInt(process.env.BREVO_SMTP_PORT || '587'),
  secure: false, // true para puerto 465, false para 587
  auth: {
    user: process.env.BREVO_SMTP_LOGIN,
    pass: process.env.BREVO_SMTP_PASSWORD,
  },
});

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  business?: string;
  niche: string;
  message?: string;
}

export async function sendContactEmail({
  name,
  email,
  phone,
  business,
  niche,
  message,
}: ContactEmailData) {
  try {
    const result = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `🚀 Nuevo contacto web: ${name} - ${getNicheLabel(niche)}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📩 Nuevo Mensaje de Contacto</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b;">👤 Nombre:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                  ${escapeHtml(name)}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b;">📧 Email:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b;">📱 Teléfono:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #22c55e; text-decoration: none;">${escapeHtml(phone)}</a>
                </td>
              </tr>
              ${business ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b;">🏢 Negocio:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                  ${escapeHtml(business)}
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b;">🏷️ Tipo de Negocio:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="background-color: #dbeafe; color: #1d4ed8; padding: 4px 12px; border-radius: 20px; font-size: 14px;">
                    ${escapeHtml(getNicheLabel(niche))}
                  </span>
                </td>
              </tr>
            </table>
            
            ${message ? `
            <div style="margin-top: 24px; padding: 20px; background-color: #f1f5f9; border-radius: 8px; border-left: 4px solid #2563eb;">
              <h3 style="color: #334155; margin: 0 0 12px 0; font-size: 16px;">💬 Mensaje:</h3>
              <p style="color: #475569; margin: 0; white-space: pre-wrap; line-height: 1.6;">
                ${escapeHtml(message)}
              </p>
            </div>
            ` : ''}
            
            <div style="margin-top: 24px; padding: 16px; background-color: #ecfdf5; border-radius: 8px; text-align: center;">
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=Hola%20${encodeURIComponent(name)},%20gracias%20por%20contactarnos.%20" 
                 style="display: inline-block; background-color: #22c55e; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                📲 Responder por WhatsApp
              </a>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #94a3b8; font-size: 12px;">
            <p style="margin: 0;">Este email fue enviado desde el formulario de contacto de <strong>webparatunegocio.pe</strong></p>
            <p style="margin: 8px 0 0 0;">Fecha: ${new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' })}</p>
          </div>
        </div>
      `,
      text: `
Nuevo mensaje de contacto - Web Para Tu Negocio

Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
${business ? `Negocio: ${business}` : ''}
Tipo de Negocio: ${getNicheLabel(niche)}

${message ? `Mensaje:\n${message}` : ''}

---
Este email fue enviado desde el formulario de contacto de webparatunegocio.pe
Fecha: ${new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' })}
      `,
    });

    return {
      success: true,
      messageId: result.messageId,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('No se pudo enviar el email. Intenta más tarde.');
  }
}

// Función para sanitizar HTML y prevenir XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Función para obtener el label del nicho
function getNicheLabel(niche: string): string {
  const nicheLabels: { [key: string]: string } = {
    'veterinaria': 'Clínica Veterinaria',
    'salon': 'Salón de Belleza / Spa',
    'restaurante': 'Restaurante / Bar',
    'odontologia': 'Consultorio Odontológico',
    'agencia-viajes': 'Agencia de Viajes',
    'cafeteria': 'Cafetería',
    'tienda-ropa': 'Tienda de Ropa',
    'freelancer': 'Freelancer',
    'instructor': 'Instructor / Coach',
    'limpieza': 'Servicios de Limpieza',
    'reparaciones': 'Reparaciones / Mantenimiento',
    'transporte': 'Transporte',
    'artesania': 'Artesanía',
    'agricola': 'Agrícola',
    'otro': 'Otro',
  };
  return nicheLabels[niche] || niche;
}
