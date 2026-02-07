"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

interface TestimonialCarouselProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  showSchema?: boolean;
  businessName?: string;
}

// Componente para el Schema de Reviews
export function TestimonialSchema({
  testimonials,
  businessName = "Web Para Tu Negocio"
}: {
  testimonials: Testimonial[];
  businessName?: string;
}) {
  const totalRating = testimonials.reduce((acc, t) => acc + t.rating, 0);
  const averageRating = (totalRating / testimonials.length).toFixed(1);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating,
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": testimonials.length.toString(),
      "reviewCount": testimonials.length.toString()
    },
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": t.content,
      "publisher": {
        "@type": "Organization",
        "name": t.company
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-[400px] bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating ? "text-amber-400" : "text-zinc-700"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-300 mb-6 italic">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-white font-semibold">{testimonial.name}</p>
          <p className="text-sm text-slate-500">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialCarousel({
  title = "Lo Que Dicen Nuestros Clientes",
  subtitle = "Historias de éxito de negocios como el tuyo",
  testimonials,
  showSchema = true,
  businessName = "Web Para Tu Negocio",
}: TestimonialCarouselProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Calcular rating promedio
  const totalRating = testimonials.reduce((acc, t) => acc + t.rating, 0);
  const averageRating = (totalRating / testimonials.length).toFixed(1);

  // Duplicate testimonials for seamless infinite scroll
  const duplicated = [...testimonials, ...testimonials];

  // Split into two rows
  const half = Math.ceil(testimonials.length / 2);
  const row1 = [...testimonials.slice(0, half), ...testimonials.slice(0, half)];
  const row2 = [...testimonials.slice(half), ...testimonials.slice(half)];

  return (
    <>
      <section ref={sectionRef} className="relative py-24 bg-[#09090B] overflow-hidden">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div
            className={`text-center transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              {subtitle}
            </p>

            {/* Rating Summary */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(parseFloat(averageRating))
                        ? "text-amber-400"
                        : "text-zinc-700"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-[family-name:var(--font-display)] text-slate-400 font-medium">
                {averageRating} de 5 ({testimonials.length} reseñas)
              </span>
            </div>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Fade edge - left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#09090B] to-transparent z-10 pointer-events-none" />

          {/* Fade edge - right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#09090B] to-transparent z-10 pointer-events-none" />

          {/* Row 1 - moves left */}
          <div
            className="flex gap-6 mb-6 hover:[animation-play-state:paused]"
            style={{
              animation: "marquee 40s linear infinite",
              willChange: "transform",
            }}
          >
            {row1.map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Row 2 - moves right */}
          <div
            className="flex gap-6 hover:[animation-play-state:paused]"
            style={{
              animation: "marquee-reverse 45s linear infinite",
              willChange: "transform",
            }}
          >
            {row2.map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Schema para Rich Snippets */}
      {showSchema && (
        <TestimonialSchema testimonials={testimonials} businessName={businessName} />
      )}
    </>
  );
}
