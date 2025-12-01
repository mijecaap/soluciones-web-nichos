import type { NicheData } from "./types";

export const instructoresData: NicheData = {
  slug: "instructores",
  title: "Instructores y Coaches",
  headline: "Tu Marca Personal Online: Más Alumnos. Más Credibilidad. Más Ingresos.",
  subtitle: "Deja de competir solo en redes sociales. Crea tu sitio profesional y atrae alumnos que buscan entrenadores en Google.",
  metaTitle: "Páginas Web para Instructores y Coaches | Portafolio Profesional",
  metaDescription: "Desarrollamos páginas web para instructores, coaches y entrenadores personales. Bio profesional, servicios y testimonios. Desde S/800.",
  category: "economico",
  problems: [
    {
      icon: "phone",
      title: "Solo redes sociales",
      description: "Dependes de Instagram y Facebook, pero el algoritmo limita tu alcance.",
    },
    {
      icon: "document",
      title: "Sin sitio profesional",
      description: "Pareces informal comparado con competidores que tienen web propia.",
    },
    {
      icon: "search",
      title: "No te encuentran en Google",
      description: "Buscan 'entrenador personal' o 'coach' en tu ciudad y no apareces.",
    },
    {
      icon: "ban",
      title: "Pierdes alumnos a la competencia",
      description: "Clientes potenciales eligen a otros que parecen más profesionales.",
    },
  ],
  solutions: [
    {
      icon: "globe",
      title: "Landing page profesional",
      description: "Tu marca personal con diseño que transmite confianza y experiencia.",
      highlight: "+100% credibilidad",
    },
    {
      icon: "document",
      title: "Bio y experiencia destacada",
      description: "Muestra tus certificaciones, logros y trayectoria de forma profesional.",
    },
    {
      icon: "chart",
      title: "Servicios y precios claros",
      description: "Los interesados ven exactamente qué ofreces y cuánto cuesta.",
      highlight: "+60% consultas",
    },
    {
      icon: "book",
      title: "Blog con tips",
      description: "Comparte contenido de valor que posiciona como experto.",
    },
  ],
  transformation: {
    before: {
      metric1: { label: "Alumnos activos", value: "5-8" },
      metric2: { label: "Consultas por mes", value: "3-5" },
      metric3: { label: "Ingresos mensuales", value: "S/1,500" },
    },
    after: {
      metric1: { label: "Alumnos activos", value: "15-20", improvement: "+150%" },
      metric2: { label: "Consultas por mes", value: "10-15", improvement: "+200%" },
      metric3: { label: "Ingresos mensuales", value: "S/4,000", improvement: "+167%" },
    },
    roi: "Recuperas tu inversión en 2-3 meses",
  },
  pricing: [
    {
      name: "Básico",
      price: "S/800",
      description: "Para instructores que inician",
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
        "Galería de resultados",
        "Testimonios de alumnos",
        "Precios de servicios",
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
      description: "Para coaches establecidos",
      features: [
        "Todo lo del plan Estándar",
        "Blog (3 artículos)",
        "Video de presentación",
        "Certificaciones destacadas",
        "Programa de referidos",
        "Redes sociales integradas",
        "3 meses de soporte",
      ],
    },
  ],
  maintenanceNote: "Mantenimiento mensual desde S/100/mes incluye hosting, actualizaciones y soporte básico.",
  checklist: [
    "Diseño profesional y motivador",
    "Bio completa con foto",
    "Certificaciones visibles",
    "Lista de servicios",
    "Testimonios de alumnos",
    "WhatsApp directo",
    "Galería de resultados",
    "Responsive para móviles",
    "SSL/HTTPS incluido",
    "Capacitación de uso",
  ],
  faqs: [
    {
      question: "¿Puedo mostrar transformaciones de mis alumnos?",
      answer: "Sí, incluimos galería para mostrar resultados de antes/después con permiso de tus alumnos.",
    },
    {
      question: "¿Funciona para clases online?",
      answer: "Sí, puedes destacar si ofreces clases presenciales, online o híbridas.",
    },
    {
      question: "¿Puedo agregar videos de mi trabajo?",
      answer: "Sí, puedes integrar videos de YouTube o Instagram mostrando entrenamientos o tips.",
    },
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer: "Tu web está lista en 7-10 días hábiles dependiendo del plan elegido.",
    },
    {
      question: "¿Puedo vender programas o ebooks?",
      answer: "Esta versión es informativa. Para venta de productos digitales, consulta por upgrade.",
    },
  ],
  testimonials: [
    {
      name: "Carlos Ruiz",
      role: "Entrenador Personal",
      company: "Fit con Carlos",
      content: "Pasé de 5 a 18 alumnos en 3 meses. La web profesional me dio credibilidad frente a otros trainers que solo tienen Instagram.",
      rating: 5,
    },
    {
      name: "Mariana López",
      role: "Coach de Vida",
      company: "Coaching Transformador",
      content: "Mis clientes potenciales ven mi bio, certificaciones y testimonios. Llegan más convencidos de trabajar conmigo.",
      rating: 5,
    },
    {
      name: "Diego Hernández",
      role: "Instructor de Yoga",
      company: "Yoga con Diego",
      content: "La gente me encuentra buscando 'yoga en [mi ciudad]' en Google. Antes solo me conocían por boca a boca.",
      rating: 5,
    },
  ],
  gradientColors: "from-indigo-600 to-violet-700",
};
