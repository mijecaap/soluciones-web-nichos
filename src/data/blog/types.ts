export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading2'; text: string; id: string }
  | { type: 'heading3'; text: string; id?: string }
  | { type: 'list'; items: string[] }
  | { type: 'ordered-list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: (string | number)[][] }
  | { type: 'callout'; variant: 'info' | 'tip' | 'warning'; title: string; text: string }
  | { type: 'cta-box'; title: string; text: string; buttonText: string; buttonHref: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  keywords: string[];
  publishedAt: string; // YYYY-MM-DD
  updatedAt?: string;
  readingTime: number; // minutes
  featured: boolean;
  tocItems: { id: string; title: string }[];
  content: ContentBlock[];
}
