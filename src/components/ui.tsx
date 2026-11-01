import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/icons";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost" | "accent";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold leading-none transition-colors duration-200 focus-visible:outline-3 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 focus-visible:outline-brand-900 shadow-[0_8px_20px_-12px_rgba(0,66,170,0.8)]",
  secondary:
    "border border-brand-200 bg-white text-brand-800 hover:border-brand-300 hover:bg-brand-50",
  whatsapp: "bg-whats text-white hover:brightness-110 focus-visible:outline-whats",
  ghost:
    "border border-white/30 bg-white/5 text-white hover:bg-white/15 focus-visible:outline-white",
  accent: "bg-accent text-accent-ink hover:brightness-95 focus-visible:outline-white",
};

const sizes = {
  md: "min-h-12 px-5 text-[15px]",
  lg: "min-h-14 px-6 text-base",
  sm: "min-h-10 px-4 text-sm",
};

export function buttonClass(variant: Variant = "primary", size: keyof typeof sizes = "md") {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  icon?: IconName;
  iconPosition?: "left" | "right";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  external,
  className = "",
  ariaLabel,
  onClick,
}: ButtonLinkProps) {
  const content = (
    <>
      {icon && iconPosition === "left" ? <Icon name={icon} size={18} /> : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? <Icon name={icon} size={18} /> : null}
    </>
  );
  const classes = `${buttonClass(variant, size)} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {content}
    </Link>
  );
}

export function Badge({
  children,
  tone = "brand",
  icon,
}: {
  children: ReactNode;
  tone?: "brand" | "light" | "accent" | "outline";
  icon?: IconName;
}) {
  const tones = {
    brand: "bg-brand-50 text-brand-800 border border-brand-100",
    light: "bg-white/10 text-white border border-white/20",
    accent: "bg-accent text-accent-ink border border-accent",
    outline: "bg-white text-brand-800 border border-mist-dark",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {icon ? <Icon name={icon} size={14} /> : null}
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Tag = "h2",
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  id?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${
        tone === "dark" ? "text-white" : ""
      }`}
    >
      {eyebrow ? (
        <p className={`eyebrow ${tone === "dark" ? "!text-accent" : ""}`}>
          <span
            aria-hidden="true"
            className={`inline-block h-px w-6 ${tone === "dark" ? "bg-accent" : "bg-brand-500"}`}
          />
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className={`mt-3 text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold leading-[1.15] ${
          tone === "dark" ? "!text-white" : "text-brand-950"
        }`}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={`mt-4 text-[16px] leading-relaxed ${
            tone === "dark" ? "text-brand-100" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Card({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={`rounded-2xl border border-mist-dark bg-white p-6 shadow-[0_1px_2px_rgba(11,27,51,0.04)] transition-shadow duration-200 ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: { label: string; href?: string }[];
  tone?: "light" | "dark";
}) {
  return (
    <nav aria-label="Você está aqui">
      <ol
        className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] ${
          tone === "dark" ? "text-brand-200" : "text-ink-soft"
        }`}
      >
        <li>
          {tone === "dark" ? (
            <Link href="/" className="hover:text-white hover:underline">
              Home
            </Link>
          ) : (
            <Link href="/" className="hover:text-brand-700 hover:underline">
              Home
            </Link>
          )}
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <span aria-hidden="true" className="opacity-50">
                /
              </span>
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={tone === "dark" ? "hover:text-white hover:underline" : "hover:text-brand-700 hover:underline"}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={tone === "dark" ? "text-white" : "font-medium text-brand-900"}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(70% 120% at 15% 0%, rgba(0,97,255,0.55) 0%, rgba(0,66,170,0) 60%), radial-gradient(50% 80% at 95% 10%, rgba(0,253,255,0.18) 0%, rgba(0,66,170,0) 70%)",
        }}
      />
      <div className="container-page relative py-12 pt-8 lg:py-16">
        <Breadcrumbs items={breadcrumbs} tone="dark" />
        <div className="mt-6 max-w-3xl">
          {eyebrow ? <Badge tone="light">{eyebrow}</Badge> : null}
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.1rem)] font-extrabold leading-[1.08] !text-white">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-brand-100">
              {description}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  description,
  primaryHref = "/contato",
  primaryLabel = "Pedir orçamento",
  whatsappHref,
  note,
}: {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  whatsappHref: string;
  note?: string;
}) {
  return (
    <section className="container-page py-14 lg:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-brand-800 px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/15"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-accent/25"
        />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow !text-accent">Próximo passo</p>
            <h2 className="mt-3 text-[clamp(1.6rem,3.4vw,2.3rem)] font-extrabold !text-white">
              {title}
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-brand-100">{description}</p>
            {note ? <p className="mt-3 text-sm text-brand-200">{note}</p> : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <ButtonLink href={primaryHref} variant="accent" size="lg" icon="arrow">
              {primaryLabel}
            </ButtonLink>
            <ButtonLink
              href={whatsappHref}
              variant="ghost"
              size="lg"
              icon="whatsapp"
              iconPosition="left"
              external
            >
              Falar no WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Dados estruturados gerados no servidor a partir do conteúdo do site.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
