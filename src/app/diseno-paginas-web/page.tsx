import { Metadata } from "next";
import Link from "next/link";
import { XCircle, CheckCircle } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQAccordion, { FAQSchema } from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Diseño de Páginas Web Profesional | Desarrollo Web a Medida",
  description:
    "Servicio profesional de diseño de páginas web en Perú. Diseños modernos, responsivos y optimizados para SEO. Especializados en negocios locales: veterinarias, restaurantes, salones de belleza y más.",
  keywords: [
    "diseño de paginas web",
    "diseño de pagina web",
    "diseño de páginas web",
    "diseño de páginas web profesionales",
    "diseño de páginas web profesional",
    "diseño y desarrollo de páginas web",
    "servicio de diseño de páginas web",
    "diseño de páginas web económicas",
    "diseño de páginas web precios",
    "empresa de diseño de páginas web",
    "diseño web",
    "diseño de tiendas virtuales",
    "posicionamiento web",
  ],
  alternates: {
    canonical: "https://webparatunegocio.pe/diseno-paginas-web",
  },
  openGraph: {
    title: "Diseño de Páginas Web Profesional",
    description:
      "Diseño de páginas web moderno y profesional para negocios en Perú. 17+ industrias especializadas. SEO incluido.",
    url: "https://webparatunegocio.pe/diseno-paginas-web",
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
      "El diseño de nuestra página web superó todas las expectativas. Es moderna, rápida y nuestros clientes la encuentran fácilmente en Google.",
    rating: 5,
  },
  {
    name: "Lucía Fernández",
    role: "Propietaria",
    company: "Boutique Elegance",
    content:
      "El diseño web que nos hicieron refleja perfectamente nuestra marca. Las ventas online aumentaron un 60% en el primer trimestre.",
    rating: 5,
  },
  {
    name: "Andrea Soto",
    role: "Consultora",
    company: "AS Consulting",
    content:
      "Mi página web profesional me diferencia de la competencia. Los clientes ven mis servicios y casos de éxito antes de contactarme.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "¿Cuánto cuesta el diseño de una página web?",
    answer:
      "El costo del diseño de páginas web varía según la complejidad y las necesidades de tu negocio. Cada cotización es personalizada: contáctanos para recibir una propuesta adaptada a tus objetivos sin compromiso.",
  },
  {
    question: "¿Qué incluye el servicio de diseño de páginas web?",
    answer:
      "Nuestro servicio completo incluye: diseño UI/UX personalizado, desarrollo responsivo, optimización SEO, integración con WhatsApp, formularios de contacto, Google Analytics, certificado SSL, hosting y capacitación para gestión de contenido.",
  },
  {
    question: "¿Diseñan páginas web con WordPress?",
    answer:
      "Trabajamos con tecnologías más modernas y eficientes: Next.js y React. Estas herramientas permiten crear páginas más rápidas, seguras y con mejor posicionamiento en Google que WordPress. Sin embargo, si ya tienes un sitio WordPress, también podemos trabajar con él.",
  },
  {
    question: "¿El diseño será único o usan plantillas?",
    answer:
      "Cada diseño es personalizado para tu negocio y tu industria. No usamos plantillas genéricas. Además, tenemos diseños optimizados por industria (veterinarias, restaurantes, etc.) que incluyen las funcionalidades específicas que tu tipo de negocio necesita.",
  },
  {
    question: "¿La página se verá bien en celulares y tablets?",
    answer:
      "Sí, todas nuestras páginas son 100% responsivas con enfoque mobile-first. Se adaptan perfectamente a cualquier dispositivo: celulares, tablets, laptops y monitores de escritorio.",
  },
  {
    question: "¿Puedo solicitar cambios después de la entrega?",
    answer:
      "Sí, incluimos un periodo de revisiones después de la entrega donde puedes solicitar ajustes. Además, con nuestro plan de mantenimiento puedes actualizar contenido y hacer cambios menores de forma continua.",
  },
  {
    question: "¿Cómo es el proceso de diseño de páginas web?",
    answer:
      "Nuestro proceso tiene 5 etapas: 1) Consulta inicial gratuita, 2) Propuesta y wireframes, 3) Diseño visual y aprobación, 4) Desarrollo y programación, 5) Pruebas, ajustes y lanzamiento. Te mantenemos informado en cada paso.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consulta Gratuita",
    description: "Analizamos tu negocio, competencia y objetivos. Te explicamos opciones y respondemos tus dudas.",
  },
  {
    step: "02",
    title: "Propuesta y Diseño",
    description: "Creamos wireframes y el diseño visual de tu página. Tú apruebas cada etapa antes de avanzar.",
  },
  {
    step: "03",
    title: "Desarrollo",
    description: "Programamos tu página con Next.js, optimizamos para SEO y velocidad. Mobile-first siempre.",
  },
  {
    step: "04",
    title: "Lanzamiento",
    description: "Pruebas finales, ajustes y publicación. Te capacitamos para gestionar tu contenido.",
  },
];

export default function DisenoPaginasWebPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "Diseño de Páginas Web", href: "/diseno-paginas-web" },
        ]}
      />

      <HeroSection
        title="Diseño de Páginas Web Profesional"
        subtitle="Creamos páginas web que no solo se ven increíbles, sino que generan resultados. Diseño moderno, velocidad de carga ultra rápida y optimización SEO para que tu negocio destaque en Google."
        ctaText="Solicitar Diseño Web"
        ctaLink="/contacto"
        secondaryCtaText="Ver Proceso de Diseño"
        secondaryCtaLink="#proceso"
      />

      {/* Proceso de diseño */}
      <section id="proceso" className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestro Proceso de Diseño Web
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Un proceso claro y transparente de principio a fin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, i) => (
              <div key={i} className="relative p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
                <div className="text-5xl font-bold text-indigo-500/20 mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-indigo-500/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué hace diferente nuestro diseño */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Por Qué Nuestro Diseño Web es Diferente?
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              No solo diseñamos páginas bonitas — creamos herramientas de crecimiento para tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Comparación */}
            <div className="p-8 bg-white/[0.03] border border-red-500/10 rounded-2xl">
              <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6" /> Diseño Web Tradicional
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">×</span>
                  Plantillas genéricas de WordPress
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">×</span>
                  Carga lenta (5-10 segundos)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">×</span>
                  Sin optimización SEO real
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">×</span>
                  Diseño que no convierte
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">×</span>
                  Vulnerable a hackeos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">×</span>
                  Requiere plugins costosos
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white/[0.03] border border-emerald-500/20 rounded-2xl">
              <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" /> Nuestro Diseño Web
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  Diseño personalizado por industria
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  Ultra rápido (menos de 2 seg)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  SEO técnico y on-page incluido
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  Diseño enfocado en conversión
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  Seguridad de nivel empresarial
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  Todo incluido, sin extras ocultos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <FAQAccordion
        title="Preguntas Frecuentes sobre Diseño Web"
        subtitle="Resolvemos todas tus dudas"
        items={faqs}
      />

      <CTASection
        title="¿Listo para un Diseño Web Profesional?"
        subtitle="Solicita tu cotización gratuita y empieza a transformar tu presencia digital"
        primaryCta={{ text: "Cotización Gratis", href: "/contacto" }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Diseño de Páginas Web Profesional",
            description: "Servicio de diseño y desarrollo de páginas web profesionales para negocios en Perú.",
            provider: {
              "@type": "Organization",
              name: "Web Para Tu Negocio",
              url: "https://webparatunegocio.pe",
            },
            serviceType: "Diseño Web",
            areaServed: { "@type": "Country", name: "Perú" },
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
              { "@type": "ListItem", position: 2, name: "Diseño de Páginas Web", item: "https://webparatunegocio.pe/diseno-paginas-web" },
            ],
          }),
        }}
      />

      <FAQSchema items={faqs} />
    </>
  );
}
