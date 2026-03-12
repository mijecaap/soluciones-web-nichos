"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
}

export function BlogTOC({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const headings = items.map((item) => document.getElementById(item.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    headings.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`group flex items-center gap-2.5 py-1.5 px-3 rounded-lg text-sm transition-all duration-200 ${
            activeId === item.id
              ? 'text-indigo-400 bg-indigo-500/8 font-medium'
              : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]'
          }`}
        >
          <ChevronRight
            className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
              activeId === item.id ? 'text-indigo-400' : 'text-slate-600 group-hover:text-slate-400'
            }`}
          />
          {item.title}
        </a>
      ))}
    </nav>
  );
}

export function BlogSidebarLinks() {
  return (
    <div className="space-y-2">
      <Link href="/cuanto-cuesta-pagina-web" className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors group">
        <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400" />
        Compara nuestros planes
      </Link>
      <Link href="/diseno-paginas-web" className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors group">
        <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400" />
        Diseño de páginas web
      </Link>
      <Link href="/paginas-web-lima" className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors group">
        <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400" />
        Páginas web en Lima
      </Link>
    </div>
  );
}
