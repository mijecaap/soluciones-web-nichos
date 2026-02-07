import HeroSection from "@/components/HeroSection";
import NicheGrid from "@/components/NicheGrid";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";
import HomeProblemSection from "@/components/HomeProblemSection";

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

const socialProofItems = [
  "Next.js 16",
  "React 19",
  "Tailwind CSS",
  "SEO Optimizado",
  "Core Web Vitals",
  "Responsive Design",
  "Google Analytics",
  "WhatsApp Integration",
  "Reservas Online",
  "SSL Incluido",
  "Hosting Incluido",
  "Soporte 24/7",
];

export default function Home() {
  return (
    <>
      <HeroSection
        title="Páginas Web Profesionales para Negocios en Perú"
        subtitle="Desde soluciones económicas para emprendedores (S/700) hasta sistemas avanzados para negocios establecidos en Lima y todo el Perú. Más visibilidad en Google, más clientes, más ingresos."
        ctaText="Ver Soluciones Premium"
        ctaLink="#nichos"
        secondaryCtaText="Ver Económicas (desde S/700)"
        secondaryCtaLink="#economicos"
      />

      {/* Social Proof Marquee */}
      <section className="py-6 bg-[#09090B] border-y border-white/[0.04] overflow-hidden">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#09090B] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#09090B] to-transparent z-10" />
          <div className="flex gap-8 animate-[marquee_30s_linear_infinite]">
            {[...socialProofItems, ...socialProofItems].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 whitespace-nowrap px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-full"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" aria-hidden="true" />
                <span className="text-sm text-slate-400 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeProblemSection />

      <div id="nichos">
        <NicheGrid />
      </div>

      <BenefitsSection />

      <TestimonialCarousel testimonials={testimonials} />

      <CTASection
        title="¿Listo para Transformar tu Negocio?"
        subtitle="Agenda una consulta gratuita de 30 minutos y descubre cómo podemos ayudarte"
        primaryCta={{ text: "Agendar Consulta Gratis", href: "/contacto" }}
      />

      {/* JSON-LD Schema for LocalBusiness (includes Organization properties) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://webparatunegocio.pe",
            name: "Web Para Tu Negocio",
            image: "https://webparatunegocio.pe/og-image.jpg",
            logo: "https://webparatunegocio.pe/logo.png",
            url: "https://webparatunegocio.pe",
            telephone: formatPhoneSchema(whatsappNumber),
            email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@webparatunegocio.pe",
            description:
              "Desarrollo de páginas web profesionales para negocios locales en Perú. Desde soluciones económicas para emprendedores hasta sistemas avanzados para negocios establecidos.",
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
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
            priceRange: "S/700 - S/12,000",
            areaServed: {
              "@type": "Country",
              name: "Perú",
            },
            sameAs: [
              `https://wa.me/${whatsappNumber}`,
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: formatPhoneSchema(whatsappNumber),
              contactType: "sales",
              availableLanguage: ["Spanish"],
            },
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
