import type { Metadata } from "next";
import { GalleryGrid, type GalleryItem } from "@/components/gallery-grid";
import { Icon } from "@/components/icons";
import { ButtonLink, CtaBand, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Galeria da clínica",
  description:
    "Veja o ambiente, a estrutura e os equipamentos da Sorrir Clínica Odontológica na Zona 2, em Maringá. Fotos com descrição e filtro por categoria.",
  path: "/galeria",
  keywords: ["estrutura clínica odontológica Maringá", "consultório dentário Zona 2"],
});

const items: GalleryItem[] = [
  {
    src: "/images/hero-clinica.jpg",
    alt: "Sala de atendimento odontológico com cadeira, refletor e janela ampla com luz natural",
    caption: "Sala de atendimento com luz natural",
    category: "Ambiente",
  },
  {
    src: "/images/recepcao.jpg",
    alt: "Recepção da clínica com poltronas de espera, plantas e balcão azul",
    caption: "Recepção e espera",
    category: "Ambiente",
  },
  {
    src: "/images/consultorio.jpg",
    alt: "Detalhe de cadeira odontológica e refletor em consultório claro",
    caption: "Posto de atendimento clínico",
    category: "Estrutura",
  },
  {
    src: "/images/instrumentos.jpg",
    alt: "Instrumentos odontológicos esterilizados em bandeja branca",
    caption: "Instrumentais organizados por atendimento",
    category: "Biossegurança",
  },
  {
    src: "/images/ortodontia.jpg",
    alt: "Alinhador ortodôntico transparente ao lado de modelo anatômico dental",
    caption: "Planejamento ortodôntico",
    category: "Tratamentos",
  },
  {
    src: "/images/fachada.jpg",
    alt: "Fachada da clínica em avenida arborizada de Maringá",
    caption: "Entrada da clínica na Av. Cerro Azul",
    category: "Estrutura",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galeria"
        title="Ambiente, estrutura e o dia a dia da clínica"
        description="Conhecer o espaço antes da consulta reduz a ansiedade. Filtre por categoria e amplie as imagens para ver os detalhes."
        breadcrumbs={[{ label: "Galeria" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contato" variant="accent" icon="arrow">
            Agendar avaliação
          </ButtonLink>
          <ButtonLink
            href={site.instagram}
            variant="ghost"
            icon="instagram"
            iconPosition="left"
            external
          >
            Ver bastidores no Instagram
          </ButtonLink>
        </div>
      </PageHero>

      <section className="container-page py-12 lg:py-16">
        <GalleryGrid items={items} />
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-mist-dark bg-mist p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-soft">
            <Icon name="camera" size={18} className="mt-0.5 shrink-0 text-brand-600" />
            <span>
              As imagens acima são ilustrativas do padrão de ambiente e equipamentos. A
              clínica está produzindo o ensaio fotográfico próprio (fachada, salas, equipe e
              atendimento), que substituirá este material. Registros de pacientes só entram
              aqui com autorização por escrito.
            </span>
          </p>
          <ButtonLink href="/contato" variant="secondary" size="sm" icon="calendar" iconPosition="left">
            Ver a clínica pessoalmente
          </ButtonLink>
        </div>
      </section>

      <section className="bg-mist py-12 lg:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Vídeos"
              title="Conteúdo em vídeo e bastidores"
              description="Os vídeos curtos da clínica ficam no Instagram, onde são publicados com mais frequência. Lá você vê a rotina, os cuidados de esterilização e orientações de higiene."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={site.instagram} external variant="primary" icon="instagram" iconPosition="left">
                Abrir @sorrirmaringa
              </ButtonLink>
              <ButtonLink href={site.facebook} external variant="secondary" icon="facebook" iconPosition="left">
                Página no Facebook
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-2xl border border-white bg-white p-6">
            <h2 className="text-[16px] font-extrabold text-brand-950">
              O que você não vai encontrar aqui
            </h2>
            <ul className="mt-3 grid gap-2.5 text-[13.5px] leading-relaxed text-ink-soft">
              <li className="flex items-start gap-2">
                <Icon name="close" size={15} className="mt-1 shrink-0 text-brand-600" />
                Foto de banco de imagens posando de paciente.
              </li>
              <li className="flex items-start gap-2">
                <Icon name="close" size={15} className="mt-1 shrink-0 text-brand-600" />
                Resultado de tratamento sem autorização do paciente.
              </li>
              <li className="flex items-start gap-2">
                <Icon name="close" size={15} className="mt-1 shrink-0 text-brand-600" />
                Imagem editada para parecer o que o procedimento não faz.
              </li>
            </ul>
            <p className="mt-4 text-[12.5px] leading-relaxed text-ink-soft">
              Resultados variam conforme a condição clínica, a adesão ao tratamento e a
              manutenção periódica.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Agende sua avaliação"
        description="O melhor jeito de conhecer a clínica é presencialmente. Traga suas dúvidas e saia com um plano por escrito."
        whatsappHref={whatsappLink(
          "Olá! Vi a galeria no site e gostaria de agendar uma avaliação na Sorrir.",
        )}
        note={`${site.street}, ${site.neighborhood} · ${site.city}/${site.state}`}
      />

      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Galeria", href: "/galeria" }]),
          {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Galeria da Sorrir Clínica Odontológica",
            associatedMedia: items.map((item) => ({
              "@type": "ImageObject",
              contentUrl: `${site.url}${item.src}`,
              description: item.alt,
              name: item.caption,
            })),
          },
        ]}
      />
    </>
  );
}
