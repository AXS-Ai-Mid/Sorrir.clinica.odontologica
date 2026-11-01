import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/accordion";
import { Icon } from "@/components/icons";
import { ButtonLink, CtaBand, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { complianceItems, followUpChannels, processSteps } from "@/lib/company";
import { generalFaqs } from "@/lib/faqs";
import { breadcrumbSchema, faqPageSchema, pageMetadata } from "@/lib/seo";
import { paymentMethods, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Como funciona o atendimento",
  description:
    "As 5 etapas do atendimento na Sorrir: contato, avaliação, plano por escrito, execução e acompanhamento — com prazos, o que depende de você e documentação.",
  path: "/como-funciona",
  keywords: ["como funciona avaliação odontológica Maringá", "orçamento odontológico etapas"],
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Como funciona"
        title="Do primeiro contato ao acompanhamento, sem surpresa"
        description="Você sabe o que acontece em cada etapa, quanto tempo costuma levar e o que a clínica precisa de você. É assim que reduzimos a insegurança de contratar."
        breadcrumbs={[{ label: "Como funciona" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contato" variant="accent" icon="arrow">
            Começar pela avaliação
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(
              "Olá! Quero entender como funciona a avaliação e o orçamento na Sorrir.",
            )}
            variant="ghost"
            icon="whatsapp"
            iconPosition="left"
            external
          >
            Tirar uma dúvida no WhatsApp
          </ButtonLink>
        </div>
      </PageHero>

      <section className="container-page py-12 lg:py-16" aria-labelledby="linha-do-tempo">
        <SectionHeading
          id="linha-do-tempo"
          eyebrow="Linha do tempo"
          title="As 5 etapas do atendimento"
          description="Em cada card: o que a clínica faz, o que você precisa providenciar e o prazo médio, com o que costuma alterá-lo."
        />
        <ol className="mt-9 grid gap-4">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className="relative overflow-hidden rounded-2xl border border-mist-dark bg-white p-6 lg:p-7"
            >
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 bg-brand-700"
              />
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-8">
                <div className="flex items-center gap-4 lg:w-64 lg:shrink-0">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={step.icon} size={23} />
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[0.16em] text-brand-500">
                      Etapa {step.number}
                    </p>
                    <h2 className="mt-1 text-[17px] font-extrabold leading-snug text-brand-950">
                      {step.title}
                    </h2>
                  </div>
                </div>
                <div className="grid flex-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="text-[12px] font-semibold uppercase tracking-wide text-ink-soft">
                      O que acontece
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <div>
                      <h3 className="text-[12px] font-semibold uppercase tracking-wide text-ink-soft">
                        O que depende de você
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">
                        {step.clientAction}
                      </p>
                    </div>
                    <div className="rounded-lg bg-mist px-3 py-2.5">
                      <p className="flex items-start gap-2 text-[12.5px] font-medium text-brand-900">
                        <Icon name="clock" size={15} className="mt-0.5 shrink-0 text-brand-600" />
                        {step.timing}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {index === 4 ? null : (
                <span className="sr-only">Próxima etapa: {processSteps[index + 1]?.title}</span>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-mist py-12 lg:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Orçamento e pagamento"
              title="Como funciona a combinação de valores"
              description="O orçamento acompanha o plano clínico. Ele descreve cada etapa e o respectivo valor, para você comparar o total e não só a parcela."
            />
            <ul className="mt-6 grid gap-3">
              {[
                "Escopo descrito por etapa, com o que está incluído.",
                "Formas de pagamento e condições de parcelamento registradas.",
                "Validade da proposta e o que pode alterar o valor.",
                "Nenhuma etapa começa sem sua concordância registrada.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-ink-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-brand-700">
                    <Icon name="check" size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-7 text-[15px] font-bold text-brand-950">Formas de pagamento</h3>
            <ul className="mt-3 grid gap-2">
              {paymentMethods.map((method) => (
                <li key={method} className="flex items-start gap-2.5 text-[14px] text-ink-soft">
                  <Icon name="creditCard" size={17} className="mt-0.5 shrink-0 text-brand-600" />
                  {method}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Documentação"
              title="O que fica registrado"
              description="Contrato, prontuário, nota fiscal e garantia. Transparência de processo é o que diferencia um serviço profissional de um favor."
            />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {complianceItems.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-white bg-white p-4"
                >
                  <Icon name="document" size={18} className="text-brand-600" />
                  <h3 className="mt-2 text-[14px] font-bold text-brand-950">{item.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Acompanhamento"
              title="Como você acompanha o andamento"
              description="Não existe 'liga depois'. O contato é direto com a equipe que atende você."
            />
            <ul className="mt-6 grid gap-2.5">
              {followUpChannels.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-ink-soft">
                  <Icon name="whatsapp" size={17} className="mt-0.5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-brand-100 bg-brand-50 p-4 text-[13px] leading-relaxed text-brand-900">
              Endereço para retornos: {site.fullAddress}. Atendemos de segunda a sexta,
              das 8h às 12h e das 14h às 18h.{" "}
              <Link href="/contato" className="font-semibold underline">
                Ver mapa e como chegar
              </Link>
              .
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Dúvidas"
              title="Perguntas sobre o processo"
              as="h3"
            />
            <div className="mt-6">
              <Accordion
                items={[generalFaqs[0], generalFaqs[1], generalFaqs[2], generalFaqs[3], generalFaqs[6], generalFaqs[10]]}
                idPrefix="como-funciona-faq"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Comece pela avaliação"
        description="Você recebe o diagnóstico, as opções e o orçamento por escrito. Decidir depois, com calma, faz parte do processo."
        whatsappHref={whatsappLink(
          "Olá! Quero agendar uma avaliação na Sorrir e entender as etapas do atendimento.",
        )}
        note="Resposta em até 1 dia útil em dias úteis."
      />

      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Como funciona", href: "/como-funciona" }]),
          faqPageSchema([
            generalFaqs[0],
            generalFaqs[1],
            generalFaqs[2],
            generalFaqs[3],
            generalFaqs[6],
            generalFaqs[10],
          ]),
        ]}
      />
    </>
  );
}
