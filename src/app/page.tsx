import HeroSection from "@/components/HeroSection";
import NicheGrid from "@/components/NicheGrid";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";

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
];

export default function Home() {
  return (
    <>
      <HeroSection
        title="Páginas Web Profesionales que Generan Clientes"
        subtitle="Creamos sitios web optimizados para negocios locales. Más visibilidad en Google, más citas automáticas, más ingresos. ROI en 1-2 meses."
        ctaText="Ver Soluciones"
        ctaLink="#nichos"
        secondaryCtaText="Contactar"
        secondaryCtaLink="/contacto"
      />

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Tu Negocio Tiene Estos Problemas?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Si te identificas con alguno de estos desafíos, necesitas una
              presencia digital profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                title: "Invisibilidad en Google",
                description:
                  "Tus clientes potenciales buscan tus servicios pero encuentran a tu competencia.",
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
                title: "Teléfono Saturado",
                description:
                  "Pierdes tiempo contestando llamadas mientras tu negocio necesita atención.",
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
                title: "Citas Canceladas",
                description:
                  "Los no-shows te cuestan dinero y tiempo que podrías dedicar a otros clientes.",
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
                title: "Crecimiento Estancado",
                description:
                  "Sabes que podrías atender más clientes pero no tienes cómo atraerlos.",
              },
            ].map((problem, index) => (
              <div
                key={index}
                className="bg-red-50 p-6 rounded-xl border border-red-100"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* JSON-LD Schema for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Soluciones Web Profesionales",
            url: "https://soluciones-web-nichos.vercel.app",
            logo: "https://soluciones-web-nichos.vercel.app/logo.png",
            description:
              "Desarrollo de páginas web profesionales para negocios locales. Especialistas en clínicas veterinarias, salones de belleza, restaurantes, odontología y agencias de viajes.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+51-999-999-999",
              contactType: "sales",
              availableLanguage: ["Spanish"],
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lima",
              addressCountry: "PE",
            },
            sameAs: [
              "https://wa.me/51999999999",
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
            name: "Soluciones Web Profesionales",
            image: "https://soluciones-web-nichos.vercel.app/og-image.jpg",
            "@id": "https://soluciones-web-nichos.vercel.app",
            url: "https://soluciones-web-nichos.vercel.app",
            telephone: "+51-999-999-999",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lima",
              addressCountry: "PE",
            },
            priceRange: "S/3,000 - S/12,000",
          }),
        }}
      />
    </>
  );
}
