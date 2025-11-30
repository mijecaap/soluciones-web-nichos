import type { NicheData } from "./types";

export const limpiezaData: NicheData = {
  slug: "limpieza",
  title: "Servicios de Limpieza y Mantenimiento",
  headline: "Tu Empresa de Limpieza Visible: Más Clientes. Más Contratos. Más Ingresos.",
  subtitle: "Deja de depender solo de tarjetas de presentación. Aparece en Google cuando buscan servicios de limpieza.",
  metaTitle: "Páginas Web para Empresas de Limpieza | Servicios Profesionales",
  metaDescription: "Desarrollamos páginas web para servicios de limpieza y mantenimiento. Portafolio de trabajos, testimonios y WhatsApp directo. Desde S/800.",
  category: "economico",
  problems: [
    {
      icon: "search",
      title: "Invisibilidad en Google",
      description: "Clientes buscan 'limpieza de oficinas' o 'limpieza profunda' y no te encuentran.",
    },
    {
      icon: "document",
      title: "Solo tarjetas de presentación",
      description: "No tienes forma de mostrar tu trabajo y experiencia a nuevos clientes.",
    },
    {
      icon: "phone",
      title: "Dependes de referidos",
      description: "Solo llegas a nuevos clientes si alguien te recomienda personalmente.",
    },
    {
      icon: "ban",
      title: "Pierdes clientes empresariales",
      description: "Empresas buscan proveedores formales con presencia web profesional.",
    },
  ],
  solutions: [
    {
      icon: "globe",
      title: "Presencia profesional en Google",
      description: "Aparece cuando buscan servicios de limpieza en tu zona.",
      highlight: "+40% clientes nuevos",
    },
    {
      icon: "image",
      title: "Portafolio antes/después",
      description: "Muestra transformaciones reales que convencen a nuevos clientes.",
    },
    {
      icon: "chat",
      title: "WhatsApp para cotizaciones",
      description: "Los interesados te contactan directo para pedir presupuesto.",
      highlight: "+60% consultas",
    },
    {
      icon: "document",
      title: "Lista de servicios y precios",
      description: "Clientes ven claramente qué ofreces y tus tarifas referenciales.",
    },
  ],
  transformation: {
    before: {
      metric1: { label: "Clientes por mes", value: "8-10" },
      metric2: { label: "Tipo de clientes", value: "Solo hogares" },
      metric3: { label: "Ingresos mensuales", value: "S/2,000" },
    },
    after: {
      metric1: { label: "Clientes por mes", value: "20-25", improvement: "+150%" },
      metric2: { label: "Tipo de clientes", value: "Hogares + Empresas", improvement: "Diversificado" },
      metric3: { label: "Ingresos mensuales", value: "S/5,000", improvement: "+150%" },
    },
    roi: "Recuperas tu inversión en 2 meses",
  },
  pricing: [
    {
      name: "Básico",
      price: "S/800",
      description: "Para emprendedores que inician",
      features: [
        "Dominio 1 año incluido",
        "Hosting incluido",
        "5 páginas básicas",
        "Lista de servicios",
        "Formulario de contacto",
        "Google My Business",
        "Diseño responsive",
        "1 mes de soporte",
      ],
    },
    {
      name: "Estándar",
      price: "S/1,000",
      description: "El más popular",
      features: [
        "Todo lo del plan Básico",
        "Galería antes/después",
        "Testimonios de clientes",
        "Precios referenciales",
        "WhatsApp integrado",
        "SEO básico",
        "2 meses de soporte",
      ],
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Completo",
      price: "S/1,200",
      description: "Para empresas en crecimiento",
      features: [
        "Todo lo del plan Estándar",
        "Portafolio de trabajos",
        "Página de equipo",
        "Blog (3 artículos)",
        "Formulario de cotización",
        "Redes sociales integradas",
        "3 meses de soporte",
      ],
    },
  ],
  maintenanceNote: "Mantenimiento mensual desde S/100/mes incluye hosting, actualizaciones y soporte básico.",
  checklist: [
    "Diseño profesional y limpio",
    "Lista de servicios detallada",
    "Galería de trabajos",
    "Fotos antes/después",
    "Testimonios visibles",
    "WhatsApp directo",
    "Formulario de cotización",
    "Google Maps integrado",
    "SSL/HTTPS incluido",
    "Capacitación de uso",
  ],
  faqs: [
    {
      question: "¿Puedo mostrar fotos de antes y después?",
      answer: "Sí, incluimos galería especial para mostrar transformaciones de tus trabajos.",
    },
    {
      question: "¿Funciona para limpieza industrial?",
      answer: "Sí, adaptamos el contenido para cualquier tipo de servicio de limpieza o mantenimiento.",
    },
    {
      question: "¿Los clientes pueden pedir cotización online?",
      answer: "Sí, incluimos formulario que recoge los datos del cliente y el tipo de servicio que necesita.",
    },
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer: "Tu web está lista en 7-10 días hábiles dependiendo del plan elegido.",
    },
    {
      question: "¿Puedo agregar testimonios de clientes?",
      answer: "Sí, puedes agregar y actualizar testimonios desde el panel de administración.",
    },
  ],
  testimonials: [
    {
      name: "María Elena Díaz",
      role: "Propietaria",
      company: "Limpieza Express",
      content: "Antes solo limpiaba casas de conocidos. Ahora me contactan empresas que me encontraron en Google buscando limpieza de oficinas.",
      rating: 5,
    },
    {
      name: "Jorge Villanueva",
      role: "Gerente",
      company: "Clean Pro Servicios",
      content: "Las fotos de antes y después convencen a los clientes. Ven resultados reales y confían en contratarnos.",
      rating: 5,
    },
    {
      name: "Carmen Rodríguez",
      role: "Dueña",
      company: "Brillo Total",
      content: "Un edificio de oficinas me contrató porque vio mi web profesional. Antes ni me hubieran considerado.",
      rating: 5,
    },
  ],
  gradientColors: "from-emerald-600 to-green-700",
};
