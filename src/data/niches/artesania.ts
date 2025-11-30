import type { NicheData } from "./types";

export const artesaniaData: NicheData = {
  slug: "artesania",
  title: "Artesanía y Productos Locales",
  headline: "Tu Arte al Mundo: Vende Artesanía Todo el Año, No Solo en Ferias.",
  subtitle: "Deja de depender de ferias estacionales. Crea tu vitrina digital y llega a compradores que valoran lo hecho a mano.",
  metaTitle: "Páginas Web para Artesanos | Tienda Online de Artesanía Peruana",
  metaDescription: "Desarrollamos páginas web para artesanos y productos locales. Galería de productos, historia del arte y sistema de cotización. Desde S/900.",
  category: "economico",
  problems: [
    {
      icon: "calendar",
      title: "Solo vendes en ferias",
      description: "Tu ingreso depende de 2-3 ferias al año, el resto del tiempo no vendes.",
    },
    {
      icon: "search",
      title: "No te encuentran en Google",
      description: "Turistas y compradores buscan artesanía peruana pero no saben que existes.",
    },
    {
      icon: "document",
      title: "Sin catálogo digital",
      description: "Tus piezas únicas no tienen un lugar donde mostrarse permanentemente.",
    },
    {
      icon: "globe",
      title: "Mercado limitado",
      description: "Solo vendes a quien te visita físicamente, no llegas a otros mercados.",
    },
  ],
  solutions: [
    {
      icon: "image",
      title: "Galería de productos artesanales",
      description: "Cada pieza con fotos detalladas, descripción del proceso y materiales.",
      highlight: "Ventas todo el año",
    },
    {
      icon: "document",
      title: "Historia del artesano",
      description: "Cuenta tu historia, tradición y técnicas. Los compradores valoran la autenticidad.",
    },
    {
      icon: "chat",
      title: "Sistema de cotización",
      description: "Los interesados solicitan cotización directa para piezas personalizadas.",
      highlight: "+40% consultas",
    },
    {
      icon: "globe",
      title: "Visibilidad en Google",
      description: "Aparece cuando buscan artesanía peruana, cerámica, textiles, etc.",
    },
  ],
  transformation: {
    before: {
      metric1: { label: "Meses de venta", value: "2-3 al año" },
      metric2: { label: "Alcance", value: "Solo local" },
      metric3: { label: "Ventas anuales", value: "S/4,000" },
    },
    after: {
      metric1: { label: "Meses de venta", value: "12 meses", improvement: "+300%" },
      metric2: { label: "Alcance", value: "Nacional", improvement: "Expandido" },
      metric3: { label: "Ventas anuales", value: "S/12,000", improvement: "+200%" },
    },
    roi: "Recuperas tu inversión en 2-3 meses",
  },
  pricing: [
    {
      name: "Básico",
      price: "S/900",
      description: "Para artesanos que inician",
      features: [
        "Dominio 1 año incluido",
        "Hosting incluido",
        "5 páginas básicas",
        "Galería hasta 30 productos",
        "Historia del artesano",
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
        "Galería hasta 60 productos",
        "Descripción de técnicas",
        "Sistema de cotización",
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
      description: "Para artesanos establecidos",
      features: [
        "Todo lo del plan Estándar",
        "Galería ilimitada",
        "Categorías por tipo de arte",
        "Blog (3 artículos)",
        "Video integrado",
        "Certificaciones/premios",
        "3 meses de soporte",
      ],
    },
  ],
  maintenanceNote: "Mantenimiento mensual desde S/100/mes incluye hosting, actualizaciones y soporte básico.",
  checklist: [
    "Diseño que resalta el arte",
    "Galería de productos detallada",
    "Historia y tradición visible",
    "Proceso de elaboración",
    "Materiales utilizados",
    "WhatsApp para consultas",
    "Google Maps del taller",
    "Responsive para móviles",
    "SSL/HTTPS incluido",
    "Capacitación completa",
  ],
  faqs: [
    {
      question: "¿Puedo mostrar el proceso de elaboración?",
      answer: "Sí, puedes incluir fotos del proceso paso a paso y videos cortos de tu trabajo.",
    },
    {
      question: "¿Sirve para vender a turistas extranjeros?",
      answer: "Sí, podemos agregar textos en inglés básico para atraer compradores internacionales.",
    },
    {
      question: "¿Puedo recibir pedidos personalizados?",
      answer: "Sí, el formulario de cotización permite que los clientes describan lo que buscan.",
    },
    {
      question: "¿Incluye carrito de compras?",
      answer: "Esta versión es tipo catálogo con cotización. Para tienda con pagos online, consulta por upgrade.",
    },
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer: "Tu web está lista en 10-15 días hábiles dependiendo del plan elegido.",
    },
  ],
  testimonials: [
    {
      name: "Doña María Quispe",
      role: "Artesana Textil",
      company: "Tejidos Andinos",
      content: "Antes solo vendía en ferias de Cusco. Ahora me contactan de Lima, Arequipa y hasta de otros países.",
      rating: 5,
    },
    {
      name: "Pedro Huamán",
      role: "Ceramista",
      company: "Cerámica Chulucanas",
      content: "La galería con mis piezas y la historia de mi familia artesana convenció a varios restaurantes de Lima.",
      rating: 5,
    },
    {
      name: "Carmen Mendoza",
      role: "Artesana",
      company: "Arte en Plata Catacaos",
      content: "Turistas que visitaron Piura ahora me piden joyería por la web. Vendo todo el año, no solo en temporada.",
      rating: 5,
    },
  ],
  gradientColors: "from-amber-600 to-orange-700",
};
