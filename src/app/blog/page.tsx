import { Metadata } from 'next';
import Link from 'next/link';
import { allPosts, getFeaturedPost, getRecentPosts } from '@/data/blog/posts';
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — Diseño Web, SEO y Negocios Digitales en Perú',
  description:
    'Guías, consejos y estrategias de diseño web, SEO y marketing digital para negocios en Perú. Contenido práctico para crecer en el mundo digital.',
  keywords: [
    'blog diseño web peru',
    'guias seo peru',
    'marketing digital peru',
    'consejos paginas web',
    'blog webparatunegocio',
  ],
  alternates: {
    canonical: 'https://webparatunegocio.pe/blog',
  },
  openGraph: {
    title: 'Blog — Diseño Web y SEO para Negocios en Perú',
    description:
      'Guías prácticas de diseño web, SEO y marketing digital para negocios locales en Perú.',
    url: 'https://webparatunegocio.pe/blog',
    type: 'website',
  },
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Guías: {
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    border: 'border-indigo-500/20',
  },
  SEO: {
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    border: 'border-violet-500/20',
  },
  Tips: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/20',
  },
  Negocios: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/20',
  },
};

function CategoryBadge({ category }: { category: string }) {
  const colors = categoryColors[category] ?? {
    bg: 'bg-slate-500/10',
    text: 'text-slate-400',
    border: 'border-slate-500/20',
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colors.bg} ${colors.text} ${colors.border}`}
    >
      {category}
    </span>
  );
}

export default function BlogPage() {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(10);
  const otherPosts = recentPosts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
              Blog
            </span>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
              Guías y estrategias para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                crecer en digital
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Contenido práctico sobre diseño web, SEO y marketing digital para negocios en Perú.
              Sin teoría innecesaria — solo lo que realmente funciona.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-slate-400 text-sm">
                <strong className="text-white">{allPosts.length}</strong>{' '}
                {allPosts.length === 1 ? 'artículo' : 'artículos'} publicados
              </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="text-slate-500 text-sm">Actualizado en 2026</span>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-indigo-400" />
              Artículo destacado
            </p>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block"
            >
              <article className="relative p-8 md:p-10 bg-white/[0.02] border border-white/[0.08] rounded-3xl overflow-hidden hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-500">
                {/* Background gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/[0.04] via-transparent to-violet-500/[0.04]" />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                  {/* Content */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-4">
                      <CategoryBadge category={featuredPost.category} />
                      <span className="text-xs text-indigo-400 font-medium bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                        Destacado
                      </span>
                    </div>

                    <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-indigo-100 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-slate-400 text-base leading-relaxed mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formatDate(featuredPost.publishedAt)}</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-slate-600" />
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{featuredPost.readingTime} min de lectura</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual panel */}
                  <div className="lg:col-span-2 flex items-center justify-center">
                    <div className="w-full max-w-xs aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500/10 via-violet-500/8 to-transparent border border-white/[0.06] flex items-center justify-center relative overflow-hidden">
                      {/* Pseudo-content overlay */}
                      <div className="absolute inset-4 flex flex-col gap-2 opacity-40">
                        <div className="h-2 bg-indigo-400/40 rounded-full w-3/4" />
                        <div className="h-2 bg-slate-400/20 rounded-full w-full" />
                        <div className="h-2 bg-slate-400/20 rounded-full w-5/6" />
                        <div className="h-2 bg-slate-400/20 rounded-full w-4/5" />
                        <div className="mt-2 h-8 bg-indigo-500/20 rounded-lg w-full" />
                        <div className="h-8 bg-slate-400/10 rounded-lg w-full" />
                        <div className="h-8 bg-slate-400/10 rounded-lg w-full" />
                      </div>
                      <div className="relative z-10 text-center px-4">
                        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-violet-400 font-[family-name:var(--font-display)]">
                          S/500
                        </p>
                        <p className="text-xs text-slate-500 mt-1">precio de entrada 2026</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA row */}
                <div className="relative z-10 mt-6 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredPost.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs text-slate-500 bg-white/[0.03] border border-white/[0.06] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors shrink-0">
                    Leer artículo
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Other posts grid */}
      {otherPosts.length > 0 && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-6">
              Todos los artículos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="h-full p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <CategoryBadge category={post.category} />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white leading-snug mb-3 group-hover:text-indigo-100 transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          {post.readingTime} min
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.publishedAt)}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-all duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state when only featured post */}
      {otherPosts.length === 0 && allPosts.length > 0 && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 bg-white/[0.02] border border-white/[0.06] rounded-2xl text-center">
              <BookOpen className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400 text-sm">
                Más artículos en camino. Vuelve pronto.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-indigo-500/8 via-transparent to-violet-500/5 border border-indigo-500/15 rounded-3xl text-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-56 h-56 rounded-full bg-indigo-500/10 blur-[80px]" />
              <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-violet-500/10 blur-[60px]" />
            </div>
            <div className="relative z-10">
              <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
                ¿Listo para dar el siguiente paso?
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-4">
                Tu negocio merece una web que venda
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8">
                Aplica lo que aprendes aquí con una página web profesional. Cotización personalizada, gratis y en menos de 24 horas.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] transition-all duration-300"
              >
                Solicitar Cotización Gratis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Blog — Web Para Tu Negocio',
            description:
              'Guías de diseño web, SEO y marketing digital para negocios en Perú.',
            url: 'https://webparatunegocio.pe/blog',
            publisher: {
              '@type': 'Organization',
              name: 'Web Para Tu Negocio',
              url: 'https://webparatunegocio.pe',
              logo: { '@type': 'ImageObject', url: 'https://webparatunegocio.pe/logo.png' },
            },
          }),
        }}
      />
    </>
  );
}
