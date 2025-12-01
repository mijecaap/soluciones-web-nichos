export interface NicheData {
  slug: string;
  title: string;
  headline: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  category: "premium" | "economico";
  problems: {
    icon: string;
    title: string;
    description: string;
  }[];
  solutions: {
    icon: string;
    title: string;
    description: string;
    highlight?: string;
  }[];
  transformation: {
    before: {
      metric1: { label: string; value: string };
      metric2: { label: string; value: string };
      metric3: { label: string; value: string };
    };
    after: {
      metric1: { label: string; value: string; improvement: string };
      metric2: { label: string; value: string; improvement: string };
      metric3: { label: string; value: string; improvement: string };
    };
    roi: string;
  };
  pricing: {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    badge?: string;
  }[];
  maintenanceNote: string;
  checklist: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
  }[];
  gradientColors: string;
}
