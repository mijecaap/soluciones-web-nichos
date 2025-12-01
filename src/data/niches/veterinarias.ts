import type { NicheData } from "./types";

export const veterinariasData: NicheData = {
  slug: "veterinarias",
  title: "Clínicas Veterinarias",
  headline: "Clínica Veterinaria Digital: Más Clientes. Menos Llamadas. Más Ingresos.",
  subtitle: "Convierte tu clínica en un negocio digital que atrae 30-40 clientes nuevos cada mes automatizando reservas y mejorando tu visibilidad en Google.",
  metaTitle: "Páginas Web para Clínicas Veterinarias | Sistema de Citas Online",
  metaDescription: "Desarrollamos páginas web profesionales para clínicas veterinarias. Sistema de citas online 24/7, gestión de pacientes y SEO local. Desde S/3,500.",
  category: "premium",
  problems: [
    {
      icon: "phone",
      title: "Teléfono que no para de sonar",
      description: "Pierdes tiempo atendiendo llamadas mientras tus pacientes esperan atención.",
    },
    {
      icon: "search",
      title: "No apareces en Google",
      description: "Los dueños de mascotas buscan veterinarios cerca pero encuentran a tu competencia.",
    },
    {
      icon: "ban",
      title: "40% de No-Shows",
      description: "Las citas canceladas o no asistidas te cuestan tiempo y dinero cada día.",
    },
    {
      icon: "clock",
      title: "Sin citas online 24/7",
      description: "Los clientes no pueden agendar cuando les conviene, pierdes oportunidades de noche.",
    },
  ],
  solutions: [
    {
      icon: "globe",
      title: "Web profesional en Google",
      description: "Aparece en los primeros resultados cuando buscan veterinarios en tu zona.",
      highlight: "+20-30 clientes/mes",
    },
    {
      icon: "calendar",
      title: "Sistema de citas online 24/7",
      description: "Tus clientes agendan cuando quieren, incluso a las 3am, sin llamarte.",
      highlight: "-80% no-shows",
    },
    {
      icon: "chart",
      title: "Gestión inteligente de reservas",
      description: "Calendario visual, recordatorios automáticos y control total de tu agenda.",
      highlight: "+40% ocupación",
    },
    {
      icon: "chat",
      title: "WhatsApp integrado",
      description: "Botón directo a WhatsApp para consultas rápidas y emergencias.",
    },
  ],
  transformation: {
    before: {
      metric1: { label: "Citas por semana", value: "20 citas" },
      metric2: { label: "Tasa de No-Shows", value: "40%" },
      metric3: { label: "Ingresos mensuales", value: "S/4,000" },
    },
    after: {
      metric1: { label: "Citas por semana", value: "35 citas", improvement: "+75%" },
      metric2: { label: "Tasa de No-Shows", value: "8%", improvement: "-80%" },
      metric3: { label: "Ingresos mensuales", value: "S/8,500", improvement: "+112%" },
    },
    roi: "Recuperas tu inversión en 2 meses",
  },
  pricing: [
    {
      name: "Básico",
      price: "S/3,500",
      description: "Ideal para clínicas pequeñas",
      features: [
        "Web de 5 páginas",
        "Diseño responsive",
        "SEO básico local",
        "Formulario de contacto",
        "WhatsApp integrado",
        "Google Maps",
        "Entrega en 15 días",
      ],
    },
    {
      name: "Profesional",
      price: "S/5,000",
      description: "La opción más popular",
      features: [
        "Todo lo del plan Básico",
        "Sistema de citas online",
        "Recordatorios automáticos",
        "Panel de administración",
        "SEO avanzado",
        "Blog integrado",
        "Galería de servicios",
        "Entrega en 20 días",
      ],
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Premium",
      price: "S/8,000",
      description: "Para clínicas en crecimiento",
      features: [
        "Todo lo del plan Profesional",
        "Historial de pacientes",
        "Multi-veterinario",
        "Reportes y estadísticas",
        "Chat en vivo",
        "App móvil PWA",
        "Soporte prioritario",
        "Entrega en 30 días",
      ],
    },
  ],
  maintenanceNote: "Mantenimiento mensual desde S/300/mes incluye hosting, actualizaciones y soporte técnico.",
  checklist: [
    "Diseño profesional y moderno",
    "Optimizado para móviles",
    "Velocidad de carga optimizada",
    "SEO local configurado",
    "SSL/HTTPS incluido",
    "Hosting primer año incluido",
    "Capacitación de uso",
    "Soporte post-lanzamiento",
    "Google Analytics configurado",
    "Integración con redes sociales",
  ],
  faqs: [
    {
      question: "¿Cuánto tiempo toma desarrollar la web?",
      answer: "Dependiendo del plan elegido, entre 15 y 30 días hábiles. Te mantendremos informado en cada paso del proceso.",
    },
    {
      question: "¿El sistema de citas funciona con mi software actual?",
      answer: "Nuestro sistema es independiente pero puede exportar datos. También podemos evaluar integraciones específicas según tu caso.",
    },
    {
      question: "¿Necesito conocimientos técnicos para administrar la web?",
      answer: "No, el panel es muy intuitivo. Además, incluimos capacitación completa y manuales de uso.",
    },
    {
      question: "¿Qué pasa si necesito cambios después del lanzamiento?",
      answer: "Incluimos 30 días de ajustes menores sin costo. Cambios mayores se cotizan según complejidad.",
    },
    {
      question: "¿El precio incluye el dominio y hosting?",
      answer: "El primer año de hosting está incluido. El dominio tiene un costo adicional de aproximadamente S/50-80/año.",
    },
  ],
  testimonials: [
    {
      name: "Dr. Roberto Sánchez",
      role: "Director",
      company: "Veterinaria Pet Happy",
      content: "Pasamos de 20 a 35 citas semanales en solo 2 meses. El sistema de reservas online cambió completamente nuestro negocio.",
      rating: 5,
    },
    {
      name: "María González",
      role: "Propietaria",
      company: "Clínica Huellitas",
      content: "Los no-shows bajaron de 40% a menos del 10%. Los recordatorios automáticos hacen toda la diferencia.",
      rating: 5,
    },
    {
      name: "Dr. Luis Paredes",
      role: "Veterinario",
      company: "VetCare Lima",
      content: "Ahora aparecemos en Google y los clientes nos encuentran fácilmente. La inversión se pagó en 6 semanas.",
      rating: 5,
    },
  ],
  gradientColors: "from-emerald-600 to-teal-700",
};
