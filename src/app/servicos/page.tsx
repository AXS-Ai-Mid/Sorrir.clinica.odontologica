import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/accordion";
import { Icon } from "@/components/icons";
import { Badge, Breadcrumbs, ButtonLink, CtaBand, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { generalFaqs } from "@/lib/faqs";
import { services } from "@/lib/services";
import { breadcrumbSchema, faqPageSchema, pageMetadata } from "@/lib/seo";
import { paymentMethods, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Tratamentos odontológicos em Maringá",
  description:
    "Avaliação, limpeza, restaurações, canal, implantes, coroas, clareamento, ortodontia, odontopediatria, urgência e convênios. Veja o que cada tratamento inclui.",
  path: "/servicos",
  keywords: [
    "tratamentos odontológicos em Maringá",
    "dentista Maringá Zona 2",
    "quanto custa tratamento dentário em Maringá",
    "implante dentário Maringá",
    "clareamento dental Maringá",
  ],
});

const breadcrumbs = [{ label: "Serviços", href: "/servicos" }];

const priceFactors = [
  {
    icon: "scan" as const,
    title: "O que o exame encontra",
    text: "Número de dentes envolvidos, profundidade da lesão e condição da gengiva mudam o escopo.",
  },
  {
    icon: "tool" as const,
    title: "Materiais e laboratório",
    text: "Resina, cerâmica, tipo de implante e peças de prótese têm custos diferentes.",
  },
  {
    icon: "calendar" as const,
    title: "Etapas e retornos",
    text: "Um plano em etapas tem valor por etapa, e não um número solto que não corresponde ao todo.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tratamentos"
        title="Tratamentos odontológicos com escopo e valor explicados"
        description="Todos os atendimentos da clínica, com o que está incluso, para quem serve, o que define o valor e o que pode mudar o prazo. Sem preço inventado e sem promessa vazia."
        breadcrumbs={[{ label: "Serviços" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contato" variant="accent" icon="arrow">
            Pedir orçamento
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(
              "Olá! Vim pelo site e gostaria de informações sobre os tratamentos da Sorrir.",
            )}
            variant="ghost"
            icon="whatsapp"
            iconPosition="left"
            external
          >
            Falar no WhatsApp
          </ButtonLink>
        </div>
      </PageHero>

      <section className="container-page py-12 lg:py-16">
        <SectionHeading
          eyebrow="Como cobramos"
          title="Não publicamos preço fixo. Explicamos o que define o valor."
          description="Odontologia não é produto de prateleira: duas pessoas com o mesmo dente podem precisar de tratamentos diferentes. O valor é informado por escrito depois da avaliação, sem compromisso de iniciar na hora."
        />
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {priceFactors.map((factor) => (
            <li key={factor.title} className="rounded-2xl border border-mist-dark bg-white p-5">
              <Icon name={factor.icon} size={22} className="text-brand-600" />
              <h3 className="mt-3 text-[16px] font-bold text-brand-950">{factor.title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{factor.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 rounded-xl border border-brand-100 bg-brand-50 p-4 text-[13.5px] leading-relaxed text-brand-900">
          <strong className="font-semibold">Transparência:</strong> a clínica ainda não
          autorizou a publicação de faixas de preço. Quando essa tabela for liberada, ela
          aparece aqui com as condições de cada etapa. Até lá, o orçamento por escrito é a
          referência.
        </p>
      </section>

      <section className="bg-mist py-12 lg:py-16" aria-labelledby="lista-tratamentos">
        <div className="container-page">
          <SectionHeading
            id="lista-tratamentos"
            eyebrow="Catálogo de atendimentos"
            title="Todos os tratamentos da clínica"
            description="Clique no tratamento para ver indicação, o que está incluso, tempo médio e perguntas frequentes."
          />
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug}>
                <article className="group flex h-full flex-col rounded-2xl border border-white bg-white p-6 shadow-[0_1px_2px_rgba(11,27,51,0.04)] transition-shadow hover:shadow-[0_20px_44px_-30px_rgba(11,27,51,0.4)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                      <Icon name={service.icon} size={22} />
                    </span>
                    <Badge tone="outline">{service.category}</Badge>
                  </div>
                  <h3 className="mt-4 text-[16.5px] font-bold leading-snug text-brand-950">
                    <Link href={`/servicos/${service.slug}`} className="hover:text-brand-700">
                      {service.name}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-soft">
                    {service.short}
                  </p>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-700 hover:text-brand-900"
                  >
                    Ver detalhes e valores
                    <Icon name="arrow" size={15} />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Pagamento"
              title="Formas de pagamento aceitas"
              description="As condições de parcelamento são descritas no orçamento, para você comparar o valor total e não só a parcela."
            />
            <ul className="mt-6 grid gap-2.5">
              {paymentMethods.map((method) => (
                <li key={method} className="flex items-start gap-2.5 text-[14.5px] text-ink-soft">
                  <Icon name="creditCard" size={18} className="mt-0.5 shrink-0 text-brand-600" />
                  {method}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-mist-dark bg-mist p-4 text-[13px] leading-relaxed text-ink-soft">
              Atendemos pessoas físicas, empresas, órgãos públicos e pacientes de convênios
              credenciados.{" "}
              <Link
                href="/servicos/atendimento-para-empresas-e-convenios"
                className="font-semibold text-brand-700 underline"
              >
                Ver condições para empresas e convênios
              </Link>
              .
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Dúvidas gerais"
              title="Perguntas que recebemos antes do orçamento"
              as="h3"
            />
            <div className="mt-6">
              <Accordion items={generalFaqs.slice(0, 7)} idPrefix="servicos-faq" />
            </div>
            <div className="mt-5">
              <ButtonLink href="/faq" variant="secondary" size="sm" icon="arrow">
                Ver todas as perguntas frequentes
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <div className="container-page pb-4">
        <Breadcrumbs items={breadcrumbs} />
        <p className="mt-3 text-xs leading-relaxed text-ink-soft">
          Conteúdo informativo. Nenhum tratamento é iniciado sem avaliação presencial e
          consentimento. Resultados variam conforme o caso. Endereço: {site.fullAddress}.
        </p>
      </div>

      <CtaBand
        title="Não sabe qual tratamento precisa?"
        description="Comece pela avaliação. Explicamos o que está acontecendo, o que pode esperar e o que precisa ser tratado agora."
        whatsappHref={whatsappLink(
          "Olá! Vim pelo site e não sei qual tratamento preciso. Gostaria de agendar uma avaliação.",
        )}
        note="Resposta em até 1 dia útil pelos canais de contato do site."
      />

      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqPageSchema(generalFaqs.slice(0, 7)),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Tratamentos da Sorrir Clínica Odontológica",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.name,
              url: `${site.url}/servicos/${service.slug}`,
            })),
          },
        ]}
      />
    </>
  );
}
