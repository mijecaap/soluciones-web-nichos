import type { NicheData } from "./types";

export const tiendasRopaData: NicheData = {
  slug: "tiendas-ropa",
  title: "Tiendas de Ropa y Accesorios",
  headline: "Tu Tienda de Ropa Online: Más Clientes. Catálogo Digital. Ventas 24/7.",
  subtitle: "Deja de depender solo de Facebook y WhatsApp. Crea tu catálogo profesional y llega a clientes que te buscan en Google.",
  metaTitle: "Páginas Web para Tiendas de Ropa | Catálogo Online Profesional",
  metaDescription: "Desarrollamos páginas web económicas para tiendas de ropa y boutiques. Catálogo digital, galería de productos y WhatsApp integrado. Desde S/800.",
  category: "economico",
  problems: [
    {
      icon: "phone",
      title: "Solo vendes por WhatsApp",
      description: "Pasas horas enviando fotos una por una y perdiendo tiempo en conversaciones repetitivas.",
    },
    {
      icon: "search",
      title: "Invisibilidad en Google",
      description: "Clientes buscan 'ropa en [tu ciudad]' pero solo encuentran a tu competencia.",
    },
    {
      icon: "document",
      title: "Sin catálogo profesional",
      description: "Tus productos están dispersos en historias de Instagram que desaparecen.",
    },
    {
      icon: "ban",
      title: "Pierdes clientes nuevos",
      description: "Solo vendes a conocidos y referidos, no llegas a nuevos compradores.",
    },
  ],
  solutions: [
    {
      icon: "globe",
      title: "Catálogo online profesional",
      description: "Todos tus productos organizados con fotos, tallas, precios y descripciones.",
      highlight: "+200% productos vistos",
    },
    {
      icon: "image",
      title: "Galería de colecciones",
      description: "Muestra tus mejores outfits y tendencias de temporada.",
    },
    {
      icon: "chat",
      title: "WhatsApp integrado",
      description: "Botón directo para consultas y pedidos rápidos.",
      highlight: "+50% consultas",
    },
    {
      icon: "chart",
      title: "Google My Business",
      description: "Aparece en mapas cuando buscan tiendas de ropa cerca.",
    },
  ],
  transformation: {
    before: {
      metric1: { label: "Clientes por mes", value: "5-8" },
      metric2: { label: "Productos mostrados", value: "10-15" },
      metric3: { label: "Ventas mensuales", value: "S/1,500" },
    },
    after: {
      metric1: { label: "Clientes por mes", value: "15-20", improvement: "+150%" },
      metric2: { label: "Productos mostrados", value: "30+", improvement: "+200%" },
      metric3: { label: "Ventas mensuales", value: "S/3,500", improvement: "+133%" },
    },
    roi: "Recuperas tu inversión en 1-2 meses",
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
        "Catálogo hasta 20 productos",
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
        "Catálogo hasta 50 productos",
        "Galería de colecciones",
        "WhatsApp integrado",
        "SEO básico",
        "Integración Instagram",
        "2 meses de soporte",
      ],
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Completo",
      price: "S/1,200",
      description: "Para tiendas en crecimiento",
      features: [
        "Todo lo del plan Estándar",
        "Catálogo ilimitado",
        "Sistema de tallas/colores",
        "Blog de moda (3 artículos)",
        "Newsletter básico",
        "Redes sociales integradas",
        "3 meses de soporte",
      ],
    },
  ],
  maintenanceNote: "Mantenimiento mensual desde S/100/mes incluye hosting, actualizaciones y soporte básico.",
  checklist: [
    "Diseño moderno y atractivo",
    "Catálogo de productos organizado",
    "Fotos optimizadas",
    "Información de tallas",
    "Precios visibles",
    "WhatsApp directo",
    "Google Maps integrado",
    "Responsive para móviles",
    "SSL/HTTPS incluido",
    "Capacitación de uso",
  ],
  faqs: [
    {
      question: "¿Puedo actualizar los productos yo misma?",
      answer: "Sí, te entregamos acceso a un panel simple donde puedes agregar, editar o eliminar productos fácilmente.",
    },
    {
      question: "¿Cuántas fotos puedo subir por producto?",
      answer: "Puedes subir hasta 4 fotos por producto para mostrar diferentes ángulos y detalles.",
    },
    {
      question: "¿Los clientes pueden comprar directo en la web?",
      answer: "Esta versión es tipo catálogo con consulta por WhatsApp. Si necesitas carrito de compras, consulta por upgrade.",
    },
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer: "El sitio está listo en 7-10 días hábiles dependiendo del plan elegido.",
    },
    {
      question: "¿Incluye el dominio .com?",
      answer: "Sí, el primer año del dominio está incluido. Luego es aproximadamente S/50/año.",
    },
  ],
  testimonials: [
    {
      name: "Lucía Fernández",
      role: "Propietaria",
      company: "Boutique Elegance",
      content: "Antes solo vendía por Instagram. Ahora mis clientas ven todo el catálogo organizado y me contactan más seguras de lo que quieren.",
      rating: 5,
    },
    {
      name: "Rosa María Torres",
      role: "Dueña",
      company: "Moda Juvenil RM",
      content: "El WhatsApp integrado fue clave. Recibo consultas de gente que me encontró en Google, no solo de mis seguidores.",
      rating: 5,
    },
    {
      name: "Andrea Castillo",
      role: "Emprendedora",
      company: "Style Corner",
      content: "Por fin tengo algo profesional que mostrar. Mis ventas subieron porque la gente confía más en una tienda con web propia.",
      rating: 5,
    },
  ],
  gradientColors: "from-fuchsia-600 to-pink-700",
};
