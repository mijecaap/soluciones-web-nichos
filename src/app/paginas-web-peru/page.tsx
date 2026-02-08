import { Metadata } from "next";
import Link from "next/link";
import { Search, Smartphone, TrendingUp, Zap, Target, ShieldCheck } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQAccordion, { FAQSchema } from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";
import NicheGrid from "@/components/NicheGrid";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Páginas Web en Perú | Diseño Web Profesional desde S/700",
  description:
    "Creamos páginas web profesionales en Perú para todo tipo de negocios. Diseño moderno, optimizado para Google y móviles. 17+ industrias especializadas. Desde S/700. Cotización gratis en 24h.",
  keywords: [
    "paginas web peru",
    "paginas web en peru",
    "pagina web peru",
    "pagina web en peru",
    "creacion de pagina web peru",
    "crear pagina web peru",
    "páginas web profesionales peru",
    "diseño web peru",
    "desarrollo web peru",
    "agencia digital",
    "agencia digital peru",
  ],
  alternates: {
    canonical: "https://webparatunegocio.pe/paginas-web-peru",
  },
  openGraph: {
    title: "Páginas Web en Perú | Diseño Profesional desde S/700",
    description:
      "Diseño y desarrollo de páginas web profesionales en Perú. Especializados en 17+ industrias. Optimización SEO incluida. Cotización gratis.",
    url: "https://webparatunegocio.pe/paginas-web-peru",
    type: "website",
  },
};

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51999999999";

const formatPhoneSchema = (num: string) => {
  return `+${num.slice(0, 2)}-${num.slice(2, 5)}-${num.slice(5, 8)}-${num.slice(8)}`;
};

const testimonials = [
  {
    name: "María González",
    role: "Propietaria",
    company: "Clínica Veterinaria Huellitas",
    content:
      "Desde que tenemos nuestra página web, las citas se agendan solas. La mejor inversión que hemos hecho para nuestro negocio en Lima.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Gerente",
    company: "Restaurante El Buen Sabor",
    content:
      "El menú digital y las reservas online transformaron nuestro restaurante. Los turistas nos encuentran fácilmente en Google.",
    rating: 5,
  },
  {
    name: "Ana Lucía Pérez",
    role: "Directora",
    company: "Spa & Salón Bella Vida",
    content:
      "Nuestra página web profesional nos posicionó en Google. Ahora recibimos el doble de consultas que antes.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "¿Cuánto cuesta una página web en Perú?",
    answer:
      "Nuestras páginas web en Perú van desde S/700 para soluciones económicas hasta S/12,000 para sistemas avanzados con funcionalidades premium. El precio depende de las características que necesite tu negocio. Ofrecemos cotización gratuita y personalizada.",
  },
  {
    question: "¿Cuánto tiempo toma crear una página web profesional?",
    answer:
      "Una página web económica se entrega en 1-2 semanas. Los proyectos premium toman entre 3-4 semanas dependiendo de la complejidad. Trabajamos con plazos claros y comunicación constante.",
  },
  {
    question: "¿La página web aparecerá en Google?",
    answer:
      "Sí. Todas nuestras páginas web incluyen optimización SEO básica: meta tags, sitemap, Schema markup, velocidad optimizada y estructura amigable para Google. También ofrecemos servicios de SEO avanzado para posicionar tu negocio en las primeras páginas.",
  },
  {
    question: "¿Incluyen hosting y dominio?",
    answer:
      "Sí, todos nuestros planes incluyen hosting de alta velocidad y certificado SSL. El dominio .pe o .com se adquiere por separado (desde S/40/año) o podemos gestionarlo por ti.",
  },
  {
    question: "¿Puedo ver ejemplos de páginas web que han creado?",
    answer:
      "Tenemos más de 17 especializaciones diferentes. Puedes ver las soluciones específicas para veterinarias, restaurantes, salones de belleza, consultorios dentales, agencias de viajes y muchos más nichos en nuestra sección de servicios.",
  },
  {
    question: "¿Atienden a negocios fuera de Lima?",
    answer:
      "Sí, atendemos a negocios en todo el Perú. Trabajamos de forma remota con clientes en Arequipa, Trujillo, Cusco, Piura y todas las regiones. La comunicación es por WhatsApp, email y videollamadas.",
  },
  {
    question: "¿Qué tecnologías utilizan para crear las páginas web?",
    answer:
      "Utilizamos tecnologías modernas como Next.js, React y Tailwind CSS. Esto nos permite crear páginas web ultra rápidas que obtienen las mejores puntuaciones en Core Web Vitals de Google, superando a sitios hechos con WordPress u otras plataformas antiguas.",
  },
  {
    question: "¿Ofrecen mantenimiento después de la entrega?",
    answer:
      "Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de contenido, monitoreo de seguridad, backups y soporte técnico. Los planes van desde S/100/mes.",
  },
];

const serviceCategories = [
  {
    title: "Servicios Premium",
    description: "Soluciones completas para negocios establecidos",
    services: [
      { name: "Páginas Web para Veterinarias", href: "/veterinarias", price: "Desde S/3,500" },
      { name: "Páginas Web para Salones de Belleza", href: "/salones-belleza", price: "Desde S/3,000" },
      { name: "Páginas Web para Restaurantes", href: "/restaurantes", price: "Desde S/4,000" },
      { name: "Páginas Web para Odontología", href: "/odontologia", price: "Desde S/5,000" },
      { name: "Páginas Web para Agencias de Viajes", href: "/agencias-viajes", price: "Desde S/5,500" },
    ],
  },
  {
    title: "Servicios Económicos",
    description: "Soluciones accesibles para emprendedores",
    services: [
      { name: "Páginas Web para Tiendas de Ropa", href: "/tiendas-ropa", price: "Desde S/800" },
      { name: "Páginas Web para Cafeterías", href: "/cafeterias", price: "Desde S/1,000" },
      { name: "Páginas Web para Freelancers", href: "/freelancers", price: "Desde S/800" },
      { name: "Páginas Web para Transporte", href: "/transporte", price: "Desde S/700" },
      { name: "Páginas Web para Limpieza", href: "/limpieza", price: "Desde S/800" },
      { name: "Páginas Web para Artesanía", href: "/artesania", price: "Desde S/900" },
      { name: "Páginas Web para Instructores", href: "/instructores", price: "Desde S/800" },
      { name: "Páginas Web para Reparaciones", href: "/reparaciones", price: "Desde S/700" },
      { name: "Páginas Web para Agrícola", href: "/agricola", price: "Desde S/900" },
      { name: "Páginas Web para Belleza Económico", href: "/belleza-economico", price: "Desde S/1,000" },
    ],
  },
];

export default function PaginasWebPeruPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "Páginas Web en Perú", href: "/paginas-web-peru" },
        ]}
      />

      <HeroSection
        title="Páginas Web Profesionales en Perú"
        subtitle="Somos especialistas en diseño y desarrollo de páginas web para negocios peruanos. Más de 17 industrias especializadas, tecnología moderna y optimización para Google incluida. Tu negocio merece una presencia digital profesional."
        ctaText="Solicitar Cotización Gratis"
        ctaLink="/contacto"
        secondaryCtaText="Ver Nuestros Servicios"
        secondaryCtaLink="#servicios"
      />

      {/* Por qué tu negocio necesita una página web */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Por Qué Tu Negocio en Perú Necesita una Página Web?
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              El 87% de los consumidores peruanos busca negocios en Google antes de visitarlos.
              Sin una página web profesional, estás perdiendo clientes todos los días.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-indigo-400" />,
                title: "Visibilidad en Google",
                description:
                  "Aparece en las búsquedas de Google cuando los clientes buscan tus servicios en Perú. Nuestras páginas están optimizadas para SEO local.",
              },
              {
                icon: <Smartphone className="w-8 h-8 text-indigo-400" />,
                title: "Accesible 24/7",
                description:
                  "Tu negocio disponible las 24 horas, los 7 días de la semana. Los clientes pueden ver tus servicios, precios y contactarte en cualquier momento.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-indigo-400" />,
                title: "Mayor Retorno de Inversión",
                description:
                  "Una página web profesional se paga sola. Nuestros clientes reportan un aumento promedio del 40% en consultas y ventas en los primeros 3 meses.",
              },
              {
                icon: <Zap className="w-8 h-8 text-indigo-400" />,
                title: "Tecnología Ultra Rápida",
                description:
                  "Usamos Next.js y React — la misma tecnología de Netflix y Uber. Tu página carga en menos de 2 segundos, algo que Google premia con mejor posicionamiento.",
              },
              {
                icon: <Target className="w-8 h-8 text-indigo-400" />,
                title: "Especialización por Industria",
                description:
                  "No hacemos páginas genéricas. Cada solución está diseñada específicamente para tu tipo de negocio con las funcionalidades que realmente necesitas.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
                title: "Seguridad y Confianza",
                description:
                  "Certificado SSL incluido, hosting seguro y diseño profesional que genera confianza en tus clientes potenciales.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios por categoría */}
      <section id="servicios" className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
              Páginas Web para Cada Tipo de Negocio en Perú
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Ofrecemos soluciones especializadas para más de 17 industrias diferentes.
              Cada página web está diseñada con las funcionalidades específicas que tu negocio necesita.
            </p>
          </div>

          {serviceCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-12">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-slate-400 mb-6">{category.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.services.map((service, i) => (
                  <Link
                    key={i}
                    href={service.href}
                    className="flex items-center justify-between p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
                  >
                    <span className="text-slate-300 group-hover:text-white transition-colors">
                      {service.name}
                    </span>
                    <span className="text-indigo-400 text-sm font-medium whitespace-nowrap ml-2">
                      {service.price}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <BenefitsSection />

      <TestimonialCarousel testimonials={testimonials} />

      <FAQAccordion
        title="Preguntas Frecuentes sobre Páginas Web en Perú"
        subtitle="Todo lo que necesitas saber antes de crear tu página web"
        items={faqs}
      />

      <CTASection
        title="¿Listo para Tener tu Página Web en Perú?"
        subtitle="Agenda una consulta gratuita y recibe una cotización personalizada en menos de 24 horas"
        primaryCta={{ text: "Cotización Gratis", href: "/contacto" }}
      />

      {/* JSON-LD Schema - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Diseño y Desarrollo de Páginas Web en Perú",
            description:
              "Creamos páginas web profesionales para negocios en Perú. Especializados en 17+ industrias con optimización SEO incluida. Desde S/700.",
            provider: {
              "@type": "LocalBusiness",
              name: "Web Para Tu Negocio",
              url: "https://webparatunegocio.pe",
              telephone: formatPhoneSchema(whatsappNumber),
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lima",
                addressRegion: "Lima",
                addressCountry: "PE",
              },
              priceRange: "S/700 - S/12,000",
            },
            serviceType: "Diseño y Desarrollo Web",
            areaServed: {
              "@type": "Country",
              name: "Perú",
            },
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "700",
              highPrice: "12000",
              priceCurrency: "PEN",
              offerCount: "17",
            },
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
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://webparatunegocio.pe",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Páginas Web en Perú",
                item: "https://webparatunegocio.pe/paginas-web-peru",
              },
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
      <FAQSchema items={faqs} />
    </>
  );
}
