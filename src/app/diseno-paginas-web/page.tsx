import { Metadata } from "next";
import Link from "next/link";
import { XCircle, CheckCircle, HeartPulse, Utensils, Scissors, Smile, Plane, ShoppingBag, Coffee, Laptop, Truck, Wrench } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import FAQSchema from "@/components/FAQSchema";
import Breadcrumb from "@/components/Breadcrumb";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Diseño de Páginas Web en Perú | Profesional y a Medida desde S/699",
  description:
    "Diseño de páginas web en Perú desde S/699. Diseños modernos, mobile-first y optimizados para Google. 17+ industrias especializadas: veterinarias, restaurantes, salones de belleza y más. Cotización gratis en 24h.",
  keywords: [
    "diseño de paginas web",
    "diseño de paginas web peru",
    "diseño de pagina web",
    "diseño de páginas web",
    "diseño de páginas web profesionales",
    "diseño de páginas web profesional",
    "diseño y desarrollo de páginas web",
    "servicio de diseño de páginas web",
    "diseño de páginas web económicas",
    "diseño de páginas web precios",
    "empresa de diseño de páginas web",
    "empresa de diseño de paginas web peru",
    "diseño web",
    "diseño web peru",
    "diseño de tiendas virtuales",
    "posicionamiento web",
  ],
  alternates: {
    canonical: "https://webparatunegocio.pe/diseno-paginas-web",
  },
  openGraph: {
    title: "Diseño de Páginas Web en Perú | Profesional desde S/699",
    description:
      "Diseño de páginas web en Perú desde S/699. 17+ industrias especializadas, SEO incluido, mobile-first. Cotización gratis en 24h.",
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
    question: "¿Cuánto tiempo tarda el diseño de una página web?",
    answer:
      "El plazo varía según la complejidad del proyecto. Un sitio web básico (Plan Esencial) se entrega en 1-2 semanas. Un proyecto más completo con sistema de reservas o tienda virtual (Plan Profesional o Avanzado) toma entre 3-6 semanas. Siempre acordamos el plazo exacto en la cotización.",
  },
  {
    question: "¿Diseñan páginas web para negocios pequeños en Perú?",
    answer:
      "Sí, nos especializamos en diseño de páginas web para pequeños y medianos negocios en Perú. Desde un emprendedor que necesita presencia online básica hasta una empresa establecida que quiere automatizar sus procesos. Tenemos planes desde S/699 adaptados a todo tipo de presupuesto.",
  },
  {
    question: "¿Incluye el diseño web posicionamiento en Google (SEO)?",
    answer:
      "Sí, todos nuestros diseños incluyen SEO técnico y on-page: estructura de URLs optimizada, meta etiquetas, velocidad de carga, schema markup, sitemap XML y robots.txt. Esto sienta las bases para que tu página aparezca en Google. Para resultados más avanzados ofrecemos servicios de SEO adicionales.",
  },
];

const stats = [
  { value: "50+", label: "Proyectos entregados" },
  { value: "17+", label: "Industrias especializadas" },
  { value: "<2s", label: "Tiempo de carga" },
  { value: "5★", label: "Satisfacción de clientes" },
];

const includesItems = [
  { title: "Diseño UI/UX personalizado", desc: "Interfaz única para tu marca e industria, sin plantillas genéricas." },
  { title: "SEO técnico incluido", desc: "Meta etiquetas, schema markup, sitemap XML y velocidad core web vitals." },
  { title: "100% Mobile-First", desc: "Diseñado primero para celulares — donde está el 80% de tus clientes." },
  { title: "WhatsApp integrado", desc: "Botón flotante y CTAs de WhatsApp para convertir visitas en consultas." },
  { title: "Certificado SSL", desc: "Conexión segura HTTPS que Google exige y da confianza a tus clientes." },
  { title: "Hosting en Vercel", desc: "Infraestructura global de alta disponibilidad incluida en todos los planes." },
  { title: "Google Analytics", desc: "Seguimiento de visitas, fuentes de tráfico y comportamiento de usuarios." },
  { title: "Capacitación incluida", desc: "Te enseñamos a gestionar tu contenido. No dependerás de nadie." },
];

const industries = [
  { name: "Veterinarias", href: "/veterinarias", Icon: HeartPulse },
  { name: "Restaurantes", href: "/restaurantes", Icon: Utensils },
  { name: "Salones de Belleza", href: "/salones-belleza", Icon: Scissors },
  { name: "Odontología", href: "/odontologia", Icon: Smile },
  { name: "Agencias de Viajes", href: "/agencias-viajes", Icon: Plane },
  { name: "Tiendas de Ropa", href: "/tiendas-ropa", Icon: ShoppingBag },
  { name: "Cafeterías", href: "/cafeterias", Icon: Coffee },
  { name: "Freelancers", href: "/freelancers", Icon: Laptop },
  { name: "Transporte", href: "/transporte", Icon: Truck },
  { name: "Reparaciones", href: "/reparaciones", Icon: Wrench },
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

      {/* Stats de autoridad */}
      <section className="py-10 bg-[#09090B] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-indigo-400 mb-1">{s.value}</p>
                <p className="text-slate-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Qué incluye el diseño web */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">Sin letra chica</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">
              ¿Qué Incluye el Diseño de Tu Página Web?
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Todo lo que necesitas para tener presencia profesional en internet, incluido desde el primer día.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {includesItems.map((item, i) => (
              <div key={i} className="p-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:border-indigo-500/20 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3">
                  <span className="text-indigo-400 text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-white font-semibold mb-1 text-sm">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Diseño web por industria */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">No somos genéricos</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">
              Diseño Web Especializado por Industria en Perú
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Cada industria tiene necesidades distintas. Tenemos diseños y funcionalidades pensadas específicamente para tu tipo de negocio.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {industries.map((ind, i) => (
              <Link
                key={i}
                href={ind.href}
                className="group flex flex-col items-center gap-2 p-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all text-center"
              >
                <ind.Icon className="w-6 h-6 text-indigo-400" />
                <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors leading-tight">{ind.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            ¿Tu industria no está en la lista?{" "}
            <Link href="/contacto" className="text-indigo-400 hover:underline">Contáctanos</Link> — trabajamos con cualquier tipo de negocio en Perú.
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

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
            name: "Diseño de Páginas Web en Perú",
            description: "Servicio de diseño y desarrollo de páginas web profesionales para negocios en Perú. Diseños modernos, mobile-first y optimizados para SEO desde S/699.",
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
            },
            serviceType: "Diseño Web",
            areaServed: { "@type": "Country", name: "Perú" },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "PEN",
              lowPrice: "699",
              offerCount: "3",
            },
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
