import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/accordion";
import { Icon } from "@/components/icons";
import {
  Badge,
  ButtonLink,
  CtaBand,
  JsonLd,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { LeadForm } from "@/components/lead-form";
import { getService, services } from "@/lib/services";
import { breadcrumbSchema, faqPageSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return pageMetadata({
      title: "Tratamento não encontrado",
      description: "Página não encontrada.",
      path: `/servicos/${slug}`,
      noIndex: true,
    });
  }
  return pageMetadata({
    title: `${service.shortName} em Maringá`,
    description: `${service.short} Atendimento na Zona 2, em Maringá, com orçamento por escrito e resposta em até 1 dia útil.`,
    path: `/servicos/${service.slug}`,
    keywords: [
      `${service.shortName.toLowerCase()} em Maringá`,
      `${service.name.toLowerCase()} Maringá`,
      "clínica odontológica Zona 2 Maringá",
    ],
    image: service.image ?? "/images/hero-clinica.jpg",
  });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug).slice(0, 4);
  const breadcrumbs = [
    { label: "Serviços", href: "/servicos" },
    { label: service.shortName, href: `/servicos/${service.slug}` },
  ];
  const whatsappHref = whatsappLink(
    `Olá! Vim pelo site e gostaria de informações sobre ${service.name}.`,
  );

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={`${service.name} em Maringá`}
        description={service.short}
        breadcrumbs={[{ label: "Serviços", href: "/servicos" }, { label: service.shortName }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#orcamento-servico" variant="accent" icon="arrow">
            Pedir orçamento
          </ButtonLink>
          <ButtonLink
            href={whatsappHref}
            variant="ghost"
            icon="whatsapp"
            iconPosition="left"
            external
          >
            Falar no WhatsApp
          </ButtonLink>
        </div>
      </PageHero>

      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14 lg:py-16">
        <article>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="brand" icon={service.icon}>
              {service.category}
            </Badge>
            <Badge tone="outline" icon="clock">
              {service.timing.split(".")[0]}.
            </Badge>
          </div>

          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">{service.intro}</p>

          {service.image ? (
            <figure className="mt-7 overflow-hidden rounded-2xl border border-mist-dark">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={service.image}
                  alt={service.imageAlt ?? service.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                />
              </div>
              <figcaption className="bg-white px-4 py-2.5 text-xs text-ink-soft">
                {service.imageAlt ?? service.name}
              </figcaption>
            </figure>
          ) : null}

          <section className="mt-9" aria-labelledby="para-quem">
            <h2 id="para-quem" className="text-[22px] font-extrabold text-brand-950">
              Para quem é indicado
            </h2>
            <ul className="mt-4 grid gap-2.5">
              {service.forWhom.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <Icon name="check" size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-7 rounded-2xl border border-brand-100 bg-brand-50 p-5">
            <h2 className="text-[17px] font-bold text-brand-950">O que isso resolve</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-brand-900">{service.resolves}</p>
          </div>

          <section className="mt-9" aria-labelledby="incluso">
            <h2 id="incluso" className="text-[22px] font-extrabold text-brand-950">
              O que está incluso no atendimento
            </h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {service.included.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-mist-dark bg-white p-3.5 text-[14px] leading-relaxed text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-9 grid gap-4 sm:grid-cols-2" aria-labelledby="prazo-valor">
            <div className="rounded-2xl border border-mist-dark bg-white p-5">
              <h2 id="prazo-valor" className="flex items-center gap-2 text-[16px] font-bold text-brand-950">
                <Icon name="clock" size={19} className="text-brand-600" />
                Tempo médio e o que depende de você
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{service.timing}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                Para o atendimento render, chegue no horário com documento, informe
                medicamentos em uso e traga exames recentes que já possua.
              </p>
            </div>
            <div className="rounded-2xl border border-mist-dark bg-white p-5">
              <h2 className="flex items-center gap-2 text-[16px] font-bold text-brand-950">
                <Icon name="document" size={19} className="text-brand-600" />
                O que define o valor
              </h2>
              <ul className="mt-2 grid gap-1.5">
                {service.priceFactors.map((factor) => (
                  <li key={factor} className="flex items-start gap-2 text-[13.5px] text-ink-soft">
                    <Icon name="check" size={14} className="mt-1 shrink-0 text-brand-600" />
                    {factor}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-10" aria-labelledby="faq-servico">
            <h2 id="faq-servico" className="text-[22px] font-extrabold text-brand-950">
              Perguntas frequentes sobre {service.shortName.toLowerCase()}
            </h2>
            <div className="mt-4">
              <Accordion items={service.faqs} idPrefix={`faq-${service.slug}`} />
            </div>
          </section>

          <p className="mt-6 rounded-xl border border-mist-dark bg-mist p-4 text-[12.5px] leading-relaxed text-ink-soft">
            Conteúdo informativo, sem promessa de resultado. A indicação de qualquer
            tratamento depende de avaliação presencial. Valores e prazos são informados por
            escrito no orçamento.
          </p>

          <section id="orcamento-servico" className="mt-10 scroll-mt-24">
            <SectionHeading
              eyebrow="Orçamento"
              title={`Pedir orçamento de ${service.shortName.toLowerCase()}`}
              description="Preencha os dados e a equipe responde em até 1 dia útil. O tratamento já vem selecionado."
              as="h2"
            />
            <div className="mt-5">
              <LeadForm
                sourcePage={`/servicos/${service.slug}`}
                defaultService={
                  [
                    "Avaliação odontológica",
                    "Limpeza e profilaxia",
                    "Restauração",
                    "Tratamento de canal",
                    "Extração ou cirurgia",
                    "Implante dentário",
                    "Coroa ou prótese",
                    "Clareamento dental",
                    "Ortodontia / alinhadores",
                    "Odontopediatria",
                    "Urgência odontológica",
                    "Convênio / atendimento para empresas",
                  ][services.findIndex((item) => item.slug === service.slug)] ?? ""
                }
              />
            </div>
          </section>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-mist-dark bg-white p-6">
            <p className="eyebrow">Fale com a clínica</p>
            <h2 className="mt-2 text-[20px] font-extrabold leading-snug text-brand-950">
              Precisa de {service.shortName.toLowerCase()}?
            </h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
              Respondemos em até 1 dia útil com o próxima passo do seu caso.
            </p>
            <div className="mt-4 grid gap-2">
              <ButtonLink href={whatsappHref} variant="whatsapp" icon="whatsapp" iconPosition="left" external>
                WhatsApp {site.phoneDisplay}
              </ButtonLink>
              <ButtonLink href={site.phoneTel} variant="secondary" icon="phone" iconPosition="left">
                Ligar para a clínica
              </ButtonLink>
            </div>
            <dl className="mt-5 grid gap-3 border-t border-mist-dark pt-4 text-[13px]">
              <div>
                <dt className="font-semibold text-brand-950">Endereço</dt>
                <dd className="mt-0.5 text-ink-soft">
                  {site.street}, {site.neighborhood}
                  <br />
                  {site.city}/{site.state}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-950">Horário</dt>
                <dd className="mt-0.5 text-ink-soft">{site.hoursLabel}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-4 rounded-2xl border border-mist-dark bg-mist p-6">
            <h2 className="text-[15px] font-bold text-brand-950">Outros tratamentos</h2>
            <ul className="mt-3 grid gap-2">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/servicos/${item.slug}`}
                    className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-2.5 text-[13.5px] font-medium text-brand-900 transition-colors hover:bg-brand-50"
                  >
                    {item.shortName}
                    <Icon name="arrow" size={14} className="text-brand-500" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/servicos"
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-700 hover:underline"
            >
              Ver todos os tratamentos
              <Icon name="arrow" size={14} />
            </Link>
          </div>
        </aside>
      </div>

      <CtaBand
        title="Avaliação com plano por escrito"
        description="Você sai da consulta sabendo o que precisa ser feito, o que pode esperar e quanto custa cada etapa."
        whatsappHref={whatsappHref}
        note={`${site.street}, ${site.neighborhood} · ${site.city}/${site.state}`}
      />

      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema(breadcrumbs),
          faqPageSchema(service.faqs),
        ]}
      />
    </>
  );
}
