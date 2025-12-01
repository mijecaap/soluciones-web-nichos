import type { NicheData } from "./types";

export const agricolaData: NicheData = {
  slug: "agricola",
  title: "Productores Agrícolas y Agroindustria",
  headline: "Tu Producción Visible: Nuevos Mercados. Mejores Precios. Más Compradores.",
  subtitle: "Deja de vender solo a minoristas locales. Llega a restaurantes, empresas y exportadores que buscan productores.",
  metaTitle: "Páginas Web para Productores Agrícolas | Catálogo de Productos",
  metaDescription: "Desarrollamos páginas web para productores agrícolas y agroindustria. Catálogo de productos, certificaciones y contacto directo. Desde S/900.",
  category: "economico",
  problems: [
    {
      icon: "globe",
      title: "Mercado limitado",
      description: "Solo vendes a compradores locales que conoces, no llegas a nuevos mercados.",
    },
    {
      icon: "document",
      title: "Sin catálogo digital",
      description: "No tienes forma de mostrar tus productos, volúmenes y certificaciones.",
    },
    {
      icon: "search",
      title: "Compradores no te encuentran",
      description: "Restaurantes y empresas buscan proveedores pero no saben que existes.",
    },
    {
      icon: "chart",
      title: "Precios de intermediarios",
      description: "Vendes barato a intermediarios que ganan más que tú.",
    },
  ],
  solutions: [
    {
      icon: "image",
      title: "Catálogo de productos",
      description: "Muestra tus productos con fotos, especificaciones y volúmenes disponibles.",
      highlight: "Acceso a nuevos mercados",
    },
    {
      icon: "document",
      title: "Certificaciones visibles",
      description: "Destaca tus certificaciones orgánicas, sanitarias o de calidad.",
    },
    {
      icon: "chart",
      title: "Proceso productivo",
      description: "Muestra cómo produces para generar confianza en compradores.",
      highlight: "Mejores precios",
    },
    {
      icon: "chat",
      title: "Contacto directo",
      description: "Compradores te contactan directo sin intermediarios.",
    },
  ],
  transformation: {
    before: {
      metric1: { label: "Compradores", value: "3-5 locales" },
      metric2: { label: "Precio de venta", value: "Precio mínimo" },
      metric3: { label: "Ventas mensuales", value: "S/5,000" },
    },
    after: {
      metric1: { label: "Compradores", value: "10-15 diversos", improvement: "+200%" },
      metric2: { label: "Precio de venta", value: "+20-30% mejor", improvement: "Directo" },
      metric3: { label: "Ventas mensuales", value: "S/8,000", improvement: "+60%" },
    },
    roi: "Recuperas tu inversión en 3-4 meses",
  },
  pricing: [
    {
      name: "Básico",
      price: "S/900",
      description: "Para productores que inician",
      features: [
        "Dominio 1 año incluido",
        "Hosting incluido",
        "5 páginas básicas",
        "Catálogo hasta 20 productos",
        "Información del productor",
        "Formulario de contacto",
        "Google My Business",
        "1 mes de soporte",
      ],
    },
    {
      name: "Estándar",
      price: "S/1,100",
      description: "El más popular",
      features: [
        "Todo lo del plan Básico",
        "Catálogo hasta 40 productos",
        "Certificaciones destacadas",
        "Galería de proceso productivo",
        "WhatsApp integrado",
        "SEO básico",
        "2 meses de soporte",
      ],
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Completo",
      price: "S/1,300",
      description: "Para productores establecidos",
      features: [
        "Todo lo del plan Estándar",
        "Catálogo ilimitado",
        "Especificaciones técnicas",
        "Historia y tradición",
        "Blog (3 artículos)",
        "Formulario de cotización",
        "3 meses de soporte",
      ],
    },
  ],
  maintenanceNote: "Mantenimiento mensual desde S/100/mes incluye hosting, actualizaciones y soporte básico.",
  checklist: [
    "Diseño profesional agrícola",
    "Catálogo de productos",
    "Especificaciones técnicas",
    "Certificaciones visibles",
    "Galería del campo/planta",
    "Proceso productivo",
    "WhatsApp directo",
    "Google Maps integrado",
    "SSL/HTTPS incluido",
    "Capacitación de uso",
  ],
  faqs: [
    {
      question: "¿Puedo mostrar mis certificaciones orgánicas?",
      answer: "Sí, destacamos tus certificaciones con logos y documentos verificables.",
    },
    {
      question: "¿Funciona para cooperativas?",
      answer: "Sí, adaptamos el diseño para productores individuales o cooperativas.",
    },
    {
      question: "¿Los compradores pueden pedir cotización?",
      answer: "Sí, incluimos formulario donde especifican producto, volumen y frecuencia.",
    },
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer: "Tu web está lista en 10-15 días hábiles dependiendo del plan elegido.",
    },
    {
      question: "¿Puedo mostrar mi proceso de producción?",
      answer: "Sí, incluimos galería para mostrar el campo, proceso y empaque.",
    },
  ],
  testimonials: [
    {
      name: "Don José Huamán",
      role: "Productor",
      company: "Café Orgánico Chanchamayo",
      content: "Un restaurante de Lima me contactó por la web. Ahora le vendo directo sin intermediarios y gano mejor.",
      rating: 5,
    },
    {
      name: "Cooperativa Agraria Virú",
      role: "Representante",
      company: "Cooperativa Virú",
      content: "Exportadores nos encontraron en Google. La web con certificaciones les dio confianza para comprarnos.",
      rating: 5,
    },
    {
      name: "María Condori",
      role: "Productora",
      company: "Quinua Puno",
      content: "Antes vendía a S/5 el kilo a intermediarios. Ahora vendo a S/8 directo a tiendas de Lima.",
      rating: 5,
    },
  ],
  gradientColors: "from-lime-600 to-green-700",
};
