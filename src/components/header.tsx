"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Icon } from "@/components/icons";
import { buttonClass } from "@/components/ui";
import { site, whatsappForPath } from "@/lib/site";

const nav = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Casos", href: "/casos" },
  { label: "Como funciona", href: "/como-funciona" },
  { label: "Sobre", href: "/sobre" },
  { label: "Galeria", href: "/galeria" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

const extraNav = [
  { label: "Depoimentos", href: "/depoimentos" },
  { label: "Perguntas frequentes", href: "/faq" },
  { label: "Política de Privacidade", href: "/privacidade" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-mist-dark/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container-page flex h-16 items-center justify-between gap-3 lg:h-20">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`${item.href === "/blog" ? "hidden xl:inline-flex " : ""}inline-flex items-center whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors xl:px-3 xl:text-[13.5px] ${
                      active
                        ? "bg-brand-50 text-brand-800"
                        : "text-ink-soft hover:bg-mist hover:text-brand-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneTel}
            className="hidden items-center gap-2 rounded-lg px-2 py-2 text-[13.5px] font-semibold text-brand-900 transition-colors hover:bg-brand-50 xl:inline-flex"
          >
            <Icon name="phone" size={16} className="text-brand-600" />
            {site.phoneDisplay}
          </a>
          <Link href="/contato" className={`${buttonClass("primary", "sm")} hidden sm:inline-flex`}>
            Pedir orçamento
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-11 w-11 place-items-center rounded-lg border border-mist-dark text-brand-900 transition-colors hover:bg-mist lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-mist-dark bg-white lg:hidden"
      >
        <div className="container-page max-h-[calc(100dvh-4rem)] overflow-y-auto py-4">
          <nav aria-label="Navegação principal no celular">
            <ul className="grid gap-1">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between rounded-lg px-3 py-3 text-[15px] font-medium ${
                        active ? "bg-brand-50 text-brand-800" : "text-ink hover:bg-mist"
                      }`}
                    >
                      {item.label}
                      <Icon name="arrow" size={16} className="opacity-50" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-3 border-t border-mist-dark pt-3">
            <ul className="grid gap-1">
              {extraNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:bg-mist"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 grid gap-2 pb-2">
            <Link href="/contato" className={buttonClass("primary", "md")}>
              Pedir orçamento
            </Link>
            <a
              href={whatsappForPath(pathname)}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("whatsapp", "md")}
            >
              <Icon name="whatsapp" size={18} />
              WhatsApp {site.phoneDisplay}
            </a>
            <div className="mt-2 grid gap-1 text-xs text-ink-soft">
              <p className="font-semibold text-brand-900">{site.fullAddress}</p>
              <p>Segunda a sexta, 8h–12h e 14h–18h</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
