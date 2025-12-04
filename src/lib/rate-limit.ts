/**
 * Rate Limiter en memoria para Next.js
 * 
 * Implementación simple de rate limiting usando el algoritmo de ventana deslizante.
 * Ideal para proteger formularios de contacto contra spam.
 * 
 * Nota: Esta implementación es en memoria, por lo que se resetea al reiniciar el servidor.
 * Para producción con múltiples instancias, considera usar Upstash Redis.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// Almacén en memoria para los rate limits
const rateLimitStore = new Map<string, RateLimitEntry>();

// Limpiar entradas expiradas cada 5 minutos
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, value] of rateLimitStore.entries()) {
      if (now > value.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }, 5 * 60 * 1000);
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

export interface RateLimitConfig {
  /** Número máximo de solicitudes permitidas */
  maxRequests: number;
  /** Ventana de tiempo en segundos */
  windowSeconds: number;
}

/**
 * Verifica si una solicitud está dentro del límite de tasa
 * 
 * @param identifier - Identificador único (IP, email, etc.)
 * @param config - Configuración del rate limit
 * @returns Resultado del rate limit
 * 
 * @example
 * ```ts
 * const result = rateLimit('192.168.1.1', { maxRequests: 5, windowSeconds: 60 });
 * if (!result.success) {
 *   return Response.json({ error: 'Demasiadas solicitudes' }, { status: 429 });
 * }
 * ```
 */
export function rateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const { maxRequests, windowSeconds } = config;
  const now = Date.now();
  const windowMs = windowSeconds * 1000;
  const resetTime = now + windowMs;

  const entry = rateLimitStore.get(identifier);

  // Si no hay entrada o expiró, crear una nueva
  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime,
    });

    return {
      success: true,
      limit: maxRequests,
      remaining: maxRequests - 1,
      reset: resetTime,
    };
  }

  // Incrementar contador
  entry.count += 1;

  // Verificar si excede el límite
  if (entry.count > maxRequests) {
    return {
      success: false,
      limit: maxRequests,
      remaining: 0,
      reset: entry.resetTime,
    };
  }

  return {
    success: true,
    limit: maxRequests,
    remaining: maxRequests - entry.count,
    reset: entry.resetTime,
  };
}

/**
 * Crea un rate limiter con configuración predefinida
 * 
 * @example
 * ```ts
 * const contactFormLimiter = createRateLimiter({ maxRequests: 3, windowSeconds: 300 });
 * const result = contactFormLimiter(ip);
 * ```
 */
export function createRateLimiter(config: RateLimitConfig) {
  return (identifier: string) => rateLimit(identifier, config);
}

/**
 * Obtiene la IP del cliente desde los headers de la request
 */
export function getClientIP(request: Request): string {
  // Intentar obtener la IP real del cliente
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    // x-forwarded-for puede contener múltiples IPs, la primera es la del cliente
    return forwardedFor.split(',')[0].trim();
  }

  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }

  // Fallback para desarrollo local
  return '127.0.0.1';
}

/**
 * Rate limiter preconfigurado para formularios de contacto
 * Permite 5 solicitudes cada 5 minutos por IP
 */
export const contactFormRateLimiter = createRateLimiter({
  maxRequests: 5,
  windowSeconds: 300, // 5 minutos
});
