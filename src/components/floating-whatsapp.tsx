"use client";

import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons";
import { site, whatsappForPath } from "@/lib/site";

export function FloatingWhatsApp() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <a
      href={whatsappForPath(pathname)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-whats py-3 pl-3 pr-3 text-white shadow-[0_12px_28px_-10px_rgba(11,27,51,0.6)] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-900 sm:bottom-6 sm:right-6"
      aria-label={`Falar no WhatsApp com a ${site.name} — ${site.phoneDisplay}`}
    >
      <Icon name="whatsapp" size={26} />
      <span className="hidden pr-1 text-sm font-semibold sm:inline">
        Falar no WhatsApp
      </span>
      <span className="sr-only">Abre em uma nova aba</span>
    </a>
  );
}
