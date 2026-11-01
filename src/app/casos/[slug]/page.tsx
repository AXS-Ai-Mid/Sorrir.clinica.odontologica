import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { Badge, ButtonLink, CtaBand, JsonLd, PageHero } from "@/components/ui";
import { cases, getCase } from "@/lib/cases";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) {
    return pageMetadata({
      title: "Caso não encontrado",
      description: "Página não encontrada.",
      path: `/casos/${slug}`,
      noIndex: true,
    });
  }
  return pageMetadata({
    title: item.title,
    description: item.summary,
    path: `/casos/${item.slug}`,
  });
}

export default async function CaseDetailPage({ params }: Params) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  const others = cases.filter((entry) => entry.slug !== item.slug).slice(0, 3);
  const breadcrumbs = [
    { label: "Casos e resultados", href: "/casos" },
    { label: item.tag, href: `/casos/${item.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={item.category}
        title={item.title}
        description={item.summary}
        breadcrumbs={[{ label: "Casos e resultados", href: "/casos" }, { label: item.tag }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            href={whatsappLink(
              `Olá! Vi o protocolo "${item.title}" no site e gostaria de avaliar o meu caso.`,
            )}
            variant="accent"
            icon="whatsapp"
            iconPosition="left"
            external
          >
            Falar sobre um caso parecido
          </ButtonLink>
          <ButtonLink href="/casos" variant="ghost" icon="arrowLeft" iconPosition="left">
            Voltar aos casos
          </ButtonLink>
        </div>
      </PageHero>

      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14 lg:py-16">
        <article>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-mist-dark bg-white p-5">
              <h2 className="text-[13px] font-semibold uppercase tracking-wide text-brand-700">
                Contexto
              </h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{item.context}</p>
            </div>
            <div className="rounded-2xl border border-mist-dark bg-white p-5">
              <h2 className="text-[13px] font-semibold uppercase tracking-wide text-brand-700">
                Desafio
              </h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{item.challenge}</p>
            </div>
          </div>

          <section className="mt-8" aria-labelledby="conduta">
            <h2 id="conduta" className="text-[22px] font-extrabold text-brand-950">
              Conduta adotada
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">{item.approach}</p>
          </section>

          <section className="mt-8" aria-labelledby="etapas">
            <h2 id="etapas" className="text-[22px] font-extrabold text-brand-950">
              Etapas do atendimento
            </h2>
            <ol className="mt-4 grid gap-3">
              {item.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-xl border border-mist-dark bg-white p-4"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-700 text-[13px] font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-brand-950">{step.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-8" aria-labelledby="ficha">
            <h2 id="ficha" className="text-[22px] font-extrabold text-brand-950">
              Ficha técnica
            </h2>
            <dl className="mt-4 overflow-hidden rounded-xl border border-mist-dark">
              {item.technical.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid gap-1 px-4 py-3 sm:grid-cols-[0.8fr_1.2fr] ${
                    index % 2 === 0 ? "bg-mist" : "bg-white"
                  }`}
                >
                  <dt className="text-[13px] font-semibold text-brand-900">{row.label}</dt>
                  <dd className="text-[13.5px] text-ink-soft">{row.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-8" aria-labelledby="cuidados">
            <h2 id="cuidados" className="text-[22px] font-extrabold text-brand-950">
              Cuidados e acompanhamento
            </h2>
            <ul className="mt-4 grid gap-2.5">
              {item.care.map((care) => (
                <li key={care} className="flex items-start gap-3 text-[14.5px] text-ink-soft">
                  <Icon name="check" size={16} className="mt-1 shrink-0 text-brand-600" />
                  {care}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h2 className="flex items-center gap-2 text-[15px] font-bold text-amber-950">
              <Icon name="alert" size={18} />
              Leia antes de comparar
            </h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-amber-900">{item.disclaimer}</p>
          </div>

          <section className="mt-9" aria-labelledby="depoimento-pendente">
            <h2 id="depoimento-pendente" className="text-[22px] font-extrabold text-brand-950">
              Depoimento do paciente
            </h2>
            <div className="mt-3 rounded-2xl border border-dashed border-brand-200 bg-mist p-5">
              <p className="text-[14px] leading-relaxed text-ink-soft">
                Este espaço é reservado ao relato do paciente com nome, cidade e serviço
                contratado. Publicamos apenas com autorização por escrito. Enquanto isso,
                você pode ler as avaliações públicas no perfil da clínica no Google.
              </p>
              <ButtonLink
                href={site.mapsLink}
                external
                variant="secondary"
                size="sm"
                icon="star"
                iconPosition="left"
                className="mt-4"
              >
                Ver avaliações no Google
              </ButtonLink>
            </div>
          </section>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-brand-900 p-6 text-white">
            <Badge tone="light" icon={item.category === "Urgência" ? "alert" : "scan"}>
              {item.tag}
            </Badge>
            <h2 className="mt-3 text-[20px] font-extrabold !text-white">
              Seu caso pode ser diferente
            </h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-brand-100">
              Cada pessoa tem uma condição clínica. O protocolo acima orienta, mas não
              substitui a avaliação presencial.
            </p>
            <div className="mt-4 grid gap-2">
              <ButtonLink href="/contato" variant="accent" size="sm" icon="arrow">
                Agendar avaliação
              </ButtonLink>
              <ButtonLink
                href={whatsappLink(
                  `Olá! Vi o caso "${item.title}" no site e gostaria de agendar uma avaliação.`,
                )}
                variant="ghost"
                size="sm"
                icon="whatsapp"
                iconPosition="left"
                external
              >
                WhatsApp
              </ButtonLink>
            </div>
            <p className="mt-4 text-[12px] leading-relaxed text-brand-200">
              {site.fullAddress}
              <br />
              {site.hoursLabel}
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-mist-dark bg-white p-6">
            <h2 className="text-[15px] font-bold text-brand-950">Outros protocolos</h2>
            <ul className="mt-3 grid gap-2">
              {others.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    href={`/casos/${entry.slug}`}
                    className="flex items-center justify-between gap-2 rounded-lg bg-mist px-3 py-2.5 text-[13px] font-medium text-brand-900 transition-colors hover:bg-brand-50"
                  >
                    {entry.tag}
                    <Icon name="arrow" size={14} className="text-brand-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <CtaBand
        title="Vamos avaliar o seu caso"
        description="A avaliação indica o que pode ser feito, com etapas, valores e prazos por escrito."
        whatsappHref={whatsappLink(
          `Olá! Vi o protocolo "${item.title}" no site e gostaria de agendar uma avaliação.`,
        )}
      />

      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: item.title,
            description: item.summary,
            url: `${site.url}/casos/${item.slug}`,
            inLanguage: "pt-BR",
            about: { "@id": `${site.url}/#clinica` },
          },
        ]}
      />
    </>
  );
}
