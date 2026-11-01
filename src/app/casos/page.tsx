import type { Metadata } from "next";
import { CasesExplorer } from "@/components/cases-explorer";
import { Icon } from "@/components/icons";
import { ButtonLink, CtaBand, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { cases } from "@/lib/cases";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Casos e resultados odontológicos",
  description:
    "Protocolos de atendimento da clínica: implantes, clareamento, ortodontia, urgência, restaurações e atendimento a empresas, com etapas e critérios técnicos.",
  path: "/casos",
  keywords: [
    "casos de implante dentário em Maringá",
    "antes e depois odontologia Maringá",
    "resultados de tratamento odontológico",
  ],
});

const documentation = [
  "Registro fotográfico com a mesma angulação antes e depois, quando o paciente autoriza.",
  "Exames de imagem que embasaram a decisão clínica.",
  "Descrição das etapas executadas e dos materiais utilizados.",
  "Ficha com datas, dentes envolvidos e profissional responsável.",
  "Termo de autorização de uso de imagem, assinado pelo paciente.",
];

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos e resultados"
        title="Como conduzimos cada tipo de caso"
        description="Nesta página você vê o protocolo que seguimos em cada tipo de atendimento: contexto, desafios, etapas e cuidados. Fotos e relatos de pacientes são publicados apenas com autorização por escrito."
        breadcrumbs={[{ label: "Casos e resultados" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#registros" variant="accent" icon="arrow">
            Ver protocolos
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(
              "Olá! Vi os protocolos de atendimento no site e gostaria de entender o meu caso.",
            )}
            variant="ghost"
            icon="whatsapp"
            iconPosition="left"
            external
          >
            Falar sobre o meu caso
          </ButtonLink>
        </div>
      </PageHero>

      <section className="container-page py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Transparência"
              title="Por que não publicamos fotos de pacientes sem autorização"
              description="A gente prefere um site com poucos registros verdadeiros a uma vitrine de imagens sem procedência. Para publicar qualquer foto de antes e depois, precisamos do termo de consentimento assinado pelo paciente."
            />
            <ul className="mt-6 grid gap-2.5">
              {documentation.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <Icon name="check" size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-700">
              <Icon name="camera" size={22} />
            </span>
            <h2 className="mt-4 text-[18px] font-extrabold text-brand-950">
              O que cada ficha de caso traz
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-brand-900">
              Contexto do atendimento, desafio clínico, conduta adotada, etapas com prazos
              típicos, ficha técnica e cuidados de manutenção. Sem promessa de resultado e
              sem comparação com outras clínicas.
            </p>
            <p className="mt-3 text-[12.5px] leading-relaxed text-brand-800">
              Resultados variam de pessoa para pessoa e dependem de condições clínicas,
              adesão ao tratamento e manutenção periódica.
            </p>
          </div>
        </div>
      </section>

      <section id="registros" className="scroll-mt-24 bg-mist py-12 lg:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Registros de atendimento"
            title="Protocolos documentados pela clínica"
            description="Filtre por tipo de caso para ver contexto, conduta, etapas e ficha técnica."
          />
          <div className="mt-7">
            <CasesExplorer items={cases} />
          </div>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        <div className="rounded-2xl border border-mist-dark bg-white p-6 lg:p-8">
          <SectionHeading
            eyebrow="Compromisso"
            title="O que garantimos em qualquer caso"
            as="h2"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "scan" as const, title: "Diagnóstico primeiro", text: "Nenhum procedimento sem exame e explicação prévia." },
              { icon: "document" as const, title: "Escopo por escrito", text: "Etapas, valores e prazos no papel antes de iniciar." },
              { icon: "shield" as const, title: "Nota fiscal e garantia", text: "Documento fiscal e critérios de garantia registrados." },
              { icon: "heart" as const, title: "Acompanhamento", text: "Retornos de revisão definidos conforme o tratamento." },
            ].map((item) => (
              <div key={item.title}>
                <Icon name={item.icon} size={21} className="text-brand-600" />
                <h3 className="mt-2 text-[14.5px] font-bold text-brand-950">{item.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Quer entender o seu caso?"
        description="Envie o que você já sabe e agende uma avaliação. O plano com etapas e valores é entregue por escrito."
        whatsappHref={whatsappLink(
          "Olá! Vi a página de casos do site e gostaria de agendar uma avaliação.",
        )}
        note={`Atendimento na ${site.street}, ${site.neighborhood} · ${site.city}/${site.state}`}
      />

      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Casos e resultados", href: "/casos" }]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Protocolos de atendimento documentados",
            itemListElement: cases.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.title,
              url: `${site.url}/casos/${item.slug}`,
            })),
          },
        ]}
      />
    </>
  );
}
