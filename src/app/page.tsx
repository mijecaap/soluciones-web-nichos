import HeroSection from "@/components/HeroSection";
import NicheGrid from "@/components/NicheGrid";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51999999999";

// Función para formatear el número de teléfono para schema.org
const formatPhoneSchema = (num: string) => {
  return `+${num.slice(0, 2)}-${num.slice(2, 5)}-${num.slice(5, 8)}-${num.slice(8)}`;
};

const testimonials = [
  {
    name: "María González",
    role: "Propietaria",
    company: "Clínica Veterinaria Huellitas",
    content:
      "Desde que tenemos la web, las citas se agendan solas. Pasamos de 20 a 35 citas semanales. La mejor inversión que hemos hecho.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Gerente",
    company: "Restaurante El Buen Sabor",
    content:
      "El menú digital y las reservas online transformaron nuestro negocio. Ahora los turistas nos encuentran fácilmente en Google.",
    rating: 5,
  },
  {
    name: "Ana Lucía Pérez",
    role: "Directora",
    company: "Spa Bella Vida",
    content:
      "Los no-shows bajaron de 45% a 12% gracias a los recordatorios automáticos. Mis estilistas están más ocupadas que nunca.",
    rating: 5,
  },
  {
    name: "Lucía Fernández",
    role: "Propietaria",
    company: "Boutique Elegance",
    content:
      "Antes solo vendía por Instagram. Ahora mis clientas ven todo el catálogo organizado y me contactan más seguras.",
    rating: 5,
  },
  {
    name: "José Ramírez",
    role: "Propietario",
    company: "Taxi Seguro 24h",
    content:
      "Antes solo me llamaban conocidos. Ahora recibo llamadas de gente que me encontró buscando taxi en Google.",
    rating: 5,
  },
  {
    name: "Andrea Soto",
    role: "Consultora de Marketing",
    company: "AS Consulting",
    content:
      "Mi sitio web profesional me diferencia de otros consultores. Los clientes ven mis casos de éxito y confían en contratarme.",
    rating: 5,
  },
];

const trustMetrics = [
  {
    label: "Proyectos entregados",
    value: "120+",
    description: "Negocios locales y marcas emergentes.",
  },
  {
    label: "Tiempo promedio",
    value: "15-21 días",
    description: "De la estrategia al lanzamiento.",
  },
  {
    label: "Calificación de clientes",
    value: "4.9/5",
    description: "Basado en reseñas y recomendaciones.",
  },
];

const processSteps = [
  {
    title: "Diagnóstico + Estrategia",
    description:
      "Entendemos tu negocio, tus clientes y la oportunidad digital para definir un plan claro.",
  },
  {
    title: "Diseño + Contenido",
    description:
      "Creamos una experiencia visual con copy persuasivo, enfocada en confianza y conversión.",
  },
  {
    title: "Lanzamiento + Optimización",
    description:
      "Publicamos tu web, medimos resultados y afinamos para que siga creciendo.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection
        title="Páginas Web Profesionales para Todo Tipo de Negocio"
        subtitle="Desde soluciones económicas para emprendedores (S/700) hasta sistemas avanzados para negocios establecidos. Más visibilidad en Google, más clientes, más ingresos."
        ctaText="Ver Soluciones Premium"
        ctaLink="#nichos"
        secondaryCtaText="Ver Económicas (desde S/700)"
        secondaryCtaLink="#economicos"
        eyebrow="Estrategia digital hecha en Perú"
        highlights={[
          "SEO local listo para posicionar",
          "Diseño editorial que vende confianza",
          "Implementación rápida y sin fricción",
        ]}
        metrics={[
          { label: "Entrega promedio", value: "15-21 días" },
          { label: "Ticket de entrada", value: "Desde S/700" },
          { label: "Clientes felices", value: "120+ negocios" },
        ]}
        deliverables={[
          "Arquitectura web lista para campañas",
          "Textos y mensajes por servicio",
          "Panel de reservas o contacto a medida",
        ]}
      />

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Confianza comprobada
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
                Un equipo que combina diseño, estrategia y ejecución rápida
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Trabajamos con negocios locales que quieren verse y vender como
                marcas grandes sin perder su esencia.
              </p>
            </div>
            <div className="grid flex-1 gap-6 md:grid-cols-3">
              {trustMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-slate-900">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Lo Que Está Frenando Tu Crecimiento Digital
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Detectamos los puntos críticos que hacen que un negocio pierda
              clientes semana a semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                ),
                title: "Poca visibilidad",
                description:
                  "Tus clientes potenciales te buscan y terminan eligiendo a la competencia.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                ),
                title: "Canales desordenados",
                description:
                  "Respondes llamadas, WhatsApp e Instagram sin un flujo claro.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Citas perdidas",
                description:
                  "Los no-shows y las reprogramaciones te cuestan ingresos reales.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
                title: "Crecimiento lento",
                description:
                  "Tu negocio puede atender más clientes, pero no llega al público correcto.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Inversión confusa",
                description:
                  "No tienes claridad sobre cuánto invertir ni qué resultados esperar.",
              },
            ].map((problem, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-700 mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-slate-600 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="nichos">
        <NicheGrid />
      </div>

      <BenefitsSection />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Metodología clara
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
                Un proceso pensado para que tu web venda desde el primer día
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Cada etapa está diseñada para acelerar resultados: desde la
                investigación hasta la optimización después del lanzamiento.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-sm text-slate-600">
                Incluye análisis competitivo, propuesta de valor y copy
                orientado a captar reservas y contactos reales.
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="rounded-full border border-slate-200 px-4 py-2">
                  1 ronda de ajustes incluido
                </span>
                <span className="rounded-full border border-slate-200 px-4 py-2">
                  Checklist para tu equipo
                </span>
              </div>
            </div>
            <div className="grid gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                      0{index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <CTASection
        title="¿Listo para Transformar tu Negocio?"
        subtitle="Agenda una consulta gratuita de 30 minutos y descubre cómo podemos ayudarte"
        primaryCta={{ text: "Agendar Consulta Gratis", href: "/contacto" }}
      />

      {/* JSON-LD Schema for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Web Para Tu Negocio",
            url: "https://webparatunegocio.pe",
            logo: "https://webparatunegocio.pe/logo.png",
            description:
              "Desarrollo de páginas web profesionales para negocios locales. Desde soluciones económicas para emprendedores hasta sistemas avanzados para negocios establecidos.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: formatPhoneSchema(whatsappNumber),
              contactType: "sales",
              availableLanguage: ["Spanish"],
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lima",
              addressCountry: "PE",
            },
            sameAs: [
              `https://wa.me/${whatsappNumber}`,
            ],
          }),
        }}
      />

      {/* JSON-LD Schema for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Web Para Tu Negocio",
            image: "https://webparatunegocio.pe/og-image.jpg",
            "@id": "https://webparatunegocio.pe",
            url: "https://webparatunegocio.pe",
            telephone: formatPhoneSchema(whatsappNumber),
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lima",
              addressCountry: "PE",
            },
            priceRange: "S/700 - S/12,000",
          }),
        }}
      />

      {/* JSON-LD Schema for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Desarrollo Web",
            provider: {
              "@type": "Organization",
              name: "Web Para Tu Negocio",
              url: "https://webparatunegocio.pe",
            },
            areaServed: {
              "@type": "Country",
              name: "Perú",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios de Desarrollo Web",
              itemListElement: [
                {
                  "@type": "OfferCatalog",
                  name: "Soluciones Premium",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Clínicas Veterinarias",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 3500,
                        maxPrice: 8000,
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Salones de Belleza",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 3000,
                        maxPrice: 7000,
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Restaurantes",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 4000,
                        maxPrice: 9500,
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Consultorios Odontológicos",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 5000,
                        maxPrice: 12000,
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Agencias de Viajes",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 5500,
                        maxPrice: 12000,
                      },
                    },
                  ],
                },
                {
                  "@type": "OfferCatalog",
                  name: "Soluciones Económicas",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Tiendas de Ropa",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 800,
                        maxPrice: 1200,
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Artesanía",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 900,
                        maxPrice: 1300,
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Servicios de Transporte",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 700,
                        maxPrice: 1000,
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Servicios de Limpieza",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 800,
                        maxPrice: 1200,
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Cafeterías",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 1000,
                        maxPrice: 1500,
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Instructores y Coaches",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 800,
                        maxPrice: 1200,
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Servicios de Reparación",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 700,
                        maxPrice: 1000,
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Productores Agrícolas",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 900,
                        maxPrice: 1300,
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Salones de Belleza Pequeños",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 1000,
                        maxPrice: 1500,
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Páginas Web para Freelancers y Consultores",
                      },
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        priceCurrency: "PEN",
                        minPrice: 800,
                        maxPrice: 1200,
                      },
                    },
                  ],
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
