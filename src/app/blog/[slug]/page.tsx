import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allPosts, getPostBySlug, getRecentPosts } from '@/data/blog/posts';
import type { ContentBlock } from '@/data/blog/types';
import { BlogTOC, BlogSidebarLinks } from '@/components/BlogTOC';
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  ChevronRight,
} from 'lucide-react';

// ─── SSG ─────────────────────────────────────────────────────────

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://webparatunegocio.pe/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://webparatunegocio.pe/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ['Web Para Tu Negocio'],
      tags: post.tags,
    },
  };
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// ─── Content Renderers ───────────────────────────────────────────

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          key={index}
          className="text-slate-300 leading-relaxed text-base sm:text-[1.05rem]"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );

    case 'heading2':
      return (
        <h2
          key={index}
          id={block.id}
          className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white mt-12 mb-4 scroll-mt-24"
        >
          {block.text}
        </h2>
      );

    case 'heading3':
      return (
        <h3
          key={index}
          id={block.id}
          className="font-[family-name:var(--font-display)] text-xl font-bold text-white mt-8 mb-3 scroll-mt-24"
        >
          {block.text}
        </h3>
      );

    case 'list':
      return (
        <ul key={index} className="space-y-2.5 my-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'ordered-list':
      return (
        <ol key={index} className="space-y-4 my-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-400 text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );

    case 'table':
      return (
        <div key={index} className="my-2 overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/[0.04]">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05]">
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="hover:bg-white/[0.03] transition-colors"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3 leading-snug ${
                        ci === 0
                          ? 'text-white font-medium'
                          : ci === 1
                          ? 'text-indigo-400 font-semibold whitespace-nowrap'
                          : 'text-slate-400'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'callout': {
      const calloutStyles = {
        info: {
          border: 'border-indigo-500/20',
          bg: 'bg-indigo-500/5',
          icon: <Info className="w-5 h-5 text-indigo-400 flex-shrink-0" />,
          titleColor: 'text-indigo-300',
        },
        tip: {
          border: 'border-emerald-500/20',
          bg: 'bg-emerald-500/5',
          icon: <Lightbulb className="w-5 h-5 text-emerald-400 flex-shrink-0" />,
          titleColor: 'text-emerald-300',
        },
        warning: {
          border: 'border-amber-500/20',
          bg: 'bg-amber-500/5',
          icon: <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />,
          titleColor: 'text-amber-300',
        },
      };
      const style = calloutStyles[block.variant];
      return (
        <div
          key={index}
          className={`my-2 p-5 rounded-2xl border ${style.border} ${style.bg}`}
        >
          <div className="flex items-start gap-3">
            {style.icon}
            <div>
              <p className={`font-semibold text-sm mb-1 ${style.titleColor}`}>{block.title}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{block.text}</p>
            </div>
          </div>
        </div>
      );
    }

    case 'cta-box':
      return (
        <div
          key={index}
          className="my-4 p-8 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/8 border border-indigo-500/20 rounded-2xl text-center"
        >
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-3">
            {block.title}
          </h3>
          <p className="text-slate-400 text-sm mb-6">{block.text}</p>
          <Link
            href={block.buttonHref}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-7 py-3 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
          >
            {block.buttonText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      );

    default:
      return null;
  }
}

// ─── Article Page ────────────────────────────────────────────────

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRecentPosts(6).filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-1" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-indigo-400 transition-colors">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-400 truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Hero */}
      <section className="py-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-indigo-600/8 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar className="w-3 h-3" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock className="w-3 h-3" />
                {post.readingTime} min de lectura
              </div>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {post.title}
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Article body + TOC */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 xl:gap-16 items-start">

            {/* Main article content */}
            <article className="min-w-0 space-y-6">
              {post.content.map((block, i) => renderBlock(block, i))}

              {/* Tags footer */}
              <div className="mt-12 pt-8 border-t border-white/[0.06]">
                <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">Temas:</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-slate-400 bg-white/[0.03] border border-white/[0.06] rounded-full hover:text-slate-300 hover:bg-white/[0.05] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back to blog */}
              <div className="pt-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver al blog
                </Link>
              </div>
            </article>

            {/* Sidebar TOC (sticky on desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* TOC */}
                <div className="p-5 bg-white/[0.02] border border-white/[0.06] rounded-2xl">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Contenido
                  </p>
                  <BlogTOC items={post.tocItems} />
                </div>

                {/* CTA card */}
                <div className="p-5 bg-gradient-to-br from-indigo-500/8 to-violet-500/5 border border-indigo-500/15 rounded-2xl text-center">
                  <p className="font-[family-name:var(--font-display)] font-bold text-white text-sm mb-2">
                    ¿Listo para tener tu web?
                  </p>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Cotización personalizada, gratis y en 24 horas.
                  </p>
                  <Link
                    href="/contacto"
                    className="block w-full text-center py-2.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-full font-semibold text-sm hover:shadow-[0_0_16px_rgba(99,102,241,0.4)] transition-all duration-300"
                  >
                    Cotizar Gratis
                  </Link>
                </div>

                {/* Related internal links */}
                <div className="p-5 bg-white/[0.02] border border-white/[0.06] rounded-2xl">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    También te puede interesar
                  </p>
                  <BlogSidebarLinks />
                </div>
              </div>
            </aside>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-white/[0.06]">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white mb-8">
                Más artículos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`} className="group block">
                    <article className="h-full p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:border-indigo-500/25 hover:bg-white/[0.03] transition-all duration-300 flex flex-col">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 self-start mb-3">
                        {related.category}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-white leading-snug mb-2 group-hover:text-indigo-100 transition-colors flex-1">
                        {related.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
                        {related.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 group-hover:gap-2 transition-all">
                        Leer <ArrowRight className="w-3 h-3" />
                      </span>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            keywords: post.keywords.join(', '),
            datePublished: post.publishedAt,
            dateModified: post.updatedAt ?? post.publishedAt,
            author: {
              '@type': 'Organization',
              name: 'Web Para Tu Negocio',
              url: 'https://webparatunegocio.pe',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Web Para Tu Negocio',
              logo: { '@type': 'ImageObject', url: 'https://webparatunegocio.pe/logo.png' },
            },
            mainEntityOfPage: `https://webparatunegocio.pe/blog/${slug}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://webparatunegocio.pe' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://webparatunegocio.pe/blog' },
              { '@type': 'ListItem', position: 3, name: post.title, item: `https://webparatunegocio.pe/blog/${slug}` },
            ],
          }),
        }}
      />
    </>
  );
}
