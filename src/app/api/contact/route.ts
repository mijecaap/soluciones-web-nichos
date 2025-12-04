import { sendContactEmail } from '@/lib/email';
import { contactFormRateLimiter, getClientIP } from '@/lib/rate-limit';
import { z } from 'zod';

// Validar datos del formulario
const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  email: z
    .string()
    .email('Email inválido'),
  phone: z
    .string()
    .min(6, 'El teléfono debe tener al menos 6 dígitos')
    .max(20, 'El teléfono no puede exceder 20 caracteres'),
  business: z
    .string()
    .max(100, 'El nombre del negocio no puede exceder 100 caracteres')
    .optional(),
  niche: z
    .string()
    .min(1, 'Debes seleccionar un tipo de negocio'),
  message: z
    .string()
    .max(5000, 'El mensaje no puede exceder 5000 caracteres')
    .optional(),
});

export async function POST(request: Request) {
  try {
    // Rate limiting por IP
    const clientIP = getClientIP(request);
    const rateLimitResult = contactFormRateLimiter(clientIP);

    if (!rateLimitResult.success) {
      const retryAfter = Math.ceil((rateLimitResult.reset - Date.now()) / 1000);
      return Response.json(
        {
          error: 'Has enviado demasiados mensajes. Por favor, espera unos minutos.',
          retryAfter,
        },
        { 
          status: 429,
          headers: {
            'Retry-After': retryAfter.toString(),
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toString(),
          },
        }
      );
    }

    // Parsear JSON
    const body = await request.json();

    // Validar datos
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return Response.json(
        {
          error: 'Datos inválidos',
          details: validation.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { name, email, phone, business, niche, message } = validation.data;

    // Enviar email
    await sendContactEmail({ 
      name, 
      email, 
      phone, 
      business: business || '', 
      niche, 
      message: message || '' 
    });

    // Respuesta exitosa
    return Response.json(
      {
        success: true,
        message: '¡Mensaje enviado correctamente! Te responderemos en menos de 24 horas.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      {
        error: 'Error al enviar el mensaje',
        details: error instanceof Error ? error.message : 'Error desconocido',
      },
      { status: 500 }
    );
  }
}
