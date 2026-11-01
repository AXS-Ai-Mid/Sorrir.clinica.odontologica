import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { ButtonLink, CtaBand, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Depoimentos e avaliações",
  description:
    "Onde ler avaliações reais da Sorrir Clínica Odontológica em Maringá. Nossa política de publicação de depoimentos e como enviar o seu.",
  path: "/depoimentos",
  keywords: ["avaliações clínica odontológica Maringá", "depoimentos dentista Maringá"],
});

const channels = [
  {
    name: "Google",
    title: "Avaliações no perfil da clínica",
    text: "O canal mais completo: nota, comentários e fotos enviadas por pacientes.",
    href: site.mapsLink,
    cta: "Ler no Google",
    icon: "star" as const,
  },
  {
    name: "DentMap",
    title: "Ficha no diretório DentMap",
    text: "Cadastro da clínica no diretório de odontologia, com dados de contato.",
    href: site.dentmap,
    cta: "Abrir DentMap",
    icon: "external" as const,
  },
  {
    name: "agendarconsulta.com",
    title: "Guia de saúde de Maringá",
    text: "Ficha com endereço e formas de contato no guia de agendamento.",
    href: site.agendarConsulta,
    cta: "Ver perfil",
    icon: "calendar" as const,
  },
  {
    name: "Sindicato dos Bancários",
    title: "Página de convênios",
    text: "Confirmação do convênio da clínica para os associados.",
    href: site.sindicatoBancarios,
    cta: "Ver convênio",
    icon: "building" as const,
  },
];

const policy = [
  "Depoimento só é publicado com nome, cidade, serviço contratado e autorização por escrito.",
  "Não publicamos texto escrito pela clínica e atribuído a paciente.",
  "Não compramos avaliação, não oferecemos desconto em troca de nota e não editamos comentário.",
  "Prints de conversa só entram com autorização e dados pessoais tarjados.",
  "Caso um paciente peça a remoção, o conteúdo sai do ar imediatamente.",
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Depoimentos"
        title="Avaliações reais, publicadas onde não temos controle"
        description="Preferimos direcionar você para as avaliações públicas do que colar depoimentos editados nesta página. Todos os canais abaixo são externos e verificáveis."
        breadcrumbs={[{ label: "Depoimentos" }]}
      >
        <ButtonLink
          href={site.mapsLink}
          external
          variant="accent"
          icon="star"
          iconPosition="left"
        >
          Ler avaliações no Google
        </ButtonLink>
      </PageHero>

      <section className="container-page py-12 lg:py-16">
        <SectionHeading
          eyebrow="Canais verificáveis"
          title="Onde encontrar a opinião de pacientes sobre a clínica"
          description="Estes são os perfis oficiais da Sorrir. O NAP (nome, endereço e telefone) é o mesmo em todos eles."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {channels.map((channel) => (
            <li key={channel.name}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col rounded-2xl border border-mist-dark bg-white p-6 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={channel.icon} size={21} />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    {channel.name}
                  </span>
                </div>
                <h2 className="mt-4 text-[16.5px] font-bold text-brand-950">{channel.title}</h2>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-soft">
                  {channel.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-700">
                  {channel.cta}
                  <Icon name="external" size={15} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-mist py-12 lg:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Nossa política"
              title="Por que esta página ainda não tem depoimentos"
              description="O cliente ainda não enviou depoimentos com autorização de uso. Enquanto isso, mantemos a estrutura pronta e não inventamos prova social."
            />
            <ul className="mt-6 grid gap-2.5">
              {policy.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-ink-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-brand-700">
                    <Icon name="check" size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-white p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-700 text-white">
              <Icon name="star" size={24} />
            </span>
            <h2 className="mt-4 text-[19px] font-extrabold text-brand-950">
              Foi atendido na Sorrir?
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
              Sua avaliação ajuda quem está comparando clínicas em Maringá. Leva menos de dois
              minutos e pode ser publicada com o seu nome.
            </p>
            <div className="mt-4 grid gap-2">
              <ButtonLink href={site.mapsLink} external variant="primary" icon="star" iconPosition="left">
                Avaliar no Google
              </ButtonLink>
              <ButtonLink
                href={whatsappLink(
                  "Olá! Fui atendido na Sorrir e gostaria de enviar um depoimento.",
                )}
                variant="secondary"
                icon="whatsapp"
                iconPosition="left"
                external
              >
                Enviar depoimento por WhatsApp
              </ButtonLink>
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-ink-soft">
              Ao enviar, informe se autoriza a publicação com seu nome, cidade e serviço
              contratado. Sem autorização, o relato não é publicado.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Quer conversar antes de agendar?"
        description="Fale com a equipe e tire dúvidas sobre atendimento, valores, convênios e horários. Sem compromisso."
        whatsappHref={whatsappLink(
          "Olá! Vim pelo site e gostaria de conversar antes de agendar uma avaliação.",
        )}
        note="Resposta em até 1 dia útil pelos canais do site."
      />

      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Depoimentos", href: "/depoimentos" }]),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Depoimentos e avaliações da Sorrir Clínica Odontológica",
            url: `${site.url}/depoimentos`,
            inLanguage: "pt-BR",
          },
        ]}
      />
    </>
  );
}
