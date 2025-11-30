import type { NicheData } from "./types";

export const reparacionesData: NicheData = {
  slug: "reparaciones",
  title: "Reparación y Servicios Técnicos",
  headline: "Tu Taller Visible en Google: Más Clientes. Más Reparaciones. Más Ingresos.",
  subtitle: "Deja de esperar clientes por recomendación. Aparece cuando buscan reparación de celulares, electrodomésticos o equipos.",
  metaTitle: "Páginas Web para Servicios de Reparación | Taller Técnico Online",
  metaDescription: "Desarrollamos páginas web para talleres de reparación y servicios técnicos. Lista de servicios, precios y diagnóstico gratis. Desde S/700.",
  category: "economico",
  problems: [
    {
      icon: "search",
      title: "No apareces en Google",
      description: "Buscan 'reparación celular cerca' o 'técnico de computadoras' y no te encuentran.",
    },
    {
      icon: "phone",
      title: "Solo clientes por referidos",
      description: "Dependes de que alguien pase tu número, no llegas a nuevos clientes.",
    },
    {
      icon: "document",
      title: "Sin lista de servicios visible",
      description: "Los clientes no saben qué reparas ni cuánto cobras aproximadamente.",
    },
    {
      icon: "clock",
      title: "Pierdes urgencias",
      description: "Clientes con emergencias eligen al primero que encuentran en Google.",
    },
  ],
  solutions: [
    {
      icon: "globe",
      title: "Presencia en Google",
      description: "Aparece cuando buscan reparaciones en tu zona.",
      highlight: "+25% clientes nuevos",
    },
    {
      icon: "document",
      title: "Lista de servicios y precios",
      description: "Clientes ven qué reparas y tus tarifas referenciales antes de llamar.",
    },
    {
      icon: "chat",
      title: "WhatsApp para diagnóstico",
      description: "Ofrece diagnóstico gratis y los clientes te contactan directo.",
      highlight: "+40% consultas",
    },
    {
      icon: "clock",
      title: "Horarios siempre visibles",
      description: "Los clientes saben cuándo estás disponible para atenderlos.",
    },
  ],
  transformation: {
    before: {
      metric1: { label: "Clientes por mes", value: "20-25" },
      metric2: { label: "Fuente de clientes", value: "90% referidos" },
      metric3: { label: "Ingresos mensuales", value: "S/2,500" },
    },
    after: {
      metric1: { label: "Clientes por mes", value: "35-40", improvement: "+60%" },
      metric2: { label: "Fuente de clientes", value: "50% Google", improvement: "Diversificado" },
      metric3: { label: "Ingresos mensuales", value: "S/4,500", improvement: "+80%" },
    },
    roi: "Recuperas tu inversión en 2 meses",
  },
  pricing: [
    {
      name: "Básico",
      price: "S/700",
      description: "Para técnicos independientes",
      features: [
        "Dominio 1 año incluido",
        "Hosting incluido",
        "4 páginas básicas",
        "Lista de servicios",
        "Formulario de contacto",
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
        "Precios referenciales",
        "Galería de trabajos",
        "Oferta diagnóstico gratis",
        "WhatsApp integrado",
        "SEO básico",
        "2 meses de soporte",
      ],
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Completo",
      price: "S/1,000",
      description: "Para talleres establecidos",
      features: [
        "Todo lo del plan Estándar",
        "Testimonios de clientes",
        "Garantías destacadas",
        "Marcas que reparas",
        "Blog tips (3 artículos)",
        "Redes sociales integradas",
        "3 meses de soporte",
      ],
    },
  ],
  maintenanceNote: "Mantenimiento mensual desde S/80/mes incluye hosting, actualizaciones y soporte básico.",
  checklist: [
    "Diseño profesional técnico",
    "Lista de servicios completa",
    "Precios referenciales",
    "Oferta de diagnóstico",
    "Garantías visibles",
    "WhatsApp directo",
    "Horarios de atención",
    "Google Maps integrado",
    "SSL/HTTPS incluido",
    "Capacitación de uso",
  ],
  faqs: [
    {
      question: "¿Puedo mostrar qué marcas reparo?",
      answer: "Sí, puedes listar las marcas y modelos con los que trabajas para atraer búsquedas específicas.",
    },
    {
      question: "¿Funciona para cualquier tipo de reparación?",
      answer: "Sí, adaptamos el diseño para celulares, computadoras, electrodomésticos, etc.",
    },
    {
      question: "¿Puedo ofrecer diagnóstico gratis en la web?",
      answer: "Sí, destacamos tu oferta de diagnóstico gratis para atraer más consultas.",
    },
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer: "Tu web está lista en 5-7 días hábiles dependiendo del plan elegido.",
    },
    {
      question: "¿Los clientes pueden solicitar servicio a domicilio?",
      answer: "Sí, si ofreces servicio a domicilio, lo destacamos en la web.",
    },
  ],
  testimonials: [
    {
      name: "Juan Pablo Méndez",
      role: "Técnico",
      company: "Tech Repair Lima",
      content: "Antes esperaba que me recomienden. Ahora me llaman personas que buscan 'reparación de celulares' en Google.",
      rating: 5,
    },
    {
      name: "Luis Ángel Paredes",
      role: "Propietario",
      company: "Servicio Técnico PC",
      content: "La oferta de diagnóstico gratis en la web me trajo muchos clientes. Ven la lista de servicios y confían.",
      rating: 5,
    },
    {
      name: "Fernando Torres",
      role: "Técnico",
      company: "Electroservice 24h",
      content: "Mi web me diferencia de otros técnicos. Los clientes ven que soy formal y me eligen sobre la competencia.",
      rating: 5,
    },
  ],
  gradientColors: "from-slate-600 to-gray-700",
};
