import { Metadata } from "next";
import Link from "next/link";
import FAQAccordion, { FAQSchema } from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "¿Cuánto Cuesta una Página Web en Perú? [Precios 2026]",
  description:
    "Guía actualizada de precios de páginas web en Perú 2026. Desde S/700 hasta S/12,000+. Comparamos costos por tipo de negocio, tecnología y funcionalidades. Cotización gratis.",
  keywords: [
    "cuanto cuesta una pagina web peru",
    "cuanto cuesta una pagina web en peru",
    "cuanto cuesta hacer una pagina web peru",
    "cuanto cuesta crear una pagina web peru",
    "precio de pagina web en peru",
    "precio pagina web peru",
    "pagina web precio peru",
    "diseño de páginas web precios",
    "diseño de páginas web precio",
  ],
  alternates: {
    canonical: "https://webparatunegocio.pe/cuanto-cuesta-pagina-web",
  },
  openGraph: {
    title: "¿Cuánto Cuesta una Página Web en Perú? Precios 2026",
    description:
      "Guía completa de precios de páginas web en Perú. Desde S/700 hasta S/12,000. Compara opciones por industria.",
    url: "https://webparatunegocio.pe/cuanto-cuesta-pagina-web",
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Cuánto cuesta una página web en Perú en 2026?",
    answer:
      "Los precios de páginas web en Perú en 2026 van desde S/700 para páginas básicas hasta S/12,000+ para sistemas avanzados. El costo promedio para un negocio pequeño es entre S/1,500 y S/4,000. El precio final depende de la complejidad, funcionalidades y tipo de negocio.",
  },
  {
    question: "¿Es mejor una página web barata o cara?",
    answer:
      "Depende de tus objetivos. Una página web económica (S/700-S/1,500) es ideal para emprendedores que necesitan presencia digital básica. Una página premium (S/3,000+) es recomendable para negocios establecidos que quieren funcionalidades avanzadas como reservas online, galería de servicios y SEO avanzado. Lo importante es que la inversión se alinee con tus objetivos de negocio.",
  },
  {
    question: "¿Hay costos ocultos en el desarrollo web?",
    answer:
      "Con nosotros, no. Nuestros precios incluyen diseño, desarrollo, hosting, SSL y capacitación. Los únicos costos adicionales son: dominio (.pe desde S/40/año), mantenimiento mensual opcional (desde S/100/mes) y funcionalidades extra que solicites después de la entrega.",
  },
  {
    question: "¿Cuánto cuesta el mantenimiento de una página web?",
    answer:
      "El mantenimiento mensual va desde S/100 hasta S/500 dependiendo del nivel de servicio. Incluye actualizaciones de seguridad, backups, cambios menores de contenido y soporte técnico. No es obligatorio pero sí recomendable para mantener tu sitio seguro y actualizado.",
  },
  {
    question: "¿Puedo crear una página web gratis para mi negocio?",
    answer:
      "Existen opciones gratuitas como Google Sites o Wix Free, pero tienen limitaciones importantes: dominio genérico (tunegocio.wixsite.com), publicidad de la plataforma, velocidad lenta, opciones de SEO limitadas y aspecto poco profesional. Para un negocio serio, la inversión en una página web profesional se recupera rápidamente con los nuevos clientes que genera.",
  },
  {
    question: "¿Cuánto cuesta una página web con WordPress en Perú?",
    answer:
      "Una página web con WordPress en Perú cuesta entre S/1,500 y S/5,000 con una agencia, más costos de hosting (S/200-S/600/año), plugins premium (S/200-S/1,000/año) y mantenimiento. Nosotros usamos Next.js que es más rápido y seguro, con costos de hosting más bajos y sin necesidad de plugins costosos.",
  },
];

const pricingData = [
  {
    category: "Páginas Web Económicas",
    priceRange: "S/700 - S/1,500",
    ideal: "Emprendedores y negocios nuevos",
    examples: ["Transporte", "Reparaciones", "Limpieza", "Freelancers", "Tiendas de Ropa"],
    includes: [
      "Diseño responsivo mobile-first",
      "Hasta 5-7 secciones",
      "Formulario de contacto",
      "WhatsApp integrado",
      "SEO básico",
      "Certificado SSL",
      "Hosting incluido",
      "Entrega en 1-2 semanas",
    ],
    color: "emerald",
  },
  {
    category: "Páginas Web Profesionales",
    priceRange: "S/3,000 - S/5,500",
    ideal: "Negocios establecidos que quieren crecer",
    examples: ["Veterinarias", "Salones de Belleza", "Restaurantes", "Cafeterías"],
    includes: [
      "Todo lo del plan Económico",
      "Diseño premium personalizado",
      "Sistema de reservas/citas online",
      "Galería de servicios interactiva",
      "SEO avanzado con Schema markup",
      "Blog/Noticias",
      "Google Analytics configurado",
      "Capacitación personalizada",
      "Entrega en 3-4 semanas",
    ],
    color: "indigo",
  },
  {
    category: "Páginas Web Avanzadas",
    priceRange: "S/5,000 - S/12,000+",
    ideal: "Negocios que necesitan funcionalidades específicas",
    examples: ["Odontología", "Agencias de Viajes", "E-commerce", "Portales"],
    includes: [
      "Todo lo del plan Profesional",
      "Dashboard administrativo completo",
      "Integraciones con APIs externas",
      "Sistema de pagos online",
      "Multi-idioma",
      "Panel para gestión de citas",
      "Reportes y estadísticas",
      "Soporte prioritario",
      "Entrega en 4-6 semanas",
    ],
    color: "violet",
  },
];

const costComparison = [
  { item: "Agencia tradicional (WordPress)", price: "S/3,000 - S/15,000", time: "4-8 semanas", maintenance: "S/300-800/mes" },
  { item: "Freelancer", price: "S/500 - S/5,000", time: "2-6 semanas", maintenance: "Variable" },
  { item: "Wix/Squarespace (DIY)", price: "S/0 - S/500/año", time: "1-4 semanas (tú)", maintenance: "S/100-300/año" },
  { item: "Web Para Tu Negocio", price: "S/700 - S/12,000", time: "1-4 semanas", maintenance: "Desde S/100/mes" },
];

export default function CuantoCuestaPaginaWebPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "Páginas Web en Perú", href: "/paginas-web-peru" },
          { name: "¿Cuánto Cuesta?", href: "/cuanto-cuesta-pagina-web" },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-16 pb-16 bg-[#09090B] overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Guía de Precios Actualizada 2026
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
            ¿Cuánto Cuesta una Página Web en Perú?
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Guía completa y transparente de precios de páginas web en el mercado peruano.
            Compara opciones, conoce qué incluye cada rango de precio y toma la mejor decisión para tu negocio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
            >
              Cotización Personalizada Gratis
            </Link>
            <a
              href="#precios-detalle"
              className="border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/[0.05] transition-all duration-300"
            >
              Ver Tabla de Precios
            </a>
          </div>
        </div>
      </section>

      {/* Resumen rápido de precios */}
      <section className="py-12 bg-[#09090B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-center">
              <p className="text-emerald-400 text-sm font-semibold mb-1">Económico</p>
              <p className="text-3xl font-bold text-white">S/700 - S/1,500</p>
              <p className="text-slate-500 text-sm mt-1">Para emprendedores</p>
            </div>
            <div className="p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl text-center">
              <p className="text-indigo-400 text-sm font-semibold mb-1">Profesional</p>
              <p className="text-3xl font-bold text-white">S/3,000 - S/5,500</p>
              <p className="text-slate-500 text-sm mt-1">Para negocios establecidos</p>
            </div>
            <div className="p-6 bg-violet-500/5 border border-violet-500/20 rounded-2xl text-center">
              <p className="text-violet-400 text-sm font-semibold mb-1">Avanzado</p>
              <p className="text-3xl font-bold text-white">S/5,000 - S/12,000+</p>
              <p className="text-slate-500 text-sm mt-1">Funcionalidades avanzadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detalle de precios */}
      <section id="precios-detalle" className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Detalle de Precios por Tipo de Página Web
          </h2>

          <div className="space-y-8">
            {pricingData.map((plan, i) => (
              <div key={i} className={`p-8 bg-white/[0.03] border border-${plan.color}-500/20 rounded-2xl`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{plan.category}</h3>
                    <p className={`text-${plan.color}-400 text-3xl font-bold mb-2`}>{plan.priceRange}</p>
                    <p className="text-slate-400 mb-4">Ideal para: {plan.ideal}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {plan.examples.map((ex, j) => (
                        <span key={j} className="px-3 py-1 bg-white/[0.05] border border-white/[0.08] rounded-full text-xs text-slate-400">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-3">Incluye:</p>
                    <ul className="space-y-2">
                      {plan.includes.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                          <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparación con alternativas */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Comparación de Costos: ¿Cuál es la Mejor Opción?
          </h2>
          <p className="text-slate-400 text-lg text-center mb-12 max-w-3xl mx-auto">
            Compara el costo total de las diferentes opciones disponibles en Perú
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="py-4 px-4 text-slate-400 text-sm font-semibold">Opción</th>
                  <th className="py-4 px-4 text-slate-400 text-sm font-semibold">Precio</th>
                  <th className="py-4 px-4 text-slate-400 text-sm font-semibold">Tiempo</th>
                  <th className="py-4 px-4 text-slate-400 text-sm font-semibold">Mantenimiento</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((row, i) => (
                  <tr key={i} className={`border-b border-white/[0.04] ${i === 3 ? "bg-indigo-500/5" : ""}`}>
                    <td className={`py-4 px-4 ${i === 3 ? "text-indigo-400 font-semibold" : "text-slate-300"}`}>
                      {row.item}
                    </td>
                    <td className="py-4 px-4 text-slate-400 text-sm">{row.price}</td>
                    <td className="py-4 px-4 text-slate-400 text-sm">{row.time}</td>
                    <td className="py-4 px-4 text-slate-400 text-sm">{row.maintenance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Factores que afectan el precio */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            ¿Qué Factores Afectan el Precio de una Página Web?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Número de Páginas", desc: "Una landing page cuesta menos que un sitio con 20+ páginas. Más contenido = más trabajo de diseño y desarrollo." },
              { title: "Funcionalidades", desc: "Reservas online, e-commerce, chat en vivo, integración con redes sociales — cada funcionalidad adicional tiene un costo." },
              { title: "Diseño Personalizado", desc: "Un diseño desde cero cuesta más que adaptar una plantilla, pero genera mejores resultados y diferenciación." },
              { title: "Optimización SEO", desc: "El SEO básico está incluido, pero estrategia de contenido y keywords avanzadas requieren inversión adicional." },
              { title: "Contenido", desc: "Si necesitas que creemos textos, fotos profesionales o videos, esto tiene un costo adicional al desarrollo." },
              { title: "Urgencia", desc: "Proyectos con plazos muy cortos pueden tener un costo adicional. Lo ideal es planificar con 2-4 semanas de anticipación." },
            ].map((factor, i) => (
              <div key={i} className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-2">{factor.title}</h3>
                <p className="text-slate-400 text-sm">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Preguntas Frecuentes sobre Precios"
        subtitle="Todo lo que necesitas saber sobre costos de páginas web en Perú"
        items={faqs}
      />

      <CTASection
        title="¿Quieres Saber el Precio Exacto para Tu Negocio?"
        subtitle="Solicita una cotización gratuita y personalizada. Sin compromiso."
        primaryCta={{ text: "Cotización Gratis en 24h", href: "/contacto" }}
      />

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "¿Cuánto Cuesta una Página Web en Perú? Guía de Precios 2026",
            description: "Guía actualizada de precios de páginas web en Perú 2026. Desde S/700 hasta S/12,000+.",
            author: {
              "@type": "Organization",
              name: "Web Para Tu Negocio",
              url: "https://webparatunegocio.pe",
            },
            publisher: {
              "@type": "Organization",
              name: "Web Para Tu Negocio",
              logo: { "@type": "ImageObject", url: "https://webparatunegocio.pe/logo.png" },
            },
            datePublished: "2026-02-01",
            dateModified: "2026-02-07",
            mainEntityOfPage: "https://webparatunegocio.pe/cuanto-cuesta-pagina-web",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://webparatunegocio.pe" },
              { "@type": "ListItem", position: 2, name: "Páginas Web en Perú", item: "https://webparatunegocio.pe/paginas-web-peru" },
              { "@type": "ListItem", position: 3, name: "¿Cuánto Cuesta?", item: "https://webparatunegocio.pe/cuanto-cuesta-pagina-web" },
            ],
          }),
        }}
      />

      <FAQSchema items={faqs} />
    </>
  );
}
