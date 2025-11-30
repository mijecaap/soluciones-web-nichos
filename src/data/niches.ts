export interface NicheData {
  slug: string;
  title: string;
  headline: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  problems: {
    icon: string;
    title: string;
    description: string;
  }[];
  solutions: {
    icon: string;
    title: string;
    description: string;
    highlight?: string;
  }[];
  transformation: {
    before: {
      metric1: { label: string; value: string };
      metric2: { label: string; value: string };
      metric3: { label: string; value: string };
    };
    after: {
      metric1: { label: string; value: string; improvement: string };
      metric2: { label: string; value: string; improvement: string };
      metric3: { label: string; value: string; improvement: string };
    };
    roi: string;
  };
  pricing: {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    badge?: string;
  }[];
  maintenanceNote: string;
  checklist: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
  }[];
  gradientColors: string;
}

export const nichesData: Record<string, NicheData> = {
  veterinarias: {
    slug: "veterinarias",
    title: "Clínicas Veterinarias",
    headline: "Clínica Veterinaria Digital: Más Clientes. Menos Llamadas. Más Ingresos.",
    subtitle: "Convierte tu clínica en un negocio digital que atrae 30-40 clientes nuevos cada mes automatizando reservas y mejorando tu visibilidad en Google.",
    metaTitle: "Páginas Web para Clínicas Veterinarias | Sistema de Citas Online",
    metaDescription: "Desarrollamos páginas web profesionales para clínicas veterinarias. Sistema de citas online 24/7, gestión de pacientes y SEO local. Desde S/3,500.",
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
  },
  "salones-belleza": {
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
  },
  restaurantes: {
    slug: "restaurantes",
    title: "Restaurantes y Bares",
    headline: "Restaurante Digital: Más Clientes. Reservas Online. Pedidos Automáticos.",
    subtitle: "Aumenta tus mesas ocupadas, reduce esperas, y llega a clientes nuevos que te buscan en Google.",
    metaTitle: "Páginas Web para Restaurantes | Menú Digital y Reservas Online",
    metaDescription: "Desarrollamos páginas web para restaurantes y bares. Menú digital interactivo, sistema de reservas y pedidos online. Desde S/4,000.",
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
  },
  odontologia: {
    slug: "odontologia",
    title: "Consultorios Odontológicos",
    headline: "Consultorio Digital: Más Pacientes. Citas Confirmadas. Reputación de Confianza.",
    subtitle: "Atrae pacientes nuevos con presencia profesional, automatiza citas y construye credibilidad.",
    metaTitle: "Páginas Web para Dentistas | Sistema de Citas Odontológicas",
    metaDescription: "Desarrollamos páginas web para consultorios odontológicos. Sistema de citas online, blog educativo y presencia profesional. Desde S/5,000.",
    problems: [
      {
        icon: "search",
        title: "Pacientes no te encuentran",
        description: "Buscan dentista en Google y aparece tu competencia, no tú.",
      },
      {
        icon: "document",
        title: "Web poco profesional",
        description: "Tu página actual no transmite la confianza que merece tu consultorio.",
      },
      {
        icon: "calendar",
        title: "Sin citas online",
        description: "Los pacientes deben llamar para agendar, muchos desisten.",
      },
      {
        icon: "phone",
        title: "Teléfono saturado",
        description: "Tu asistente pasa horas atendiendo llamadas de agenda.",
      },
    ],
    solutions: [
      {
        icon: "globe",
        title: "Web profesional y confiable",
        description: "Diseño que transmite profesionalismo y genera confianza desde el primer click.",
        highlight: "+250% pacientes nuevos",
      },
      {
        icon: "calendar",
        title: "Sistema de citas online",
        description: "Pacientes agendan 24/7 eligiendo tratamiento, doctor y horario.",
        highlight: "-85% llamadas",
      },
      {
        icon: "document",
        title: "Formulario de salud digital",
        description: "Historial médico online que el paciente completa antes de su cita.",
      },
      {
        icon: "book",
        title: "Blog educativo",
        description: "Contenido que educa pacientes y mejora tu posicionamiento SEO.",
      },
      {
        icon: "bell",
        title: "Recordatorios automáticos",
        description: "SMS y WhatsApp que reducen no-shows y citas olvidadas.",
      },
    ],
    transformation: {
      before: {
        metric1: { label: "Pacientes nuevos/mes", value: "12-15" },
        metric2: { label: "Ocupación", value: "50%" },
        metric3: { label: "Ingresos mensuales", value: "S/15,000" },
      },
      after: {
        metric1: { label: "Pacientes nuevos/mes", value: "35-45", improvement: "+250%" },
        metric2: { label: "Ocupación", value: "85%", improvement: "+70%" },
        metric3: { label: "Ingresos mensuales", value: "S/28,000", improvement: "+87%" },
      },
      roi: "Recuperas tu inversión en 1.5 meses",
    },
    pricing: [
      {
        name: "Básico",
        price: "S/5,000",
        description: "Para consultorios que inician",
        features: [
          "Web de 6 páginas",
          "Diseño profesional médico",
          "Catálogo de tratamientos",
          "Perfiles de doctores",
          "WhatsApp integrado",
          "SEO básico local",
          "Google Maps",
          "Entrega en 15 días",
        ],
      },
      {
        name: "Profesional",
        price: "S/7,500",
        description: "El más solicitado",
        features: [
          "Todo lo del plan Básico",
          "Sistema de citas online",
          "Recordatorios automáticos",
          "Formulario de salud digital",
          "Blog integrado",
          "SEO avanzado",
          "Antes/después de casos",
          "Panel de administración",
          "Entrega en 25 días",
        ],
        highlighted: true,
        badge: "Recomendado",
      },
      {
        name: "Premium",
        price: "S/12,000",
        description: "Para clínicas odontológicas",
        features: [
          "Todo lo del plan Profesional",
          "Multi-doctor",
          "Historial de pacientes",
          "Portal de pacientes",
          "Pagos en línea",
          "Sistema de seguimiento",
          "App móvil PWA",
          "Soporte prioritario",
          "Entrega en 35 días",
        ],
      },
    ],
    maintenanceNote: "Mantenimiento mensual desde S/500/mes incluye hosting, actualizaciones y soporte técnico.",
    checklist: [
      "Diseño profesional médico",
      "Catálogo de tratamientos",
      "Galería de casos (antes/después)",
      "Perfiles del equipo médico",
      "Sistema de citas online",
      "Blog de salud dental",
      "Testimonios de pacientes",
      "Certificaciones visibles",
      "SEO médico local",
      "HTTPS y seguridad",
    ],
    faqs: [
      {
        question: "¿El sistema cumple con normas de privacidad médica?",
        answer: "Sí, implementamos protocolos de seguridad y protección de datos de pacientes según normativas locales.",
      },
      {
        question: "¿Puedo mostrar casos de antes/después?",
        answer: "Sí, incluimos galería especial para mostrar resultados de tratamientos con consentimiento del paciente.",
      },
      {
        question: "¿El blog mejora mi posicionamiento en Google?",
        answer: "Sí, contenido educativo optimizado para SEO te ayuda a aparecer en búsquedas relacionadas.",
      },
      {
        question: "¿Funciona para clínicas con varios especialistas?",
        answer: "Sí, el plan Premium permite gestionar múltiples doctores con agendas independientes.",
      },
      {
        question: "¿Los pacientes pueden pagar online?",
        answer: "Sí, en el plan Premium integramos pasarela de pago para pagos parciales o totales.",
      },
    ],
    testimonials: [
      {
        name: "Dra. Valeria Mendoza",
        role: "Ortodoncista",
        company: "Dental Smile Center",
        content: "Los pacientes nuevos aumentaron de 15 a 40 por mes. La web profesional genera mucha confianza.",
        rating: 5,
      },
      {
        name: "Dr. Carlos Ruiz",
        role: "Director",
        company: "Clínica Dental Perú",
        content: "El blog de salud dental nos posiciona como expertos. Los pacientes llegan más informados.",
        rating: 5,
      },
      {
        name: "Dra. Patricia Suárez",
        role: "Endodoncista",
        company: "Consultorio Dental PS",
        content: "El sistema de citas redujo las llamadas en un 80%. Mi asistente ahora se enfoca en atención.",
        rating: 5,
      },
    ],
    gradientColors: "from-cyan-600 to-blue-700",
  },
  "agencias-viajes": {
    slug: "agencias-viajes",
    title: "Agencias de Viajes",
    headline: "Agencia de Viajes Digital: Vende Más Tours. Reservas Automáticas. Alcanza el Mundo.",
    subtitle: "Llega a turistas que buscan en línea, automatiza reservas de tours y crea un negocio que vende sin que estés.",
    metaTitle: "Páginas Web para Agencias de Viajes | Sistema de Reservas de Tours",
    metaDescription: "Desarrollamos páginas web para agencias de viajes. Catálogo de tours, reservas online y pagos internacionales. Desde S/5,500.",
    problems: [
      {
        icon: "search",
        title: "Turistas no te encuentran",
        description: "Buscan tours en Google pero encuentran a otras agencias, no a ti.",
      },
      {
        icon: "clock",
        title: "No vendes sin estar presente",
        description: "Pierdes ventas de turistas en otras zonas horarias mientras duermes.",
      },
      {
        icon: "document",
        title: "Catálogo confuso",
        description: "Tu oferta de tours no es clara y los clientes se confunden.",
      },
      {
        icon: "creditCard",
        title: "Sin pagos internacionales",
        description: "Turistas extranjeros no pueden pagarte con sus tarjetas.",
      },
    ],
    solutions: [
      {
        icon: "translate",
        title: "Web multiidioma en Google",
        description: "Aparece en búsquedas de turistas en su propio idioma.",
        highlight: "+50% turistas",
      },
      {
        icon: "image",
        title: "Catálogo de tours interactivo",
        description: "Fotos, videos, itinerarios claros y precios transparentes.",
      },
      {
        icon: "calendar",
        title: "Sistema de reservas online",
        description: "Turistas reservan y pagan 24/7 desde cualquier país.",
        highlight: "+250% reservas",
      },
      {
        icon: "creditCard",
        title: "Pagos internacionales",
        description: "Acepta tarjetas de todo el mundo con conversión automática.",
      },
      {
        icon: "cog",
        title: "Panel administrativo",
        description: "Gestiona disponibilidad, reservas y pagos en tiempo real.",
      },
      {
        icon: "star",
        title: "Sistema de reseñas",
        description: "Reseñas verificadas de clientes que generan confianza.",
      },
    ],
    transformation: {
      before: {
        metric1: { label: "Tours vendidos/mes", value: "15-20" },
        metric2: { label: "Ocupación", value: "40%" },
        metric3: { label: "Ingresos mensuales", value: "S/18,000" },
      },
      after: {
        metric1: { label: "Tours vendidos/mes", value: "50-60", improvement: "+250%" },
        metric2: { label: "Ocupación", value: "85%", improvement: "+112%" },
        metric3: { label: "Ingresos mensuales", value: "S/55,000", improvement: "+205%" },
      },
      roi: "Recuperas tu inversión en 1 mes",
    },
    pricing: [
      {
        name: "Básico",
        price: "S/5,500",
        description: "Para agencias que inician",
        features: [
          "Web de 8 páginas",
          "Catálogo de hasta 10 tours",
          "Galería de destinos",
          "Formulario de consultas",
          "WhatsApp integrado",
          "SEO básico",
          "Google Maps rutas",
          "Entrega en 20 días",
        ],
      },
      {
        name: "Profesional",
        price: "S/8,000",
        description: "Para agencias en crecimiento",
        features: [
          "Todo lo del plan Básico",
          "Catálogo ilimitado de tours",
          "Sistema de reservas online",
          "Calendario de disponibilidad",
          "Multi-idioma (3 idiomas)",
          "Panel de administración",
          "SEO avanzado internacional",
          "Entrega en 30 días",
        ],
        highlighted: true,
        badge: "Más Popular",
      },
      {
        name: "Completo",
        price: "S/12,000",
        description: "Para agencias establecidas",
        features: [
          "Todo lo del plan Profesional",
          "Pasarela de pago internacional",
          "Sistema de reseñas verificadas",
          "Multi-moneda",
          "Multi-idioma (5 idiomas)",
          "Reportes y analytics",
          "App móvil PWA",
          "Soporte prioritario",
          "Entrega en 40 días",
        ],
        badge: "Recomendado",
      },
    ],
    maintenanceNote: "Mantenimiento mensual desde S/600/mes incluye hosting, actualizaciones y soporte técnico.",
    checklist: [
      "Catálogo de tours con itinerarios",
      "Galería de fotos por destino",
      "Sistema de reservas online",
      "Calendario de disponibilidad",
      "Integración con pasarelas de pago",
      "Soporte multi-idioma",
      "SEO internacional",
      "Sistema de reseñas",
      "Blog de viajes",
      "Integración con redes sociales",
    ],
    faqs: [
      {
        question: "¿Puedo gestionar disponibilidad por fecha?",
        answer: "Sí, el sistema permite configurar cupos, fechas bloqueadas y precios por temporada.",
      },
      {
        question: "¿Qué pasarelas de pago internacionales incluyen?",
        answer: "Integramos Stripe, PayPal, Mercado Pago y otras opciones según tu mercado objetivo.",
      },
      {
        question: "¿El sistema soporta múltiples monedas?",
        answer: "Sí, en el plan Completo los turistas ven precios en su moneda local con conversión automática.",
      },
      {
        question: "¿Puedo agregar tours nuevos yo mismo?",
        answer: "Sí, el panel de administración es intuitivo y te permite gestionar todo tu catálogo.",
      },
      {
        question: "¿Las reseñas son verificadas?",
        answer: "Sí, solo pueden dejar reseñas clientes que efectivamente realizaron el tour.",
      },
    ],
    testimonials: [
      {
        name: "Juan Carlos Quispe",
        role: "Director",
        company: "Peru Adventure Tours",
        content: "Pasamos de 20 a 55 tours mensuales. La web en inglés y español nos abrió al mercado internacional.",
        rating: 5,
      },
      {
        name: "Sandra Delgado",
        role: "Gerente",
        company: "Cusco Magic Travel",
        content: "Las reservas automáticas nos permiten vender mientras dormimos. Turistas de Europa reservan de madrugada.",
        rating: 5,
      },
      {
        name: "Miguel Torres",
        role: "Propietario",
        company: "Amazonia Tours",
        content: "El sistema de pagos internacionales fue clave. Ahora aceptamos tarjetas de cualquier país sin problema.",
        rating: 5,
      },
    ],
    gradientColors: "from-violet-600 to-purple-700",
  },
};

export function getNicheData(slug: string): NicheData | undefined {
  return nichesData[slug];
}

export function getAllNicheSlugs(): string[] {
  return Object.keys(nichesData);
}
