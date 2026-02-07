import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProblemCards from "@/components/ProblemCards";
import SolutionCards from "@/components/SolutionCards";
import TransformationChart from "@/components/TransformationChart";
import Checklist from "@/components/Checklist";
import PricingCards from "@/components/PricingCards";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQAccordion, { FAQSchema } from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import { NicheData } from "@/data/niches";

interface NichePageProps {
  nicheData: NicheData;
}

export function generateNicheMetadata(nicheData: NicheData): Metadata {
  const keywords = [
    `página web ${nicheData.title.toLowerCase()}`,
    `página web para ${nicheData.title.toLowerCase()}`,
    `diseño web ${nicheData.title.toLowerCase()}`,
    `páginas web ${nicheData.title.toLowerCase()} peru`,
    `${nicheData.title.toLowerCase()} lima`,
    `desarrollo web ${nicheData.title.toLowerCase()}`,
    "páginas web peru",
    "diseño de paginas web",
    "diseño web lima",
  ];

  return {
    title: nicheData.metaTitle,
    description: nicheData.metaDescription,
    keywords,
    alternates: {
      canonical: `https://webparatunegocio.pe/${nicheData.slug}`,
    },
    openGraph: {
      title: nicheData.metaTitle,
      description: nicheData.metaDescription,
      url: `https://webparatunegocio.pe/${nicheData.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: nicheData.metaTitle,
      description: nicheData.metaDescription,
    },
  };
}

export default function NichePage({ nicheData }: NichePageProps) {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: nicheData.title, href: `/${nicheData.slug}` },
        ]}
      />

      <HeroSection
        title={nicheData.headline}
        subtitle={nicheData.subtitle}
        ctaText="Solicitar Cotización"
        ctaLink="/contacto"
        secondaryCtaText="Ver Precios"
        secondaryCtaLink="#precios"
        backgroundGradient={nicheData.gradientColors}
      />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <ProblemCards
        title="¿Te Identificas con Estos Problemas?"
        subtitle="Si experimentas alguno de estos desafíos, necesitas una solución digital"
        problems={nicheData.problems}
      />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <SolutionCards
        title="Nuestra Solución"
        subtitle="Todo lo que necesitas para transformar tu negocio"
        solutions={nicheData.solutions}
      />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <TransformationChart
        title="Tu Transformación"
        subtitle="Resultados reales que puedes esperar"
        data={nicheData.transformation}
      />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <Checklist
        title="Lo Que Incluye Tu Paquete"
        subtitle="Todo esto viene incluido con tu nueva web"
        items={nicheData.checklist}
      />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div id="precios">
        <PricingCards
          title="Elige Tu Plan"
          subtitle="Inversión que se paga sola en semanas"
          tiers={nicheData.pricing}
          maintenanceNote={nicheData.maintenanceNote}
        />
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <TestimonialCarousel
        title="Lo Que Dicen Nuestros Clientes"
        subtitle={`Historias de éxito de ${nicheData.title.toLowerCase()} como la tuya`}
        testimonials={nicheData.testimonials}
      />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <FAQAccordion
        title="Preguntas Frecuentes"
        subtitle="Resolvemos todas tus dudas"
        items={nicheData.faqs}
      />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <CTASection
        title="¿Listo para Transformar tu Negocio?"
        subtitle="Agenda una consulta gratuita y descubre cómo podemos ayudarte"
        primaryCta={{ text: "Agendar Consulta Gratis", href: "/contacto" }}
      />

      {/* Cross-linking section para SEO */}
      <section className="py-12 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-slate-500 mb-4">
            También te puede interesar
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/paginas-web-peru"
              className="px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-full text-sm text-slate-400 hover:text-white hover:border-indigo-500/20 transition-all duration-300"
            >
              Páginas Web en Perú
            </Link>
            <Link
              href="/paginas-web-lima"
              className="px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-full text-sm text-slate-400 hover:text-white hover:border-indigo-500/20 transition-all duration-300"
            >
              Páginas Web en Lima
            </Link>
            <Link
              href="/diseno-paginas-web"
              className="px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-full text-sm text-slate-400 hover:text-white hover:border-indigo-500/20 transition-all duration-300"
            >
              Diseño de Páginas Web
            </Link>
            <Link
              href="/desarrollo-web-peru"
              className="px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-full text-sm text-slate-400 hover:text-white hover:border-indigo-500/20 transition-all duration-300"
            >
              Desarrollo Web
            </Link>
            <Link
              href="/cuanto-cuesta-pagina-web"
              className="px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-full text-sm text-slate-400 hover:text-white hover:border-indigo-500/20 transition-all duration-300"
            >
              Precios de Páginas Web
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Desarrollo Web para ${nicheData.title}`,
            description: nicheData.metaDescription,
            provider: {
              "@type": "Organization",
              name: "Web Para Tu Negocio",
              url: "https://webparatunegocio.pe",
            },
            serviceType: "Desarrollo Web",
            areaServed: {
              "@type": "Country",
              name: "Perú",
            },
            offers: nicheData.pricing.map((tier) => ({
              "@type": "Offer",
              name: tier.name,
              price: tier.price.replace("S/", "").replace(",", ""),
              priceCurrency: "PEN",
              description: tier.description,
            })),
          }),
        }}
      />

      {/* JSON-LD Schema for BreadcrumbList */}
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
                name: nicheData.title,
                item: `https://webparatunegocio.pe/${nicheData.slug}`,
              },
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
      <FAQSchema items={nicheData.faqs} />
    </>
  );
}
