import type { NicheData } from "./types";

export const cafeteriasData: NicheData = {
  slug: "cafeterias",
  title: "Cafeterías y Comidas Rápidas",
  headline: "Tu Cafetería Online: Menú Digital. Más Pedidos. Delivery Incluido.",
  subtitle: "Deja de perder clientes por no tener menú online. Muestra tus productos y recibe pedidos por WhatsApp.",
  metaTitle: "Páginas Web para Cafeterías | Menú Digital y Pedidos Online",
  metaDescription: "Desarrollamos páginas web para cafeterías y comidas rápidas. Menú digital con fotos, ubicación y pedidos por WhatsApp. Desde S/1,000.",
  category: "economico",
  problems: [
    {
      icon: "document",
      title: "Sin menú digital",
      description: "Clientes preguntan qué tienes por WhatsApp porque no pueden ver tu carta.",
    },
    {
      icon: "search",
      title: "Solo Google Maps básico",
      description: "Tu perfil de Google no muestra menú, fotos ni horarios actualizados.",
    },
    {
      icon: "phone",
      title: "Pierdes pedidos de delivery",
      description: "Clientes quieren pedir pero no saben qué ofreces ni cómo contactarte.",
    },
    {
      icon: "clock",
      title: "Horarios confusos",
      description: "Los clientes no saben si estás abierto y no te visitan por duda.",
    },
  ],
  solutions: [
    {
      icon: "menu",
      title: "Menú digital con fotos",
      description: "Cada producto con foto atractiva, descripción y precio actualizado.",
      highlight: "+25% ticket promedio",
    },
    {
      icon: "chat",
      title: "Pedidos por WhatsApp",
      description: "Botón directo para que pidan delivery o takeaway fácilmente.",
      highlight: "+15% pedidos",
    },
    {
      icon: "clock",
      title: "Horarios y ubicación claros",
      description: "Siempre visible cuándo estás abierto y cómo llegar.",
    },
    {
      icon: "chart",
      title: "Google My Business optimizado",
      description: "Aparece con fotos y menú cuando buscan cafeterías cerca.",
    },
  ],
  transformation: {
    before: {
      metric1: { label: "Clientes por día", value: "30" },
      metric2: { label: "Pedidos delivery", value: "5-8/día" },
      metric3: { label: "Ventas mensuales", value: "S/4,500" },
    },
    after: {
      metric1: { label: "Clientes por día", value: "38-40", improvement: "+30%" },
      metric2: { label: "Pedidos delivery", value: "12-15/día", improvement: "+80%" },
      metric3: { label: "Ventas mensuales", value: "S/7,000", improvement: "+55%" },
    },
    roi: "Recuperas tu inversión en 3 meses",
  },
  pricing: [
    {
      name: "Básico",
      price: "S/1,000",
      description: "Para cafeterías pequeñas",
      features: [
        "Dominio 1 año incluido",
        "Hosting incluido",
        "5 páginas básicas",
        "Menú digital básico",
        "Hasta 30 productos",
        "WhatsApp integrado",
        "Google My Business",
        "1 mes de soporte",
      ],
    },
    {
      name: "Estándar",
      price: "S/1,250",
      description: "El más popular",
      features: [
        "Todo lo del plan Básico",
        "Menú con fotos",
        "Hasta 50 productos",
        "Categorías organizadas",
        "Galería del local",
        "SEO básico",
        "2 meses de soporte",
      ],
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Completo",
      price: "S/1,500",
      description: "Para negocios en crecimiento",
      features: [
        "Todo lo del plan Estándar",
        "Menú ilimitado",
        "Promociones destacadas",
        "Sección de combos",
        "Testimonios de clientes",
        "Redes sociales integradas",
        "3 meses de soporte",
      ],
    },
  ],
  maintenanceNote: "Mantenimiento mensual desde S/120/mes incluye hosting, actualizaciones de menú y soporte.",
  checklist: [
    "Diseño atractivo y apetitoso",
    "Menú digital organizado",
    "Fotos de productos",
    "Precios actualizables",
    "Horarios visibles",
    "WhatsApp para pedidos",
    "Google Maps integrado",
    "Responsive para móviles",
    "SSL/HTTPS incluido",
    "Capacitación de uso",
  ],
  faqs: [
    {
      question: "¿Puedo actualizar el menú yo mismo?",
      answer: "Sí, te entregamos acceso a un panel simple donde puedes cambiar productos, precios y fotos.",
    },
    {
      question: "¿Incluye sistema de pedidos online?",
      answer: "Incluimos botón de WhatsApp para pedidos. Para carrito de compras completo, consulta por upgrade.",
    },
    {
      question: "¿Funciona para food trucks?",
      answer: "Sí, adaptamos el diseño para cualquier negocio de comida, incluyendo food trucks.",
    },
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer: "Tu web está lista en 10-12 días hábiles dependiendo del plan elegido.",
    },
    {
      question: "¿Las fotos del menú las tomo yo?",
      answer: "Sí, tú nos envías las fotos. Te damos tips para que queden profesionales con tu celular.",
    },
  ],
  testimonials: [
    {
      name: "Ana García",
      role: "Propietaria",
      company: "Café Aroma",
      content: "Antes los clientes preguntaban qué había por WhatsApp. Ahora ven el menú con fotos y piden directo. Mis ventas de delivery subieron un 50%.",
      rating: 5,
    },
    {
      name: "Roberto Flores",
      role: "Dueño",
      company: "Sanguchería El Sabor",
      content: "La gente nos encuentra en Google buscando sangucherías. Antes solo nos conocían los vecinos del barrio.",
      rating: 5,
    },
    {
      name: "Patricia Medina",
      role: "Gerente",
      company: "Juguería Frutal",
      content: "Las fotos del menú convencen a los clientes. Ven lo rico que se ve y piden más de lo que pensaban.",
      rating: 5,
    },
  ],
  gradientColors: "from-amber-600 to-yellow-700",
};
