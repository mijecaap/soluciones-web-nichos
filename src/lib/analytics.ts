import { track } from '@vercel/analytics';

/**
 * Eventos de Analytics para Web Para Tu Negocio
 * 
 * Estos eventos nos ayudan a entender el comportamiento de los usuarios
 * y optimizar las conversiones.
 */

// ==========================================
// EVENTOS DE FORMULARIO DE CONTACTO
// ==========================================

/**
 * Se dispara cuando el usuario envía el formulario de contacto exitosamente
 */
export function trackContactFormSubmitted(data: {
  niche: string;
  hasBusiness: boolean;
  hasMessage: boolean;
}) {
  track('contact_form_submitted', {
    niche: data.niche,
    has_business_name: data.hasBusiness,
    has_message: data.hasMessage,
  });
}

/**
 * Se dispara cuando hay un error al enviar el formulario
 */
export function trackContactFormError(error: string) {
  track('contact_form_error', {
    error_message: error,
  });
}

// ==========================================
// EVENTOS DE CTA (CALL TO ACTION)
// ==========================================

/**
 * Se dispara cuando el usuario hace clic en un CTA principal
 */
export function trackCTAClick(data: {
  location: 'hero' | 'cta_section' | 'pricing' | 'navigation' | 'niche_page';
  ctaText: string;
  destination: string;
}) {
  track('cta_click', {
    location: data.location,
    cta_text: data.ctaText,
    destination: data.destination,
  });
}

// ==========================================
// EVENTOS DE WHATSAPP
// ==========================================

/**
 * Se dispara cuando el usuario hace clic en el botón de WhatsApp
 */
export function trackWhatsAppClick(data: {
  location: 'cta_section' | 'contact_page' | 'footer' | 'niche_page';
  niche?: string;
}) {
  track('whatsapp_click', {
    location: data.location,
    niche: data.niche || 'general',
  });
}

// ==========================================
// EVENTOS DE NICHOS
// ==========================================

/**
 * Se dispara cuando el usuario visita una página de nicho
 */
export function trackNichePageView(niche: string, isPremium: boolean) {
  track('niche_page_view', {
    niche: niche,
    is_premium: isPremium,
  });
}

/**
 * Se dispara cuando el usuario hace clic en una tarjeta de nicho desde el grid
 */
export function trackNicheCardClick(data: {
  niche: string;
  isPremium: boolean;
  priceRange: string;
}) {
  track('niche_card_click', {
    niche: data.niche,
    is_premium: data.isPremium,
    price_range: data.priceRange,
  });
}

// ==========================================
// EVENTOS DE PRECIOS
// ==========================================

/**
 * Se dispara cuando el usuario hace clic en un plan de precios
 */
export function trackPricingClick(data: {
  planName: string;
  isHighlighted: boolean;
  niche?: string;
}) {
  track('pricing_click', {
    plan_name: data.planName,
    is_highlighted: data.isHighlighted,
    niche: data.niche || 'general',
  });
}

// ==========================================
// EVENTOS DE FAQ
// ==========================================

/**
 * Se dispara cuando el usuario abre una pregunta frecuente
 */
export function trackFAQOpen(question: string, index: number) {
  track('faq_opened', {
    question: question.substring(0, 100), // Limitar longitud
    question_index: index,
  });
}

// ==========================================
// EVENTOS DE NAVEGACIÓN
// ==========================================

/**
 * Se dispara cuando el usuario usa el menú de servicios
 */
export function trackServicesMenuOpen() {
  track('services_menu_opened');
}

/**
 * Se dispara cuando el usuario selecciona un servicio del menú
 */
export function trackServiceSelected(service: string, isPremium: boolean) {
  track('service_selected', {
    service: service,
    is_premium: isPremium,
  });
}

// ==========================================
// EVENTOS DE SCROLL / ENGAGEMENT
// ==========================================

/**
 * Se dispara cuando el usuario llega a una sección importante
 */
export function trackSectionView(sectionName: string) {
  track('section_viewed', {
    section: sectionName,
  });
}
