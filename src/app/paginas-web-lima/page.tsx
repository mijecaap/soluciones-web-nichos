import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Rocket, Smartphone, Palette, MessageCircle, BarChart3 } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQAccordion, { FAQSchema } from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Diseño de Páginas Web en Lima | Desarrollo Web Profesional",
  description:
    "Diseño y desarrollo de páginas web profesionales en Lima, Perú. Especializados en negocios locales: veterinarias, restaurantes, salones de belleza y más. Optimización SEO y Core Web Vitals. Desde S/700.",
  keywords: [
    "paginas web lima",
    "pagina web lima",
    "diseño de paginas web en lima",
    "diseño web lima",
    "diseño web en lima",
    "paginas web lima peru",
    "diseño de pagina web lima",
    "diseño de paginas web lima",
    "diseño paginas web lima",
    "agencia de diseño web en lima",
    "empresa de diseño web en lima",
  ],
  alternates: {
    canonical: "https://webparatunegocio.pe/paginas-web-lima",
  },
  openGraph: {
    title: "Diseño de Páginas Web en Lima | Desde S/700",
    description:
      "Desarrollo de páginas web profesionales en Lima. 17+ industrias especializadas. SEO optimizado. Cotización gratis.",
    url: "https://webparatunegocio.pe/paginas-web-lima",
    type: "website",
  },
};

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51999999999";

const formatPhoneSchema = (num: string) => {
  return `+${num.slice(0, 2)}-${num.slice(2, 5)}-${num.slice(5, 8)}-${num.slice(8)}`;
};

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Gerente",
    company: "Restaurante El Buen Sabor - Miraflores",
    content:
      "El equipo de Web Para Tu Negocio entendió perfectamente lo que necesitábamos. Nuestra página web en Lima nos trae nuevos clientes cada semana.",
    rating: 5,
  },
  {
    name: "Ana Lucía Pérez",
    role: "Directora",
    company: "Spa Bella Vida - San Isidro",
    content:
      "Desde que tenemos nuestra página web, los no-shows bajaron un 70%. Los clientes reservan online y llegan puntuales.",
    rating: 5,
  },
  {
    name: "José Ramírez",
    role: "Propietario",
    company: "Clínica Dental Sonrisas - Surco",
    content:
      "Invertimos en una página web profesional y en 3 meses recuperamos la inversión con nuevos pacientes que nos encontraron en Google.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "¿Cuánto cuesta diseñar una página web en Lima?",
    answer:
      "El costo de diseño web en Lima varía según las necesidades: páginas económicas desde S/700, páginas profesionales desde S/3,000 y sistemas avanzados desde S/5,000. Incluimos diseño responsivo, SEO básico y hosting.",
  },
  {
    question: "¿Cuánto tiempo tarda el diseño de una página web en Lima?",
    answer:
      "El tiempo de desarrollo depende del tipo de proyecto. Páginas web económicas: 1-2 semanas. Proyectos premium: 3-4 semanas. Todos los proyectos incluyen revisiones y ajustes hasta que estés satisfecho.",
  },
  {
    question: "¿Ofrecen diseño web para todos los distritos de Lima?",
    answer:
      "Sí, atendemos negocios en todos los distritos de Lima: Miraflores, San Isidro, Surco, San Borja, La Molina, Jesús María, Lince, Pueblo Libre, Magdalena, Barranco y más. Trabajamos presencial y remotamente.",
  },
  {
    question: "¿Qué incluye el diseño de una página web?",
    answer:
      "Nuestro servicio incluye: diseño personalizado responsivo, optimización SEO, certificado SSL, hosting de alta velocidad, formulario de contacto, integración con WhatsApp, Google Analytics y capacitación para que puedas gestionar tu contenido.",
  },
  {
    question: "¿Por qué elegirlos en vez de una agencia de diseño web tradicional en Lima?",
    answer:
      "Nos diferenciamos por: 1) Especialización en nichos específicos (veterinarias, restaurantes, etc.), 2) Tecnología moderna (Next.js vs WordPress), 3) Velocidad de carga superior (Core Web Vitals perfectos), 4) Precios transparentes sin costos ocultos.",
  },
  {
    question: "¿La página web se verá bien en celulares?",
    answer:
      "Absolutamente. Todas nuestras páginas son 100% responsivas y están optimizadas para dispositivos móviles. Más del 75% del tráfico web en Perú viene de celulares, por lo que es nuestra prioridad.",
  },
];

const districts = [
  "Miraflores", "San Isidro", "Surco", "San Borja", "La Molina",
  "Jesús María", "Magdalena", "Pueblo Libre", "Lince", "Barranco",
  "San Miguel", "Chorrillos", "Los Olivos", "San Martín de Porres",
  "Ate", "Santa Anita", "Surquillo", "Breña", "Lima Cercado",
];

export default function PaginasWebLimaPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "Páginas Web en Perú", href: "/paginas-web-peru" },
          { name: "Páginas Web en Lima", href: "/paginas-web-lima" },
        ]}
      />

      <HeroSection
        title="Diseño de Páginas Web en Lima"
        subtitle="Somos tu aliado en diseño y desarrollo web en Lima. Creamos páginas web profesionales para negocios locales con tecnología de punta, optimización para Google y diseño que convierte visitantes en clientes."
        ctaText="Cotización Gratis"
        ctaLink="/contacto"
        secondaryCtaText="Ver Nuestros Servicios"
        secondaryCtaLink="#servicios-lima"
      />

      {/* Ventajas de tener una web en Lima */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
              Diseño Web Profesional para Negocios en Lima
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Lima concentra más del 30% de las búsquedas de negocios locales en Google Perú.
              Con una página web optimizada, tu negocio puede captar a estos clientes potenciales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-indigo-400" />,
                title: "SEO Local Lima",
                description:
                  "Optimización específica para que tu negocio aparezca cuando busquen tus servicios en Lima: Google Maps, fichas de negocio y búsquedas locales.",
              },
              {
                icon: <Rocket className="w-8 h-8 text-indigo-400" />,
                title: "Velocidad Superior",
                description:
                  "Páginas que cargan en menos de 2 segundos. Usamos Next.js y React — tecnología más avanzada que WordPress que te da ventaja en Google.",
              },
              {
                icon: <Smartphone className="w-8 h-8 text-indigo-400" />,
                title: "Mobile-First",
                description:
                  "Diseño optimizado primero para celulares, donde el 78% de los limeños buscan negocios. Experiencia perfecta en cualquier dispositivo.",
              },
              {
                icon: <Palette className="w-8 h-8 text-indigo-400" />,
                title: "Diseño a Medida",
                description:
                  "No usamos plantillas genéricas. Cada diseño se adapta a tu marca, tu industria y las necesidades específicas de tus clientes en Lima.",
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-indigo-400" />,
                title: "WhatsApp Integrado",
                description:
                  "Botón de WhatsApp flotante para que tus clientes te contacten al instante. Formularios de contacto inteligentes que te notifican al momento.",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
                title: "Métricas y Analytics",
                description:
                  "Google Analytics incluido para que veas cuántas personas visitan tu web, de dónde vienen y qué servicios les interesan más.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios en Lima */}
      <section id="servicios-lima" className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
              Servicios de Diseño Web para Negocios en Lima
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Especializados en crear páginas web para diferentes tipos de negocios limeños
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Veterinarias en Lima", href: "/veterinarias" },
              { name: "Restaurantes en Lima", href: "/restaurantes" },
              { name: "Salones de Belleza en Lima", href: "/salones-belleza" },
              { name: "Consultorios Dentales en Lima", href: "/odontologia" },
              { name: "Agencias de Viajes en Lima", href: "/agencias-viajes" },
              { name: "Cafeterías en Lima", href: "/cafeterias" },
              { name: "Tiendas de Ropa en Lima", href: "/tiendas-ropa" },
              { name: "Servicios de Transporte en Lima", href: "/transporte" },
              { name: "Freelancers en Lima", href: "/freelancers" },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="flex items-center p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <span className="text-slate-300 group-hover:text-white transition-colors">
                  Páginas Web para {service.name}
                </span>
                <svg
                  className="w-5 h-5 text-indigo-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura en Lima */}
      <section className="py-16 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white mb-6 text-center">
            Atendemos Todos los Distritos de Lima
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {districts.map((district, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-full text-sm text-slate-400"
              >
                {district}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <TestimonialCarousel testimonials={testimonials} />

      <FAQAccordion
        title="Preguntas Frecuentes sobre Diseño Web en Lima"
        subtitle="Todo lo que necesitas saber sobre nuestros servicios en Lima"
        items={faqs}
      />

      <CTASection
        title="¿Necesitas una Página Web en Lima?"
        subtitle="Agenda tu consulta gratuita y recibe una propuesta personalizada para tu negocio"
        primaryCta={{ text: "Cotización Gratis", href: "/contacto" }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Web Para Tu Negocio - Diseño Web Lima",
            description: "Diseño y desarrollo de páginas web profesionales en Lima, Perú. Especializados en negocios locales.",
            url: "https://webparatunegocio.pe/paginas-web-lima",
            telephone: formatPhoneSchema(whatsappNumber),
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lima",
              addressRegion: "Lima",
              addressCountry: "PE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -12.0464,
              longitude: -77.0428,
            },
            areaServed: {
              "@type": "City",
              name: "Lima",
              containedInPlace: {
                "@type": "Country",
                name: "Perú",
              },
            },
            priceRange: "S/700 - S/12,000",
            serviceType: "Diseño y Desarrollo de Páginas Web",
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://webparatunegocio.pe" },
              { "@type": "ListItem", position: 2, name: "Páginas Web en Perú", item: "https://webparatunegocio.pe/paginas-web-peru" },
              { "@type": "ListItem", position: 3, name: "Páginas Web en Lima", item: "https://webparatunegocio.pe/paginas-web-lima" },
            ],
          }),
        }}
      />

      <FAQSchema items={faqs} />
    </>
  );
}
