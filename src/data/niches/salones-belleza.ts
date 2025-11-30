import type { NicheData } from "./types";

export const salonesBellezaData: NicheData = {
  slug: "salones-belleza",
  title: "Salones de Belleza y Spa",
  headline: "Salón de Belleza Digital: Reservas Online, Clientes Felices, Ingresos Crecientes",
  subtitle: "Reduce el caos de teléfono, aumenta la ocupación de tus estilistas y convierte tus clientes en promotores del salón.",
  metaTitle: "Páginas Web para Salones de Belleza | Sistema de Reservas Online",
  metaDescription: "Desarrollamos páginas web para salones de belleza y spa. Reservas online 24/7, galería de trabajos y programa de fidelización. Desde S/3,000.",
  problems: [
    {
      icon: "phone",
      title: "Teléfono saturado",
      description: "Tu recepcionista pasa el día contestando llamadas en lugar de atender clientes.",
    },
    {
      icon: "users",
      title: "Clientes que no vuelven",
      description: "Sin seguimiento ni programa de fidelización, pierdes clientes frecuentes.",
    },
    {
      icon: "calendar",
      title: "Caos de agenda",
      description: "Citas sobrepuestas, espacios vacíos y estilistas peleando por turnos.",
    },
    {
      icon: "ban",
      title: "45% de No-Shows",
      description: "Casi la mitad de las citas no se presentan y pierdes dinero cada día.",
    },
  ],
  solutions: [
    {
      icon: "calendar",
      title: "Reservas online 24/7",
      description: "Tus clientes eligen servicio, estilista y hora desde su celular.",
      highlight: "+60% clientes",
    },
    {
      icon: "bell",
      title: "Recordatorios automáticos",
      description: "SMS y WhatsApp recordando la cita. Reducción drástica de no-shows.",
      highlight: "-73% no-shows",
    },
    {
      icon: "chart",
      title: "Gestión de equipo",
      description: "Cada estilista ve su agenda, horarios y comisiones en tiempo real.",
    },
    {
      icon: "image",
      title: "Galería de trabajos",
      description: "Muestra tu portafolio de antes/después y atrae más clientes.",
    },
    {
      icon: "gift",
      title: "Programa de puntos",
      description: "Fideliza clientes con puntos canjeables por servicios gratis.",
    },
  ],
  transformation: {
    before: {
      metric1: { label: "Citas por semana", value: "25 citas" },
      metric2: { label: "Tasa de No-Shows", value: "45%" },
      metric3: { label: "Ingresos mensuales", value: "S/5,000" },
    },
    after: {
      metric1: { label: "Citas por semana", value: "40 citas", improvement: "+60%" },
      metric2: { label: "Tasa de No-Shows", value: "12%", improvement: "-73%" },
      metric3: { label: "Ingresos mensuales", value: "S/9,000", improvement: "+80%" },
    },
    roi: "Recuperas tu inversión en 1.5 meses",
  },
  pricing: [
    {
      name: "Básico",
      price: "S/3,000",
      description: "Para salones que inician",
      features: [
        "Web de 5 páginas",
        "Diseño moderno y elegante",
        "Galería de servicios",
        "WhatsApp integrado",
        "SEO básico local",
        "Google Maps",
        "Entrega en 15 días",
      ],
    },
    {
      name: "Profesional",
      price: "S/4,500",
      description: "El más vendido",
      features: [
        "Todo lo del plan Básico",
        "Sistema de reservas online",
        "Agenda por estilista",
        "Recordatorios automáticos",
        "Galería antes/después",
        "Panel de administración",
        "SEO avanzado",
        "Entrega en 20 días",
      ],
      highlighted: true,
      badge: "Más Vendido",
    },
    {
      name: "Premium",
      price: "S/7,000",
      description: "Para salones premium",
      features: [
        "Todo lo del plan Profesional",
        "Programa de puntos/fidelización",
        "Venta de productos online",
        "Multi-sucursal",
        "Reportes de ventas",
        "App móvil PWA",
        "Chat en vivo",
        "Entrega en 30 días",
      ],
    },
  ],
  maintenanceNote: "Mantenimiento mensual desde S/350/mes incluye hosting, actualizaciones y soporte técnico.",
  checklist: [
    "Diseño elegante y moderno",
    "Catálogo de servicios con precios",
    "Galería de trabajos realizados",
    "Perfiles de estilistas",
    "Integración con Instagram",
    "Formulario de contacto",
    "Optimización móvil",
    "Velocidad optimizada",
    "SSL/HTTPS incluido",
    "Capacitación completa",
  ],
  faqs: [
    {
      question: "¿Puedo mostrar los precios de mis servicios?",
      answer: "Sí, puedes mostrar o ocultar precios según tu estrategia. Muchos salones muestran rangos de precio.",
    },
    {
      question: "¿El cliente puede elegir a su estilista favorito?",
      answer: "Sí, el sistema permite seleccionar estilista específico o el primero disponible.",
    },
    {
      question: "¿Funciona para spas con varios servicios simultáneos?",
      answer: "Sí, el sistema maneja múltiples servicios, cabinas y terapeutas sin problema.",
    },
    {
      question: "¿Puedo vender productos de belleza en la web?",
      answer: "Sí, el plan Premium incluye tienda online integrada con pasarela de pago.",
    },
    {
      question: "¿Los clientes reciben confirmación de su cita?",
      answer: "Sí, reciben confirmación inmediata por email y recordatorios por WhatsApp/SMS.",
    },
  ],
  testimonials: [
    {
      name: "Ana Lucía Pérez",
      role: "Propietaria",
      company: "Spa Bella Vida",
      content: "Los no-shows bajaron de 45% a 12%. Mis estilistas ahora trabajan con agenda llena y ordenada.",
      rating: 5,
    },
    {
      name: "Carmen Silva",
      role: "Directora",
      company: "Salón Style Studio",
      content: "La galería de trabajos en la web nos trajo muchos clientes nuevos. Ven nuestro trabajo y confían.",
      rating: 5,
    },
    {
      name: "Patricia Romero",
      role: "Gerente",
      company: "Beauty Center Lima",
      content: "El programa de puntos aumentó las visitas recurrentes en un 40%. Nuestras clientas aman acumular puntos.",
      rating: 5,
    },
  ],
  gradientColors: "from-pink-600 to-rose-700",
};
