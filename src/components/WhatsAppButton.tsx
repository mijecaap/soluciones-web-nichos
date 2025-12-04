"use client";

import { trackWhatsAppClick } from "@/lib/analytics";

interface WhatsAppButtonProps {
  location: 'cta_section' | 'contact_page' | 'footer' | 'niche_page';
  niche?: string;
  className?: string;
  children: React.ReactNode;
  whatsappNumber?: string;
  message?: string;
}

const defaultWhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51999999999";

export default function WhatsAppButton({
  location,
  niche,
  className = "",
  children,
  whatsappNumber = defaultWhatsappNumber,
  message = "Hola, me interesa una página web para mi negocio",
}: WhatsAppButtonProps) {
  const handleClick = () => {
    trackWhatsAppClick({ location, niche });
  };

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
