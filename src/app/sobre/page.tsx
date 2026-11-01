import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Badge, ButtonLink, CtaBand, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { structureItems, teamRoles, values } from "@/lib/company";
import { breadcrumbSchema, medicalWebPageSchema, pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Sobre a clínica",
  description:
    "Conheça a Sorrir Clínica Odontológica, na Zona 2 em Maringá: atendimento próprio, responsabilidade técnica, estrutura e os compromissos que aparecem por escrito.",
  path: "/sobre",
  keywords: ["clínica odontológica em Maringá", "dentista Zona 2 Maringá", "quem somos Sorrir"],
});

const operation = [
  { label: "Endereço fixo", value: "Av. Cerro Azul, 1028 · Zona 2" },
  { label: "Atendimento", value: "Segunda a sexta, manhã e tarde" },
  { label: "Perfis atendidos", value: "Particular, empresas, órgãos públicos e convênios" },
  { label: "Documento fiscal", value: "Nota fiscal de serviço emitida" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a Sorrir"
        title="Uma clínica de Maringá feita para explicar antes de tratar"
        description="Atendemos na Zona 2 com atendimento próprio, sem central terceirizada. Quem responde a sua mensagem é a mesma equipe que acompanha o tratamento."
        breadcrumbs={[{ label: "Sobre" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contato" variant="accent" icon="arrow">
            Agendar avaliação
          </ButtonLink>
          <ButtonLink
            href={whatsappLink("Olá! Quero conhecer melhor a clínica Sorrir.")}
            variant="ghost"
            icon="whatsapp"
            iconPosition="left"
            external
          >
            Falar com a equipe
          </ButtonLink>
        </div>
      </PageHero>

      <section className="container-page py-12 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Nossa história"
              title="Nascemos de um incômodo com o atendimento apressado"
            />
            <div className="prose-clinic mt-5">
              <p>
                A Sorrir nasceu em Maringá com uma proposta simples e pouco comum: explicar
                antes de tratar. Em muitas clínicas a pessoa entra, senta na cadeira e descobre
                o valor no fim. Aqui o caminho é outro — o exame vem primeiro, as opções são
                apresentadas e o plano fica no papel antes de qualquer procedimento.
              </p>
              <p>
                Começamos com atendimento de rotina e prevenção, e a demanda foi mostrando o
                que a cidade precisava: alguém que respondesse rápido, que não empurrasse
                tratamento e que entregasse um orçamento com etapas claras. Foi assim que
                passamos a atender também empresas, órgãos públicos e pacientes de convênios,
                sem perder o cuidado individual.
              </p>
              <p>
                Hoje continuamos com equipe enxuta por escolha. É o que permite que o
                responsável técnico conheça cada caso e que a pessoa que responde no WhatsApp
                saiba exatamente em que etapa o seu tratamento está.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-5">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-700">
                  <Icon name="shield" size={22} />
                </span>
                <div>
                  <h2 className="text-[16px] font-extrabold text-brand-950">
                    Responsabilidade técnica
                  </h2>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-brand-900">
                    Todo plano de tratamento é conduzido e assinado por cirurgião-dentista
                    responsável técnico, com registro ativo no Conselho Regional de
                    Odontologia. Desde a avaliação você sabe quem responde pelo seu caso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-2xl border border-mist-dark">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/consultorio.jpg"
                  alt="Consultório odontológico da clínica, com cadeira, refletor e instrumentais organizados"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-3">
              {operation.map((item) => (
                <div key={item.label} className="rounded-xl border border-mist-dark bg-white p-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-[13.5px] font-semibold leading-snug text-brand-950">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-mist py-12 lg:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Missão, visão e valores"
            title="O que orienta as decisões da clínica"
            align="center"
          />
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {values.map((item) => (
              <li key={item.title} className="rounded-2xl border border-white bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-700 text-white">
                  <Icon name={item.icon} size={21} />
                </span>
                <h2 className="mt-4 text-[17px] font-extrabold text-brand-950">{item.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Equipe"
              title="Quem você encontra no atendimento"
              description="As funções que sustentam o cuidado diário. Os nomes e retratos da equipe serão publicados assim que o material fotográfico for produzido — não usamos foto de banco de imagens para representar pessoas."
            />
            <ul className="mt-6 grid gap-3">
              {teamRoles.map((role) => (
                <li
                  key={role.role}
                  className="flex items-start gap-3 rounded-xl border border-mist-dark bg-white p-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon name={role.icon} size={19} />
                  </span>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-brand-950">{role.role}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{role.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading
              eyebrow="Estrutura"
              title="O que existe por trás da cadeira"
              description="Estrutura física, materiais, esterilização e apoio de exames — os itens que garantem segurança e continuidade do tratamento."
            />
            <ul className="mt-6 grid gap-2.5">
              {structureItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-ink-soft">
                  <Icon name="check" size={16} className="mt-1 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 overflow-hidden rounded-2xl border border-mist-dark">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/fachada.jpg"
                  alt="Entrada da clínica odontológica em avenida de Maringá"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
              <p className="bg-white px-4 py-3 text-[12.5px] leading-relaxed text-ink-soft">
                {site.street}, {site.neighborhood} — {site.city}/{site.state}. Imagem
                ilustrativa do padrão de fachada; a foto oficial será publicada após o ensaio
                fotográfico da clínica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-12 lg:pb-16">
        <div className="rounded-2xl border border-mist-dark bg-white p-6 lg:p-8">
          <SectionHeading
            eyebrow="Cadastros e convênios"
            title="Onde a clínica também pode ser encontrada"
            description="Verifique sempre o nome e o endereço nos canais oficiais. Manter o mesmo NAP em todos eles é o que evita confusão."
            as="h2"
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Google Maps", href: site.mapsLink, text: "Perfil com avaliações públicas." },
              { name: "DentMap", href: site.dentmap, text: "Diretório de odontologia." },
              { name: "agendarconsulta.com", href: site.agendarConsulta, text: "Guia de saúde de Maringá." },
              { name: "Sindicato dos Bancários", href: site.sindicatoBancarios, text: "Clínica conveniada." },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-xl border border-mist-dark p-4 transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                <span className="flex items-center justify-between">
                  <span className="text-[13.5px] font-bold text-brand-950">{item.name}</span>
                  <Icon name="external" size={15} className="text-ink-soft" />
                </span>
                <span className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">
                  {item.text}
                </span>
              </a>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Badge tone="brand" icon="check">
              Nota fiscal emitida
            </Badge>
            <Badge tone="outline" icon="clock">
              Resposta em até 1 dia útil
            </Badge>
            <Badge tone="outline" icon="pin">
              Endereço fixo na Zona 2
            </Badge>
          </div>
          <p className="mt-4 text-[12.5px] leading-relaxed text-ink-soft">
            A clínica não divulga selos de certificação que ainda não possua. Este site
            publica apenas informações verificáveis.{" "}
            <Link href="/como-funciona" className="font-semibold text-brand-700 underline">
              Veja a documentação do atendimento
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand
        title="Venha conhecer a clínica"
        description="Agende uma avaliação e veja de perto como o plano de tratamento é construído com você."
        whatsappHref={whatsappLink("Olá! Quero agendar uma visita e conhecer a clínica Sorrir.")}
        note={`${site.street}, ${site.neighborhood} · ${site.city}/${site.state}`}
      />

      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Sobre", href: "/sobre" }]),
          medicalWebPageSchema({
            name: "Sobre a Sorrir Clínica Odontológica",
            description:
              "História, missão, equipe e estrutura da clínica odontológica na Zona 2 em Maringá.",
            path: "/sobre",
          }),
        ]}
      />
    </>
  );
}
