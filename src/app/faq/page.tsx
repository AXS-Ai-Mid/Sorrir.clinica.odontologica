import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/accordion";
import { Icon } from "@/components/icons";
import { ButtonLink, CtaBand, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { generalFaqs } from "@/lib/faqs";
import { breadcrumbSchema, faqPageSchema, pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Perguntas frequentes",
  description:
    "Quanto custa, como pedir orçamento, prazo de atendimento, formas de pagamento, nota fiscal, convênios e urgência: as dúvidas mais comuns respondidas.",
  path: "/faq",
  keywords: [
    "quanto custa dentista em Maringá",
    "orçamento odontológico Maringá",
    "horário de funcionamento clínica odontológica Maringá",
  ],
});

const topics = [
  { label: "Avaliação odontológica", href: "/servicos/avaliacao-odontologica" },
  { label: "Implantes", href: "/servicos/implantes-dentarios" },
  { label: "Clareamento", href: "/servicos/clareamento-dental" },
  { label: "Ortodontia", href: "/servicos/ortodontia-e-alinhadores" },
  { label: "Urgência", href: "/servicos/urgencia-odontologica" },
  { label: "Empresas e convênios", href: "/servicos/atendimento-para-empresas-e-convenios" },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Perguntas frequentes"
        title="Dúvidas que aparecem antes do primeiro contato"
        description="Respondemos do jeito que a pergunta chega no WhatsApp: quanto custa, dói, em quanto tempo consigo atendimento e o que está incluído no orçamento."
        breadcrumbs={[{ label: "Perguntas frequentes" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            href={whatsappLink("Olá! Tenho uma dúvida sobre atendimento na Sorrir.")}
            variant="accent"
            icon="whatsapp"
            iconPosition="left"
            external
          >
            Perguntar no WhatsApp
          </ButtonLink>
          <ButtonLink href="/contato" variant="ghost" icon="arrow">
            Enviar pedido de orçamento
          </ButtonLink>
        </div>
      </PageHero>

      <section className="container-page py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="12 perguntas"
              title="Atendimento, valores, prazos e documentação"
              as="h2"
            />
            <div className="mt-6">
              <Accordion items={generalFaqs} idPrefix="faq-geral" />
            </div>
            <div className="mt-6 rounded-xl border border-mist-dark bg-mist p-4 text-[13px] leading-relaxed text-ink-soft">
              Não encontrou a resposta? Escreva para a equipe no WhatsApp{" "}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-700 underline"
              >
                {site.phoneDisplay}
              </a>{" "}
              ou ligue nos horários de atendimento. Respondemos em até 1 dia útil.
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-mist-dark bg-white p-6">
              <h2 className="text-[15px] font-bold text-brand-950">Dúvidas por tratamento</h2>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                Cada página de tratamento tem perguntas específicas sobre indicação, dor,
                duração e valores.
              </p>
              <ul className="mt-4 grid gap-2">
                {topics.map((topic) => (
                  <li key={topic.href}>
                    <Link
                      href={topic.href}
                      className="flex items-center justify-between gap-2 rounded-lg bg-mist px-3 py-2.5 text-[13.5px] font-medium text-brand-900 transition-colors hover:bg-brand-50"
                    >
                      {topic.label}
                      <Icon name="arrow" size={14} className="text-brand-500" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 rounded-2xl bg-brand-900 p-6 text-white">
              <h2 className="text-[16px] font-extrabold !text-white">Horário de atendimento</h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-brand-100">
                Segunda a sexta, das 8h às 12h e das 14h às 18h.
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-brand-200">
                {site.street}, {site.neighborhood}
                <br />
                {site.city}/{site.state}
              </p>
              <ButtonLink
                href="/contato"
                variant="accent"
                size="sm"
                icon="pin"
                iconPosition="left"
                className="mt-4"
              >
                Ver mapa e como chegar
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title="Podemos responder sua dúvida específica"
        description="Conte o que você precisa e receba orientação sobre o próximo passo, sem compromisso de agendar."
        whatsappHref={whatsappLink("Olá! Tenho uma dúvida específica sobre o meu caso.")}
      />

      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Perguntas frequentes", href: "/faq" }]),
          faqPageSchema(generalFaqs),
        ]}
      />
    </>
  );
}
