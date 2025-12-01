import type { NicheData } from "./types";

export const restaurantesData: NicheData = {
  slug: "restaurantes",
  title: "Restaurantes y Bares",
  headline: "Restaurante Digital: Más Clientes. Reservas Online. Pedidos Automáticos.",
  subtitle: "Aumenta tus mesas ocupadas, reduce esperas, y llega a clientes nuevos que te buscan en Google.",
  metaTitle: "Páginas Web para Restaurantes | Menú Digital y Reservas Online",
  metaDescription: "Desarrollamos páginas web para restaurantes y bares. Menú digital interactivo, sistema de reservas y pedidos online. Desde S/4,000.",
  category: "premium",
  problems: [
    {
      icon: "search",
      title: "No apareces en Google",
      description: "Los comensales buscan restaurantes cerca pero encuentran a tu competencia.",
    },
    {
      icon: "calendar",
      title: "Sin reservas online",
      description: "Pierdes clientes que quieren reservar a las 11pm cuando estás cerrado.",
    },
    {
      icon: "document",
      title: "Menú desactualizado",
      description: "Tu carta en papel no muestra los platos y los precios están desactualizados.",
    },
    {
      icon: "globe",
      title: "Turistas perdidos",
      description: "Visitantes extranjeros no encuentran información ni menú en inglés.",
    },
  ],
  solutions: [
    {
      icon: "globe",
      title: "Web profesional en Google",
      description: "Aparece cuando buscan 'restaurante cerca' con fotos atractivas de tus platos.",
      highlight: "+40% clientes",
    },
    {
      icon: "calendar",
      title: "Sistema de reservas online",
      description: "Tus clientes reservan mesa 24/7 con confirmación automática.",
    },
    {
      icon: "menu",
      title: "Menú digital interactivo",
      description: "Fotos de platos, descripciones y precios actualizables al instante.",
    },
    {
      icon: "creditCard",
      title: "Pedidos online con pago",
      description: "Delivery y take-away con pasarela de pago integrada.",
    },
    {
      icon: "translate",
      title: "Multi-idioma",
      description: "Menú y web en español, inglés y más para atraer turistas.",
    },
  ],
  transformation: {
    before: {
      metric1: { label: "Mesas por día", value: "15 mesas" },
      metric2: { label: "Ocupación", value: "40%" },
      metric3: { label: "Ingresos mensuales", value: "S/12,000" },
    },
    after: {
      metric1: { label: "Mesas por día", value: "25 mesas", improvement: "+67%" },
      metric2: { label: "Ocupación", value: "75%", improvement: "+87%" },
      metric3: { label: "Ingresos mensuales", value: "S/24,000", improvement: "+100%" },
    },
    roi: "Recuperas tu inversión en 1 mes",
  },
  pricing: [
    {
      name: "Básico",
      price: "S/4,000",
      description: "Para restaurantes pequeños",
      features: [
        "Web de 5 páginas",
        "Menú digital básico",
        "Galería de platos",
        "Google Maps y horarios",
        "WhatsApp integrado",
        "SEO básico local",
        "Entrega en 15 días",
      ],
    },
    {
      name: "Profesional",
      price: "S/6,500",
      description: "Para restaurantes en crecimiento",
      features: [
        "Todo lo del plan Básico",
        "Sistema de reservas online",
        "Menú digital interactivo",
        "Categorías y filtros",
        "Panel de administración",
        "SEO avanzado",
        "Multi-idioma (2 idiomas)",
        "Entrega en 25 días",
      ],
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Premium",
      price: "S/9,500",
      description: "Para restaurantes premium",
      features: [
        "Todo lo del plan Profesional",
        "Pedidos online integrados",
        "Pasarela de pago",
        "Sistema de delivery",
        "Programa de lealtad",
        "Multi-idioma (4 idiomas)",
        "App móvil PWA",
        "Entrega en 35 días",
      ],
    },
  ],
  maintenanceNote: "Mantenimiento mensual desde S/400/mes incluye hosting, actualizaciones de menú y soporte.",
  checklist: [
    "Diseño atractivo con fotos de platos",
    "Menú digital actualizable",
    "Sistema de reservas",
    "Integración con Google Business",
    "Horarios y ubicación",
    "Galería del local",
    "Reseñas de clientes",
    "Optimización móvil",
    "SEO local configurado",
    "Redes sociales integradas",
  ],
  faqs: [
    {
      question: "¿Puedo actualizar el menú yo mismo?",
      answer: "Sí, el panel de administración te permite cambiar platos, precios y fotos fácilmente.",
    },
    {
      question: "¿El sistema de pedidos incluye delivery?",
      answer: "Sí, el plan Premium incluye gestión de delivery con zonas y costos configurables.",
    },
    {
      question: "¿Funciona con múltiples locales?",
      answer: "Sí, podemos configurar múltiples sucursales con menús independientes o compartidos.",
    },
    {
      question: "¿Qué pasarelas de pago aceptan?",
      answer: "Integramos Mercado Pago, Niubiz, PayPal y otras pasarelas locales e internacionales.",
    },
    {
      question: "¿El menú puede mostrarse en otros idiomas?",
      answer: "Sí, desde el plan Profesional incluimos 2 idiomas, y Premium hasta 4 idiomas.",
    },
  ],
  testimonials: [
    {
      name: "Chef Marco Vargas",
      role: "Propietario",
      company: "Restaurante El Buen Sabor",
      content: "El menú digital con fotos aumentó nuestro ticket promedio en 25%. Los clientes piden más al ver los platos.",
      rating: 5,
    },
    {
      name: "Laura Chen",
      role: "Gerente",
      company: "Sushi Bar Tokyo",
      content: "Los turistas ahora nos encuentran fácilmente. El menú en inglés y japonés fue clave para nuestro éxito.",
      rating: 5,
    },
    {
      name: "Diego Fernández",
      role: "Dueño",
      company: "Bar La Terraza",
      content: "Las reservas online nos ayudan a planificar el personal. Sabemos cuánta gente esperar cada noche.",
      rating: 5,
    },
  ],
  gradientColors: "from-orange-600 to-red-700",
};
