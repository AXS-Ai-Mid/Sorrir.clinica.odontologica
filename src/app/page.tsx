import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Accordion } from "@/components/accordion";
import { ContactMap } from "@/components/contact-map";
import { Icon, type IconName } from "@/components/icons";
import { LeadForm } from "@/components/lead-form";
import {
  Badge,
  ButtonLink,
  Card,
  JsonLd,
  SectionHeading,
} from "@/components/ui";
import { differentials, processSteps } from "@/lib/company";
import { homeFaqs } from "@/lib/faqs";
import { featuredServices } from "@/lib/services";
import { faqPageSchema, localBusinessSchema, pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Clínica odontológica na Zona 2 | Sorrir em Maringá",
  description:
    "Clínica odontológica em Maringá com avaliação clara, orçamento por escrito e resposta em até 1 dia útil. Prevenção, estética, reabilitação, empresas e convênios.",
  path: "/",
  keywords: [
    "clínica odontológica em Maringá",
    "dentista na Zona 2 Maringá",
    "orçamento odontológico em Maringá",
    "implante dentário Maringá",
    "clareamento dental Maringá",
  ],
});

const trustItems: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "pin",
    title: "Zona 2, Maringá",
    text: "Av. Cerro Azul, 1028",
  },
  {
    icon: "clock",
    title: "Segunda a sexta",
    text: "8h às 12h e 14h às 18h",
  },
  {
    icon: "document",
    title: "Orçamento por escrito",
    text: "Etapas, valor e prazo",
  },
  {
    icon: "shield",
    title: "Nota fiscal e garantia",
    text: "Critérios registrados",
  },
];

const proofLinks = [
  {
    name: "Google",
    label: "Avaliações no Google",
    text: "Leia o que pacientes escreveram no perfil da clínica, sem edição nossa.",
    href: site.mapsLink,
    icon: "star" as IconName,
  },
  {
    name: "DentMap",
    label: "Perfil no DentMap",
    text: "Cadastro da clínica no diretório de odontologia de Maringá.",
    href: site.dentmap,
    icon: "external" as IconName,
  },
  {
    name: "agendarconsulta.com",
    label: "Guia de Maringá",
    text: "Ficha da clínica com endereço e contato no guia de saúde.",
    href: site.agendarConsulta,
    icon: "calendar" as IconName,
  },
  {
    name: "Sindicato dos Bancários",
    label: "Convênio credenciado",
    text: "Clínica listada na página de convênios do sindicato.",
    href: site.sindicatoBancarios,
    icon: "building" as IconName,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-mist">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 85% 10%, rgba(0,97,255,0.14) 0%, rgba(238,241,245,0) 65%), radial-gradient(40% 60% at 0% 100%, rgba(0,253,255,0.16) 0%, rgba(238,241,245,0) 70%)",
          }}
        />
        <div className="container-page relative grid gap-10 pb-10 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pb-16 lg:pt-16">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="brand" icon="pin">
                Zona 2 · Maringá/PR
              </Badge>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-800 ring-1 ring-brand-100">
                <span className="h-2 w-2 rounded-full bg-whats" aria-hidden="true" />
                Resposta em até 1 dia útil
              </span>
            </div>

            <h1 className="mt-5 text-[clamp(2rem,5.2vw,3.4rem)] font-extrabold leading-[1.06] text-brand-950">
              Clínica odontológica na Zona 2, em Maringá
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft">
              Prevenção, estética e reabilitação com diagnóstico honesto, plano por
              escrito e acompanhamento de verdade. Você sabe o que será feito, quanto
              custa e em quanto tempo.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#orcamento" size="lg" icon="arrow">
                Pedir orçamento
              </ButtonLink>
              <ButtonLink
                href={whatsappLink(
                  "Olá! Vim pelo site da Sorrir e gostaria de agendar uma avaliação.",
                )}
                variant="whatsapp"
                size="lg"
                icon="whatsapp"
                iconPosition="left"
                external
              >
                Falar no WhatsApp
              </ButtonLink>
            </div>

            <div className="mt-6 grid gap-2 rounded-xl border border-brand-100 bg-white/70 p-4 sm:grid-cols-2">
              <p className="text-[13px] leading-relaxed text-ink-soft">
                <strong className="block font-semibold text-brand-950">
                  Sou paciente particular
                </strong>
                Avaliação com plano e valores por escrito.
              </p>
              <p className="text-[13px] leading-relaxed text-ink-soft">
                <strong className="block font-semibold text-brand-950">
                  Represento uma empresa ou convênio
                </strong>
                <Link
                  href="/servicos/atendimento-para-empresas-e-convenios"
                  className="font-semibold text-brand-700 underline underline-offset-2"
                >
                  Ver atendimento para grupos
                </Link>
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-medium text-brand-900">
              {["Avaliação sem compromisso", "Nota fiscal", "Garantia formal"].map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <Icon name="check" size={16} className="text-whats" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-6 -top-6 hidden h-32 w-32 rounded-3xl bg-accent/30 lg:block"
            />
            <div className="relative overflow-hidden rounded-3xl border border-white bg-white shadow-[0_28px_70px_-38px_rgba(0,26,61,0.55)]">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[4/5]">
                <Image
                  src="/images/hero-clinica.jpg"
                  alt="Sala de atendimento odontológico clara, com cadeira e equipamentos da Sorrir Clínica Odontológica"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 p-4 backdrop-blur">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-700 text-white">
                    <Icon name="pin" size={20} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-brand-950">
                      Av. Cerro Azul, 1028 · {site.neighborhood}
                    </p>
                    <p className="mt-0.5 text-[12px] text-ink-soft">
                      Segunda a sexta, 8h–12h e 14h–18h
                    </p>
                    <a
                      href={site.mapsRoute}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-700 hover:underline"
                    >
                      Traçar rota
                      <Icon name="arrow" size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-page relative pb-10">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-mist-dark bg-mist-dark sm:grid-cols-4">
            {trustItems.map((item) => (
              <li key={item.title} className="bg-white px-4 py-4">
                <Icon name={item.icon} size={20} className="text-brand-600" />
                <p className="mt-2 text-[13.5px] font-bold text-brand-950">{item.title}</p>
                <p className="mt-0.5 text-[12.5px] text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-14 lg:py-20" aria-labelledby="tratamentos">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="tratamentos"
            eyebrow="Tratamentos"
            title="O que tratamos na clínica"
            description="Cada tratamento tem uma página com o que está incluso, como acontece, o que define o valor e as dúvidas mais comuns."
          />
          <ButtonLink href="/servicos" variant="secondary" size="md" icon="arrow">
            Ver todos os tratamentos
          </ButtonLink>
        </div>

        <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <li key={service.slug}>
              <Card className="group flex h-full flex-col p-5 hover:border-brand-200 hover:shadow-[0_20px_44px_-30px_rgba(11,27,51,0.4)]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                  <Icon name={service.icon} size={22} />
                </span>
                <h3 className="mt-4 text-[17px] font-bold leading-snug text-brand-950">
                  <Link href={`/servicos/${service.slug}`} className="hover:text-brand-700">
                    {service.name}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-soft">
                  {service.short}
                </p>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-700 transition-colors hover:text-brand-900"
                >
                  Entenda o tratamento
                  <Icon name="arrow" size={15} />
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-brand-950 py-14 text-white lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Por que a Sorrir"
              tone="dark"
              title="Sem enrolação e sem promessa que não se cumpre"
              description="Nossa proposta é simples: entender o seu caso, explicar as opções e combinar por escrito. Você decide com informação, não com pressão."
            />
            <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-sm leading-relaxed text-brand-100">
                “Respondemos em até 1 dia útil com o valor e o prazo do seu caso.”
              </p>
              <p className="mt-2 text-xs text-brand-300">
                Compromisso de atendimento válido para pedidos enviados pelo site ou
                WhatsApp em dias úteis.
              </p>
            </div>
            <ButtonLink
              href="/como-funciona"
              variant="ghost"
              size="md"
              icon="arrow"
              className="mt-6"
            >
              Ver como funciona passo a passo
            </ButtonLink>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {differentials.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition-colors hover:border-accent/40"
              >
                <Icon name={item.icon} size={22} className="text-accent" />
                <h3 className="mt-3 text-[15.5px] font-bold !text-white">{item.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-brand-200">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-14 lg:py-20" aria-labelledby="prova">
        <SectionHeading
          id="prova"
          eyebrow="Prova social"
          title="Avaliações públicas, sem depoimento fabricado"
          description="Não compramos avaliação e não inventamos depoimento. Preferimos que você leia o que pacientes escreveram nos canais onde a clínica está cadastrada."
        />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col rounded-2xl border border-mist-dark bg-white p-5 transition-colors hover:border-brand-300 hover:bg-brand-50/50"
              >
                <span className="flex items-center justify-between">
                  <Icon name={item.icon} size={22} className="text-brand-600" />
                  <Icon name="external" size={16} className="text-ink-soft" />
                </span>
                <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                  {item.name}
                </span>
                <span className="mt-1 text-[15px] font-bold text-brand-950">{item.label}</span>
                <span className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                  {item.text}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-brand-100 bg-brand-50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[13.5px] leading-relaxed text-brand-900">
            <strong className="font-semibold">Paciente da Sorrir?</strong> Sua avaliação
            ajuda outras pessoas a decidirem com informação. Publique no Google — usamos
            depoimentos no site somente com autorização.
          </p>
          <ButtonLink
            href={site.mapsLink}
            external
            variant="primary"
            size="sm"
            icon="star"
            iconPosition="left"
          >
            Avaliar no Google
          </ButtonLink>
        </div>
      </section>

      <section className="bg-mist py-14 lg:py-20" aria-labelledby="processo">
        <div className="container-page">
          <SectionHeading
            id="processo"
            eyebrow="Como funciona"
            title="Do primeiro contato ao acompanhamento"
            description="Cinco etapas claras. Em cada uma você sabe o que acontece, o que precisa levar e quanto tempo costuma levar."
          />
          <ol className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.slice(0, 3).map((step) => (
              <li key={step.number} className="rounded-2xl border border-white bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-700 text-white">
                    <Icon name={step.icon} size={21} />
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-brand-200">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 text-[16.5px] font-bold text-brand-950">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                  {step.description}
                </p>
                <p className="mt-3 flex items-start gap-2 text-[12.5px] text-brand-800">
                  <Icon name="clock" size={15} className="mt-0.5 shrink-0" />
                  {step.timing}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <ButtonLink href="/como-funciona" variant="secondary" icon="arrow">
              Ver as 5 etapas e os prazos
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-page py-14 lg:py-20" aria-labelledby="sobre-resumo">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative overflow-hidden rounded-3xl border border-mist-dark bg-mist">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/recepcao.jpg"
                alt="Recepção da clínica odontológica com balcão azul e poltronas de espera"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-3 left-3 rounded-xl bg-white/95 px-4 py-2 text-[12px] font-semibold text-brand-900 backdrop-blur">
              Atendimento na Zona 2, em Maringá
            </div>
          </div>
          <div>
            <SectionHeading
              id="sobre-resumo"
              eyebrow="Sobre a clínica"
              title="Uma equipe pequena, que conhece o seu caso pelo nome"
              description="A Sorrir atende em Maringá com atendimento próprio, sem central terceirizada. Quem responde a sua mensagem é quem acompanha o seu tratamento."
            />
            <ul className="mt-6 grid gap-3">
              {[
                "Avaliação com plano de tratamento organizado por prioridade.",
                "Orçamento com valor, prazo e formas de pagamento por escrito.",
                "Nota fiscal e critérios de garantia registrados.",
                "Estrutura preparada para pacientes, empresas e convênios.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-ink-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <Icon name="check" size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/sobre" variant="primary" icon="arrow">
                Conhecer a clínica
              </ButtonLink>
              <ButtonLink href="/galeria" variant="secondary" icon="camera" iconPosition="left">
                Ver estrutura
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 lg:py-20" aria-labelledby="duvidas">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <SectionHeading
              id="duvidas"
              eyebrow="Dúvidas frequentes"
              title="O que perguntam antes de agendar"
              description="Se a sua dúvida não estiver aqui, a resposta completa está na página de perguntas frequentes."
            />
            <ButtonLink href="/faq" variant="secondary" size="md" icon="arrow" className="mt-6">
              Ver todas as perguntas
            </ButtonLink>
          </div>
          <Accordion items={homeFaqs} idPrefix="home-faq" />
        </div>
      </section>

      <section id="orcamento" className="scroll-mt-24 bg-white py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Orçamento sem compromisso"
              title="Peça seu orçamento em 1 minuto"
              description="Preencha os dados abaixo ou fale direto no WhatsApp. Respondemos em até 1 dia útil com o valor e o prazo do seu caso."
            />

            <div className="mt-7 grid gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-mist-dark bg-white p-4 transition-colors hover:border-whats/40 hover:bg-whats/5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-whats text-white">
                  <Icon name="whatsapp" size={22} />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                    WhatsApp
                  </span>
                  <span className="block text-[15px] font-bold text-brand-950">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>
              <a
                href={site.phoneTel}
                className="flex items-center gap-3 rounded-xl border border-mist-dark bg-white p-4 transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon name="phone" size={21} />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                    Telefone
                  </span>
                  <span className="block text-[15px] font-bold text-brand-950">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>
              <div className="rounded-xl border border-mist-dark bg-white p-4">
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name="pin" size={21} />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                      Endereço
                    </p>
                    <p className="text-[14px] font-semibold leading-relaxed text-brand-950">
                      {site.street}, {site.neighborhood}
                      <br />
                      {site.city}/{site.state} · CEP {site.postalCode}
                    </p>
                    <p className="mt-1 text-[12.5px] text-ink-soft">{site.hoursLabel}</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactMap className="mt-4" />
          </div>

          <div>
            <LeadForm sourcePage="/" compact />
          </div>
        </div>
      </section>

      <JsonLd data={[localBusinessSchema(), faqPageSchema(homeFaqs)]} />
    </>
  );
}
