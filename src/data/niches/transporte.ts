import type { NicheData } from "./types";

export const transporteData: NicheData = {
  slug: "transporte",
  title: "Servicios de Transporte",
  headline: "Tu Servicio de Transporte en Google: Más Llamadas. Más Viajes. Más Ingresos.",
  subtitle: "Deja de depender solo de recomendaciones. Aparece cuando buscan taxi, transporte o remis en tu zona.",
  metaTitle: "Páginas Web para Servicios de Transporte | Taxi y Remis Online",
  metaDescription: "Desarrollamos páginas web económicas para servicios de transporte, taxi y remis. Contacto directo, zonas de servicio y WhatsApp. Desde S/700.",
  category: "economico",
  problems: [
    {
      icon: "search",
      title: "No apareces en Google",
      description: "Buscan 'taxi 24h' o 'transporte aeropuerto' y no te encuentran.",
    },
    {
      icon: "phone",
      title: "Solo clientes por referidos",
      description: "Dependes de conocidos que pasen tu número, no llegas a nuevos clientes.",
    },
    {
      icon: "document",
      title: "Sin presencia profesional",
      description: "No tienes forma de mostrar tu flota, servicios y precios.",
    },
    {
      icon: "clock",
      title: "Pierdes viajes de emergencia",
      description: "Clientes necesitan transporte urgente pero no saben de tu servicio.",
    },
  ],
  solutions: [
    {
      icon: "globe",
      title: "Presencia en Google",
      description: "Aparece cuando buscan transporte, taxi o remis en tu ciudad.",
      highlight: "+30% clientes nuevos",
    },
    {
      icon: "phone",
      title: "Contacto directo 24/7",
      description: "WhatsApp y teléfono siempre visibles para reservas inmediatas.",
    },
    {
      icon: "document",
      title: "Información de servicios",
      description: "Muestra tu flota, zonas de servicio, tarifas y horarios.",
    },
    {
      icon: "chart",
      title: "Google My Business",
      description: "Aparece en Google Maps cuando buscan cerca de tu zona.",
    },
  ],
  transformation: {
    before: {
      metric1: { label: "Clientes nuevos/mes", value: "5-8" },
      metric2: { label: "Fuente de clientes", value: "Solo referidos" },
      metric3: { label: "Viajes mensuales", value: "80-100" },
    },
    after: {
      metric1: { label: "Clientes nuevos/mes", value: "15-20", improvement: "+150%" },
      metric2: { label: "Fuente de clientes", value: "Google + Referidos", improvement: "Diversificado" },
      metric3: { label: "Viajes mensuales", value: "120-140", improvement: "+40%" },
    },
    roi: "Recuperas tu inversión en 2 meses",
  },
  pricing: [
    {
      name: "Básico",
      price: "S/700",
      description: "Para transportistas independientes",
      features: [
        "Dominio 1 año incluido",
        "Hosting incluido",
        "4 páginas básicas",
        "Información de servicios",
        "WhatsApp integrado",
        "Google My Business",
        "Diseño responsive",
        "1 mes de soporte",
      ],
    },
    {
      name: "Estándar",
      price: "S/850",
      description: "El más popular",
      features: [
        "Todo lo del plan Básico",
        "Galería de vehículos",
        "Zonas de servicio con mapa",
        "Tarifas referenciales",
        "Formulario de reserva",
        "SEO básico",
        "2 meses de soporte",
      ],
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Completo",
      price: "S/1,000",
      description: "Para flotas pequeñas",
      features: [
        "Todo lo del plan Estándar",
        "Página de flota completa",
        "Servicios especiales",
        "Testimonios de clientes",
        "Redes sociales integradas",
        "Horarios destacados",
        "3 meses de soporte",
      ],
    },
  ],
  maintenanceNote: "Mantenimiento mensual desde S/80/mes incluye hosting, actualizaciones y soporte básico.",
  checklist: [
    "Diseño profesional y limpio",
    "Teléfono y WhatsApp visibles",
    "Servicios detallados",
    "Zonas de cobertura",
    "Tarifas referenciales",
    "Google Maps integrado",
    "Horarios de servicio",
    "Responsive para móviles",
    "SSL/HTTPS incluido",
    "Capacitación de uso",
  ],
  faqs: [
    {
      question: "¿Puedo mostrar mis tarifas en la web?",
      answer: "Sí, puedes mostrar tarifas referenciales por zona o tipo de servicio.",
    },
    {
      question: "¿Funciona para servicios de mototaxi?",
      answer: "Sí, adaptamos el diseño para cualquier tipo de servicio de transporte.",
    },
    {
      question: "¿Los clientes pueden reservar viajes online?",
      answer: "Incluimos formulario de reserva que llega a tu WhatsApp o email para confirmar.",
    },
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer: "Tu web está lista en 5-7 días hábiles dependiendo del plan elegido.",
    },
    {
      question: "¿Puedo agregar varios vehículos?",
      answer: "Sí, el plan Completo incluye página dedicada para mostrar toda tu flota.",
    },
  ],
  testimonials: [
    {
      name: "José Ramírez",
      role: "Propietario",
      company: "Taxi Seguro 24h",
      content: "Antes solo me llamaban conocidos. Ahora recibo llamadas de gente que me encontró buscando taxi en Google.",
      rating: 5,
    },
    {
      name: "Miguel Sánchez",
      role: "Conductor",
      company: "Transporte Ejecutivo Lima",
      content: "La web me dio profesionalismo. Empresas me contratan para traslados al aeropuerto porque ven que soy formal.",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      role: "Gerente",
      company: "Remis Express",
      content: "Con 3 unidades, necesitaba mostrar mi flota. Ahora los clientes ven que tenemos opciones y confían más.",
      rating: 5,
    },
  ],
  gradientColors: "from-sky-600 to-blue-700",
};
