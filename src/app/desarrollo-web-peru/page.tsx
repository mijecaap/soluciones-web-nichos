import { Metadata } from "next";
import Link from "next/link";
import { Globe, CalendarDays, ShoppingCart, Smartphone, Link2, LayoutDashboard } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQAccordion, { FAQSchema } from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Desarrollo Web en Perú | Desarrolladores Web Profesionales",
  description:
    "Servicio de desarrollo web profesional en Perú. Desarrolladores especializados en Next.js, React y tecnologías modernas. Páginas web rápidas, seguras y optimizadas para SEO. 17+ industrias. Desde S/700.",
  keywords: [
    "desarrollo web peru",
    "desarrolladores de paginas web",
    "desarrollador web freelance",
    "desarrollo y diseño de páginas web",
    "diseño y desarrollo de páginas web",
    "desarrollo web profesional",
    "empresas de desarrollo web peru",
    "agencia de desarrollo web lima",
    "agencia digital",
    "agencia digital peru",
    "tienda virtual peru",
    "diseño de tiendas virtuales",
  ],
  alternates: {
    canonical: "https://webparatunegocio.pe/desarrollo-web-peru",
  },
  openGraph: {
    title: "Desarrollo Web en Perú | Desde S/700",
    description: "Desarrolladores web profesionales en Perú. Next.js, React y tecnologías modernas. 17+ industrias especializadas.",
    url: "https://webparatunegocio.pe/desarrollo-web-peru",
    type: "website",
  },
};

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51999999999";

const formatPhoneSchema = (num: string) => {
  return `+${num.slice(0, 2)}-${num.slice(2, 5)}-${num.slice(5, 8)}-${num.slice(8)}`;
};

const testimonials = [
  {
    name: "Jorge Huamán",
    role: "CEO",
    company: "TechPeru Solutions",
    content:
      "El desarrollo web que recibimos superó nuestras expectativas. La velocidad de carga y el SEO incluido nos dieron resultados desde el primer mes.",
    rating: 5,
  },
  {
    name: "Rosa Paredes",
    role: "Gerente Comercial",
    company: "Viajes Machupicchu Express",
    content:
      "Necesitábamos un sistema de reservas online y el equipo lo desarrolló perfectamente. Nuestros clientes pueden cotizar y reservar viajes 24/7.",
    rating: 5,
  },
  {
    name: "Diego Castillo",
    role: "Director",
    company: "Clínica Dental Sonrisas",
    content:
      "El sistema de citas online que desarrollaron transformó nuestra clínica. Los pacientes reservan desde su celular y nosotros organizamos mejor nuestra agenda.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "¿Qué tecnologías usan para el desarrollo web?",
    answer:
      "Utilizamos Next.js 15 (framework de React), TypeScript, Tailwind CSS y tecnologías modernas del ecosistema JavaScript. Esto nos permite crear aplicaciones web ultra rápidas con Server-Side Rendering (SSR) y Static Generation (SSG), lo cual mejora significativamente el SEO y la experiencia del usuario.",
  },
  {
    question: "¿Cuánto cuesta el desarrollo web en Perú?",
    answer:
      "El desarrollo web profesional en Perú va desde S/700 para páginas web económicas hasta S/12,000+ para sistemas avanzados con funcionalidades personalizadas. El costo depende de la complejidad, funcionalidades requeridas y tipo de negocio.",
  },
  {
    question: "¿Pueden integrar sistemas de pago o reservas?",
    answer:
      "Sí. Desarrollamos integraciones con pasarelas de pago (Niubiz, MercadoPago, PayPal), sistemas de reservas/citas, CRMs, APIs de terceros, WhatsApp Business API y más. Todo personalizado según las necesidades de tu negocio.",
  },
  {
    question: "¿Por qué Next.js es mejor que WordPress para mi negocio?",
    answer:
      "Next.js ofrece: velocidad de carga 3-5x mayor que WordPress, seguridad superior (sin vulnerabilidades de plugins), mejor SEO (Core Web Vitals perfectos), costos de hosting más bajos y escalabilidad sin límites. WordPress es genial para blogs, pero para negocios que quieren crecer, Next.js es la mejor opción.",
  },
  {
    question: "¿Ofrecen desarrollo de aplicaciones móviles también?",
    answer:
      "Nuestras páginas web son Progressive Web Apps (PWA) que funcionan como aplicaciones nativas en celulares. Se pueden instalar desde el navegador sin necesidad de App Store. Para aplicaciones nativas, podemos cotizar servicios adicionales.",
  },
  {
    question: "¿Pueden trabajar con un diseño que ya tengo?",
    answer:
      "Sí. Si ya tienes un diseño en Figma, Adobe XD o similar, podemos desarrollarlo exactamente como lo tienes. También podemos mejorar y optimizar diseños existentes.",
  },
];

const technologies = [
  { name: "Next.js 15", desc: "Framework React de producción", color: "white" },
  { name: "React 19", desc: "Librería de interfaces de usuario", color: "blue" },
  { name: "TypeScript", desc: "JavaScript tipado y seguro", color: "blue" },
  { name: "Tailwind CSS", desc: "Estilos utilitarios modernos", color: "cyan" },
  { name: "Node.js", desc: "Backend JavaScript", color: "green" },
  { name: "PostgreSQL", desc: "Base de datos robusta", color: "blue" },
  { name: "Vercel", desc: "Hosting edge global", color: "white" },
  { name: "Cloudflare", desc: "CDN y seguridad", color: "orange" },
];

export default function DesarrolloWebPeruPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "Desarrollo Web en Perú", href: "/desarrollo-web-peru" },
        ]}
      />

      <HeroSection
        title="Desarrollo Web Profesional en Perú"
        subtitle="Somos desarrolladores web especializados en crear soluciones digitales de alto rendimiento para negocios peruanos. Tecnología moderna, SEO integrado y diseño que convierte visitantes en clientes."
        ctaText="Solicitar Cotización"
        ctaLink="/contacto"
        secondaryCtaText="Ver Tecnologías"
        secondaryCtaLink="#tecnologias"
      />

      {/* Nuestro Stack Tecnológico */}
      <section id="tecnologias" className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
              Tecnología de Desarrollo Web de Vanguardia
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Usamos las mismas tecnologías que empresas como Netflix, Uber y TikTok.
              Esto nos permite crear páginas web ultra rápidas con las mejores puntuaciones en Google.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <div key={i} className="p-5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-center hover:border-indigo-500/20 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-1">{tech.name}</h3>
                <p className="text-slate-500 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué tipo de desarrollo hacemos */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
              Servicios de Desarrollo Web
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8 text-indigo-400" />,
                title: "Páginas Web Corporativas",
                description: "Desarrollo de sitios web profesionales que representan tu marca y generan confianza en clientes potenciales.",
              },
              {
                icon: <CalendarDays className="w-8 h-8 text-indigo-400" />,
                title: "Sistemas de Reservas",
                description: "Desarrollo de calendarios de citas y reservas online para clínicas, salones de belleza, restaurantes y más.",
              },
              {
                icon: <ShoppingCart className="w-8 h-8 text-indigo-400" />,
                title: "Tiendas Online",
                description: "Desarrollo de e-commerce personalizado con catálogo de productos, carrito de compras y pasarela de pagos.",
              },
              {
                icon: <Smartphone className="w-8 h-8 text-indigo-400" />,
                title: "Progressive Web Apps",
                description: "Aplicaciones web que funcionan offline y se instalan como apps nativas. Sin App Store.",
              },
              {
                icon: <Link2 className="w-8 h-8 text-indigo-400" />,
                title: "Integraciones y APIs",
                description: "Conexión con WhatsApp Business, pasarelas de pago, CRMs, ERPs y sistemas externos.",
              },
              {
                icon: <LayoutDashboard className="w-8 h-8 text-indigo-400" />,
                title: "Dashboards y Paneles",
                description: "Desarrollo de paneles de administración para gestionar contenido, citas, productos y métricas.",
              },
            ].map((service, i) => (
              <div key={i} className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:border-indigo-500/20 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas competitivas */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Por Qué Elegirnos como Desarrolladores Web?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "< 2s", label: "Tiempo de Carga", desc: "Nuestras páginas cargan en menos de 2 segundos" },
              { metric: "98+", label: "Core Web Vitals", desc: "Score perfecto en Google PageSpeed Insights" },
              { metric: "17+", label: "Industrias", desc: "Especializados en más de 17 nichos diferentes" },
              { metric: "100%", label: "Responsivo", desc: "Perfecto en celulares, tablets y escritorio" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
                <div className="text-4xl font-bold text-indigo-400 min-w-[80px]">{item.metric}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nichos especializados */}
      <section className="py-16 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white mb-8 text-center">
            Desarrollo Web Especializado por Industria
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { name: "Veterinarias", href: "/veterinarias" },
              { name: "Restaurantes", href: "/restaurantes" },
              { name: "Salones de Belleza", href: "/salones-belleza" },
              { name: "Odontología", href: "/odontologia" },
              { name: "Agencias de Viajes", href: "/agencias-viajes" },
              { name: "Tiendas de Ropa", href: "/tiendas-ropa" },
              { name: "Cafeterías", href: "/cafeterias" },
              { name: "Freelancers", href: "/freelancers" },
              { name: "Transporte", href: "/transporte" },
              { name: "Limpieza", href: "/limpieza" },
            ].map((niche, i) => (
              <Link
                key={i}
                href={niche.href}
                className="p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-center text-sm text-slate-400 hover:text-white hover:border-indigo-500/20 transition-all duration-300"
              >
                {niche.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <TestimonialCarousel testimonials={testimonials} />

      <FAQAccordion
        title="Preguntas Frecuentes sobre Desarrollo Web"
        subtitle="Resolvemos tus dudas técnicas"
        items={faqs}
      />

      <CTASection
        title="¿Necesitas Desarrollo Web en Perú?"
        subtitle="Solicita tu cotización gratuita y conversemos sobre tu proyecto"
        primaryCta={{ text: "Cotización Gratis", href: "/contacto" }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Desarrollo Web Profesional en Perú",
            description: "Servicio de desarrollo web profesional en Perú con tecnologías modernas como Next.js y React.",
            provider: {
              "@type": "LocalBusiness",
              name: "Web Para Tu Negocio",
              url: "https://webparatunegocio.pe",
              telephone: formatPhoneSchema(whatsappNumber),
              address: { "@type": "PostalAddress", addressLocality: "Lima", addressCountry: "PE" },
            },
            serviceType: "Desarrollo Web",
            areaServed: { "@type": "Country", name: "Perú" },
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "700",
              highPrice: "12000",
              priceCurrency: "PEN",
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
              { "@type": "ListItem", position: 2, name: "Desarrollo Web en Perú", item: "https://webparatunegocio.pe/desarrollo-web-peru" },
            ],
          }),
        }}
      />

      <FAQSchema items={faqs} />
    </>
  );
}
