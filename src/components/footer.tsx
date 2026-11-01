import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import type { Service } from "@/lib/services";
import { ButtonLink } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/logo";

export function Footer({ services }: { services: Service[] }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-8 lg:py-16">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-200">
            Clínica odontológica em Maringá com avaliação clara, orçamento por
            escrito e acompanhamento de verdade.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Sorrir Clínica Odontológica"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-brand-100 transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name="instagram" size={18} />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Sorrir Clínica Odontológica"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-brand-100 transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name="facebook" size={18} />
            </a>
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil da clínica no Google Maps"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-brand-100 transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name="pin" size={18} />
            </a>
            <a
              href={site.dentmap}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil da clínica no DentMap"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-brand-100 transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name="external" size={18} />
            </a>
          </div>
        </div>

        <nav aria-label="Serviços no rodapé">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
            Serviços
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="text-brand-200 transition-colors hover:text-white hover:underline"
                >
                  {service.shortName}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/servicos"
                className="font-semibold text-accent transition-colors hover:text-white"
              >
                Ver todos os tratamentos
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Institucional">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
            A clínica
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { label: "Como funciona", href: "/como-funciona" },
              { label: "Sobre a Sorrir", href: "/sobre" },
              { label: "Casos e resultados", href: "/casos" },
              { label: "Galeria", href: "/galeria" },
              { label: "Depoimentos", href: "/depoimentos" },
              { label: "Perguntas frequentes", href: "/faq" },
              { label: "Blog e dicas", href: "/blog" },
              { label: "Política de Privacidade", href: "/privacidade" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-brand-200 transition-colors hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
            Contato e endereço
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-brand-200">
            <li className="flex gap-2.5">
              <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-accent" />
              <address className="not-italic leading-relaxed">
                {site.street}, {site.neighborhood}
                <br />
                {site.city}/{site.state} · CEP {site.postalCode}
              </address>
            </li>
            <li className="flex gap-2.5">
              <Icon name="whatsapp" size={18} className="mt-0.5 shrink-0 text-accent" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Icon name="phone" size={18} className="mt-0.5 shrink-0 text-accent" />
              <a href={site.phoneTel} className="hover:text-white hover:underline">
                Ligar {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-accent" />
              <span className="leading-relaxed">
                Segunda a sexta
                <br />
                8h–12h e 14h–18h
              </span>
            </li>
          </ul>
          <ButtonLink
            href={site.mapsRoute}
            external
            variant="ghost"
            size="sm"
            icon="pin"
            iconPosition="left"
            className="mt-5"
          >
            Traçar rota
          </ButtonLink>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacidade" className="hover:text-white hover:underline">
              Política de Privacidade
            </Link>
            <a
              href={site.agendarConsulta}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              Perfil no agendarconsulta.com
            </a>
            <a
              href={site.sindicatoBancarios}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              Convênio Sindicato dos Bancários
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
