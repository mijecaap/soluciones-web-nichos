import type { NicheData } from "./types";

export const freelancersData: NicheData = {
  slug: "freelancers",
  title: "Consultores y Freelancers",
  headline: "Tu Portafolio Profesional: Más Clientes. Más Credibilidad. Mejores Proyectos.",
  subtitle: "Deja de depender solo de LinkedIn. Crea tu sitio profesional y atrae clientes que buscan consultores expertos.",
  metaTitle: "Páginas Web para Freelancers | Portafolio Profesional Online",
  metaDescription: "Desarrollamos páginas web para freelancers y consultores independientes. Portafolio, casos de éxito y CV descargable. Desde S/800.",
  category: "economico",
  problems: [
    {
      icon: "document",
      title: "Solo LinkedIn",
      description: "Compites con miles de perfiles y pareces uno más del montón.",
    },
    {
      icon: "search",
      title: "No te encuentran en Google",
      description: "Empresas buscan consultores expertos pero no saben que existes.",
    },
    {
      icon: "ban",
      title: "Pareces informal",
      description: "Sin sitio propio, clientes dudan de tu profesionalismo.",
    },
    {
      icon: "chart",
      title: "Pocos proyectos nuevos",
      description: "Dependes de referidos, no generas leads de forma constante.",
    },
  ],
  solutions: [
    {
      icon: "globe",
      title: "Landing profesional propia",
      description: "Tu marca personal con dominio propio que transmite seriedad.",
      highlight: "+100% credibilidad",
    },
    {
      icon: "document",
      title: "Portafolio de casos de éxito",
      description: "Muestra proyectos realizados con resultados medibles.",
    },
    {
      icon: "chart",
      title: "Servicios y experiencia",
      description: "Los clientes ven claramente qué haces y tu trayectoria.",
      highlight: "+50% consultas",
    },
    {
      icon: "download",
      title: "CV descargable",
      description: "Los interesados descargan tu CV completo para evaluar.",
    },
  ],
  transformation: {
    before: {
      metric1: { label: "Clientes por mes", value: "2-3" },
      metric2: { label: "Fuente de clientes", value: "Solo referidos" },
      metric3: { label: "Ingresos mensuales", value: "S/3,000" },
    },
    after: {
      metric1: { label: "Clientes por mes", value: "5-6", improvement: "+100%" },
      metric2: { label: "Fuente de clientes", value: "Google + Referidos", improvement: "Diversificado" },
      metric3: { label: "Ingresos mensuales", value: "S/6,000", improvement: "+100%" },
    },
    roi: "Recuperas tu inversión en 3 meses",
  },
  pricing: [
    {
      name: "Básico",
      price: "S/800",
      description: "Para freelancers que inician",
      features: [
        "Dominio 1 año incluido",
        "Hosting incluido",
        "4 páginas básicas",
        "Bio profesional",
        "Lista de servicios",
        "Formulario de contacto",
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
        "Portafolio de proyectos",
        "Casos de éxito",
        "CV descargable",
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
      description: "Para consultores establecidos",
      features: [
        "Todo lo del plan Estándar",
        "Blog (3 artículos)",
        "Testimonios de clientes",
        "Certificaciones destacadas",
        "Video de presentación",
        "LinkedIn integrado",
        "3 meses de soporte",
      ],
    },
  ],
  maintenanceNote: "Mantenimiento mensual desde S/100/mes incluye hosting, actualizaciones y soporte básico.",
  checklist: [
    "Diseño profesional ejecutivo",
    "Bio completa con foto",
    "Portafolio de proyectos",
    "Casos de éxito",
    "Servicios y tarifas",
    "CV descargable",
    "WhatsApp y email",
    "LinkedIn integrado",
    "SSL/HTTPS incluido",
    "Capacitación de uso",
  ],
  faqs: [
    {
      question: "¿Puedo mostrar mis certificaciones?",
      answer: "Sí, destacamos tus certificaciones, cursos y logros profesionales.",
    },
    {
      question: "¿Funciona para cualquier tipo de consultoría?",
      answer: "Sí, adaptamos el diseño para consultores de cualquier área o industria.",
    },
    {
      question: "¿Puedo agregar mis tarifas?",
      answer: "Sí, puedes mostrar tarifas por hora, proyecto, o solo bajo consulta.",
    },
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer: "Tu web está lista en 7-10 días hábiles dependiendo del plan elegido.",
    },
    {
      question: "¿Puedo integrar mi calendario para agendar llamadas?",
      answer: "Sí, podemos integrar Calendly u otra herramienta de agendamiento.",
    },
  ],
  testimonials: [
    {
      name: "Andrea Soto",
      role: "Consultora de Marketing",
      company: "AS Consulting",
      content: "Mi sitio web profesional me diferencia de otros consultores. Los clientes ven mis casos de éxito y confían en contratarme.",
      rating: 5,
    },
    {
      name: "Roberto Díaz",
      role: "Desarrollador Freelance",
      company: "RD Development",
      content: "Empresas me encuentran en Google buscando desarrolladores. Mi portafolio con proyectos reales los convence.",
      rating: 5,
    },
    {
      name: "Claudia Vega",
      role: "Consultora Financiera",
      company: "Finanzas CV",
      content: "Pasé de 2-3 clientes por mes a 5-6. La web profesional me posiciona como experta en mi área.",
      rating: 5,
    },
  ],
  gradientColors: "from-gray-600 to-slate-700",
};
