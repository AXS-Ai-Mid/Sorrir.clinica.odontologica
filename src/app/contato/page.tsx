import type { Metadata } from "next";
import Link from "next/link";
import { ContactMap } from "@/components/contact-map";
import { Icon } from "@/components/icons";
import { LeadForm } from "@/components/lead-form";
import { Badge, ButtonLink, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from "@/lib/seo";
import { paymentMethods, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contato, endereço e horário",
  description:
    "Fale com a Sorrir Clínica Odontológica: WhatsApp (44) 98822-9844, Av. Cerro Azul, 1028, Zona 2, Maringá. Atendimento de segunda a sexta, 8h–12h e 14h–18h.",
  path: "/contato",
  keywords: [
    "dentista Zona 2 Maringá",
    "clínica odontológica perto de mim Maringá",
    "contato clínica odontológica Maringá",
  ],
});

const howToArrive = [
  {
    icon: "pin" as const,
    title: "Referência de endereço",
    text: "Estamos na Av. Cerro Azul, 1028, na Zona 2 — uma região central de Maringá, com acesso por avenidas principais e retorno próximo.",
  },
  {
    icon: "external" as const,
    title: "Como chegar",
    text: "Use o botão Traçar rota para abrir o trajeto no Google Maps a partir da sua localização. O ponto exato está no mapa desta página.",
  },
  {
    icon: "clock" as const,
    title: "Estacionamento e chegada",
    text: "Chegue com 10 minutos de antecedência para o cadastro. Se tiver dúvida sobre estacionamento na via, pergunte no WhatsApp antes da visita.",
  },
  {
    icon: "calendar" as const,
    title: "Prefere agendar antes?",
    text: "Envie o formulário ou chame no WhatsApp para reservar horário. Casos de dor são encaixados conforme a agenda do dia.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a clínica e peça seu orçamento"
        description="Atendimento direto com a equipe, de segunda a sexta. Respondemos pedidos do site e do WhatsApp em até 1 dia útil."
        breadcrumbs={[{ label: "Contato" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            href={whatsappLink(
              "Olá! Vim pelo site e gostaria de falar sobre um orçamento odontológico.",
            )}
            variant="accent"
            icon="whatsapp"
            iconPosition="left"
            external
          >
            WhatsApp {site.phoneDisplay}
          </ButtonLink>
          <ButtonLink href={site.phoneTel} variant="ghost" icon="phone" iconPosition="left">
            Ligar agora
          </ButtonLink>
        </div>
      </PageHero>

      <section className="container-page py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Formulário"
              title="Conte o que você precisa"
              description="Preencha nome, WhatsApp e o tratamento de interesse. Se preferir, escreva a sua mensagem — a equipe responde em até 1 dia útil."
            />
            <div className="mt-6">
              <LeadForm sourcePage="/contato" />
            </div>
          </div>

          <div className="grid content-start gap-4">
            <div className="rounded-2xl border border-mist-dark bg-white p-6">
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                Canais diretos
              </h2>
              <ul className="mt-4 grid gap-3">
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-mist-dark p-4 transition-colors hover:border-whats/40 hover:bg-whats/5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-whats text-white">
                      <Icon name="whatsapp" size={22} />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                        WhatsApp
                      </span>
                      <span className="block text-[16px] font-bold text-brand-950">
                        {site.phoneDisplay}
                      </span>
                      <span className="block text-[12px] text-ink-soft">
                        Resposta em até 1 dia útil
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.phoneTel}
                    className="flex items-center gap-3 rounded-xl border border-mist-dark p-4 transition-colors hover:border-brand-300 hover:bg-brand-50"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon name="phone" size={21} />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                        Telefone
                      </span>
                      <span className="block text-[16px] font-bold text-brand-950">
                        {site.phoneDisplay}
                      </span>
                      <span className="block text-[12px] text-ink-soft">
                        Segunda a sexta, 8h–12h e 14h–18h
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-mist-dark p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name="pin" size={21} />
                  </span>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                      Endereço
                    </span>
                    <address className="mt-0.5 text-[14.5px] font-semibold not-italic leading-relaxed text-brand-950">
                      {site.street}, {site.neighborhood}
                      <br />
                      {site.city}/{site.state} · CEP {site.postalCode}
                    </address>
                  </div>
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <ButtonLink href={site.instagram} external variant="secondary" size="sm" icon="instagram" iconPosition="left">
                  Instagram
                </ButtonLink>
                <ButtonLink href={site.facebook} external variant="secondary" size="sm" icon="facebook" iconPosition="left">
                  Facebook
                </ButtonLink>
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-ink-soft">
                A clínica ainda não divulgou um e-mail oficial. Até a definição, o WhatsApp é o
                canal de resposta mais rápido.
              </p>
            </div>

            <div className="rounded-2xl border border-mist-dark bg-white p-6">
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                Horário de atendimento
              </h2>
              <ul className="mt-3 divide-y divide-mist-dark">
                {site.hours.map((row) => (
                  <li key={row.day} className="flex items-center justify-between gap-3 py-2 text-[13.5px]">
                    <span className="font-medium text-brand-950">{row.day}</span>
                    <span
                      className={row.value === "Fechado" ? "text-ink-soft" : "font-semibold text-brand-800"}
                    >
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 rounded-lg bg-mist p-3 text-[12px] leading-relaxed text-ink-soft">
                Feriados: a clínica não atende em feriados nacionais e municipais. Não há
                plantão fora do horário informado. Em caso de urgência com febre ou inchaço
                extenso, procure um pronto atendimento médico-hospitalar.
              </p>
            </div>

            <div className="rounded-2xl border border-mist-dark bg-white p-6">
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                Pagamento
              </h2>
              <ul className="mt-3 grid gap-2">
                {paymentMethods.map((method) => (
                  <li key={method} className="flex items-start gap-2 text-[13px] text-ink-soft">
                    <Icon name="creditCard" size={16} className="mt-0.5 shrink-0 text-brand-600" />
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-12 lg:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Como chegar"
              title="Localização e chegada"
              description="A clínica fica na Av. Cerro Azul, 1028, Zona 2. Use o mapa para conferir o ponto exato e traçar a rota."
            />
            <ul className="mt-6 grid gap-3">
              {howToArrive.map((item) => (
                <li key={item.title} className="flex items-start gap-3 rounded-xl border border-white bg-white p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon name={item.icon} size={19} />
                  </span>
                  <div>
                    <h3 className="text-[14px] font-bold text-brand-950">{item.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ContactMap />
            <div className="mt-4 rounded-2xl border border-white bg-white p-5">
              <h2 className="text-[15px] font-bold text-brand-950">Atendimento a empresas</h2>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                Precisa organizar avaliações para um grupo de colaboradores? Montamos a proposta
                por escrito, com agenda e faturamento.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <ButtonLink
                  href="/servicos/atendimento-para-empresas-e-convenios"
                  variant="secondary"
                  size="sm"
                  icon="arrow"
                >
                  Ver condições
                </ButtonLink>
                <ButtonLink href={site.sindicatoBancarios} external variant="secondary" size="sm" icon="external">
                  Convênio Sindicato
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge tone="brand" icon="shield">
                  LGPD
                </Badge>
                <Badge tone="outline" icon="lock">
                  Consentimento obrigatório
                </Badge>
              </div>
              <h2 className="mt-3 text-[17px] font-extrabold text-brand-950">
                Seus dados são usados só para responder este contato
              </h2>
              <p className="mt-1.5 max-w-2xl text-[13.5px] leading-relaxed text-brand-900">
                Não vendemos e não compartilhamos dados de contato com terceiros para
                publicidade. Leia como tratamos as informações e como pedir a exclusão.
              </p>
            </div>
            <ButtonLink href="/privacidade" variant="primary" size="sm" icon="document" iconPosition="left">
              Política de Privacidade
            </ButtonLink>
          </div>
        </div>
        <p className="mt-4 text-[12px] leading-relaxed text-ink-soft">
          Este site não substitui atendimento de urgência. Em emergências, procure um serviço
          de pronto atendimento.{" "}
          <Link href="/faq" className="font-semibold text-brand-700 underline">
            Ver perguntas frequentes
          </Link>
          .
        </p>
      </section>

      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([{ label: "Contato", href: "/contato" }]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contato da Sorrir Clínica Odontológica",
            url: `${site.url}/contato`,
            inLanguage: "pt-BR",
          },
        ]}
      />
    </>
  );
}
