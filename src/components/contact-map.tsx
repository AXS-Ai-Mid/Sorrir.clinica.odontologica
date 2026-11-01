import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui";
import { Icon } from "@/components/icons";

export function ContactMap({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-mist-dark bg-white ${className}`}>
      <iframe
        src={site.mapsEmbed}
        title="Mapa com a localização da Sorrir Clínica Odontológica na Av. Cerro Azul, 1028, Zona 2, Maringá"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-64 w-full border-0 sm:h-72"
      />
      <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-sm text-ink-soft">
          <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-brand-600" />
          <span>
            <strong className="font-semibold text-brand-950">{site.street}</strong> ·{" "}
            {site.neighborhood}, {site.city}/{site.state}
            <br />
            CEP {site.postalCode}
          </span>
        </p>
        <ButtonLink href={site.mapsRoute} external variant="secondary" size="sm" icon="pin" iconPosition="left">
          Traçar rota
        </ButtonLink>
      </div>
    </div>
  );
}
