import type { NicheData } from "./types";

export const bellezaEconomicoData: NicheData = {
  slug: "belleza-economico",
  title: "Salones de Belleza Pequeños",
  headline: "Tu Salón Pequeño Online: Menos No-Shows. Más Clientes. Más Ocupación.",
  subtitle: "Organiza tu agenda, reduce cancelaciones y llena tus horarios con clientes que te encuentran en Google.",
  metaTitle: "Páginas Web para Peluquerías Pequeñas | Reservas Simples Online",
  metaDescription: "Desarrollamos páginas web económicas para salones de belleza pequeños. Servicios, galería de trabajos y reservas simples. Desde S/1,000.",
  category: "economico",
  problems: [
    {
      icon: "phone",
      title: "Solo WhatsApp y teléfono",
      description: "Pasas tiempo contestando mensajes y llamadas para agendar citas.",
    },
    {
      icon: "ban",
      title: "Muchos no-shows",
      description: "Clientes olvidan la cita o cancelan a última hora y pierdes dinero.",
    },
    {
      icon: "search",
      title: "No te encuentran en Google",
      description: "Buscan 'peluquería cerca' pero solo aparecen salones grandes.",
    },
    {
      icon: "calendar",
      title: "Agenda desorganizada",
      description: "Anotas en cuaderno o celular y a veces se cruzan las citas.",
    },
  ],
  solutions: [
    {
      icon: "globe",
      title: "Presencia profesional online",
      description: "Tu salón con web propia que transmite confianza y profesionalismo.",
      highlight: "+40% clientes nuevos",
    },
    {
      icon: "calendar",
      title: "Reservas simples online",
      description: "Los clientes agendan directo viendo tus horarios disponibles.",
      highlight: "-50% no-shows",
    },
    {
      icon: "image",
      title: "Galería de trabajos",
      description: "Muestra tus mejores cortes, peinados y tratamientos.",
    },
    {
      icon: "bell",
      title: "Recordatorios de cita",
      description: "Notificación automática que reduce cancelaciones de última hora.",
    },
  ],
  transformation: {
    before: {
      metric1: { label: "Clientes por semana", value: "20" },
      metric2: { label: "No-shows", value: "30%" },
      metric3: { label: "Ocupación", value: "60%" },
    },
    after: {
      metric1: { label: "Clientes por semana", value: "28-30", improvement: "+45%" },
      metric2: { label: "No-shows", value: "10%", improvement: "-67%" },
      metric3: { label: "Ocupación", value: "90%", improvement: "+50%" },
    },
    roi: "Recuperas tu inversión en 2 meses",
  },
  pricing: [
    {
      name: "Básico",
      price: "S/1,000",
      description: "Para estilistas independientes",
      features: [
        "Dominio 1 año incluido",
        "Hosting incluido",
        "5 páginas básicas",
        "Lista de servicios",
        "Precios visibles",
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
        "Galería de trabajos",
        "Reservas simples online",
        "Recordatorios WhatsApp",
        "Horarios disponibles",
        "SEO básico",
        "2 meses de soporte",
      ],
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Completo",
      price: "S/1,500",
      description: "Para salones con 2 estilistas",
      features: [
        "Todo lo del plan Estándar",
        "Agenda por estilista",
        "Galería antes/después",
        "Promociones destacadas",
        "Testimonios de clientes",
        "Redes sociales integradas",
        "3 meses de soporte",
      ],
    },
  ],
  maintenanceNote: "Mantenimiento mensual desde S/120/mes incluye hosting, actualizaciones y soporte.",
  checklist: [
    "Diseño elegante y moderno",
    "Lista de servicios y precios",
    "Galería de trabajos",
    "Sistema de reservas simple",
    "Recordatorios automáticos",
    "WhatsApp directo",
    "Horarios visibles",
    "Google Maps integrado",
    "SSL/HTTPS incluido",
    "Capacitación completa",
  ],
  faqs: [
    {
      question: "¿El sistema de reservas es complicado?",
      answer: "No, es muy simple. Los clientes eligen servicio, día y hora disponible, y listo.",
    },
    {
      question: "¿Funciona si trabajo sola?",
      answer: "Sí, está pensado especialmente para estilistas independientes o salones de 1-2 personas.",
    },
    {
      question: "¿Cómo funcionan los recordatorios?",
      answer: "Se envía automáticamente un mensaje de WhatsApp un día antes de la cita.",
    },
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer: "Tu web está lista en 10-12 días hábiles dependiendo del plan elegido.",
    },
    {
      question: "¿Puedo mostrar mis trabajos de Instagram?",
      answer: "Sí, integramos tu feed de Instagram para que los clientes vean tu trabajo reciente.",
    },
  ],
  testimonials: [
    {
      name: "Patricia Villanueva",
      role: "Estilista",
      company: "Studio Patricia",
      content: "Los no-shows bajaron de 30% a menos del 10%. El recordatorio por WhatsApp hace toda la diferencia.",
      rating: 5,
    },
    {
      name: "Rosa Medina",
      role: "Propietaria",
      company: "Belleza Rosa",
      content: "Antes anotaba todo en cuaderno. Ahora tengo mi agenda organizada y los clientes reservan solos.",
      rating: 5,
    },
    {
      name: "Jennifer Castro",
      role: "Estilista",
      company: "Jen Style",
      content: "Me encontraron en Google buscando 'corte de cabello cerca'. Clientes nuevos que no conocía me contactan.",
      rating: 5,
    },
  ],
  gradientColors: "from-rose-600 to-pink-700",
};
