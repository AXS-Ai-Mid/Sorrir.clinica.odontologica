import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Badge, ButtonLink, CtaBand, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { postCategories, posts } from "@/lib/posts";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Blog e dicas de saúde bucal",
  description:
    "Conteúdos sobre custo de tratamento em Maringá, clareamento, dor de dente, implante, ortodontia em adultos e como escolher clínica odontológica.",
  path: "/blog",
  keywords: [
    "blog odontologia Maringá",
    "quanto custa dentista em Maringá",
    "dicas de saúde bucal",
  ],
});

const [featured, ...rest] = posts;

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog e dicas"
        title="Informação para decidir com mais segurança"
        description="Textos curtos e diretos sobre as dúvidas que mais chegam no atendimento. Nada de promessa de resultado ou preço inventado."
        breadcrumbs={[{ label: "Blog" }]}
      >
        <div className="flex flex-wrap gap-2">
          {postCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white"
            >
              {category}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="container-page py-12 lg:py-16">
        {featured ? (
          <article className="grid overflow-hidden rounded-3xl border border-mist-dark bg-white lg:grid-cols-2">
            <div className="relative aspect-[16/10] w-full lg:aspect-auto lg:h-full lg:min-h-[320px]">
              <Image
                src={featured.image ?? "/images/hero-clinica.jpg"}
                alt={featured.imageAlt ?? featured.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="brand">{featured.category}</Badge>
                <span className="text-xs text-ink-soft">
                  {featured.dateLabel} · {featured.readingTime}
                </span>
              </div>
              <h2 className="mt-4 text-[clamp(1.4rem,3vw,2rem)] font-extrabold leading-tight text-brand-950">
                <Link href={`/blog/${featured.slug}`} className="hover:text-brand-700">
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{featured.excerpt}</p>
              <ButtonLink href={`/blog/${featured.slug}`} className="mt-6" icon="arrow">
                Ler o artigo
              </ButtonLink>
            </div>
          </article>
        ) : null}

        <div className="mt-12">
          <SectionHeading eyebrow="Todos os conteúdos" title="Últimos artigos" />
          <ul className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <li key={post.slug}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-mist-dark bg-white transition-shadow hover:shadow-[0_20px_44px_-30px_rgba(11,27,51,0.4)]">
                  {post.image ? (
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={post.image}
                        alt={post.imageAlt ?? post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-800">
                        {post.category}
                      </span>
                      <span className="text-[11px] text-ink-soft">{post.readingTime}</span>
                    </div>
                    <h3 className="mt-3 text-[16.5px] font-bold leading-snug text-brand-950">
                      <Link href={`/blog/${post.slug}`} className="hover:text-brand-700">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 flex items-center justify-between text-[12px] text-ink-soft">
                      {post.dateLabel}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline"
                      >
                        Ler
                        <Icon name="arrow" size={14} />
                      </Link>
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50 p-6">
          <h2 className="text-[17px] font-extrabold text-brand-950">
            Próximas pautas previstas
          </h2>
          <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-brand-900">
            Conteúdo é publicado conforme as dúvidas reais do atendimento. As próximas pautas
            em produção tratam de prevenção em crianças, manutenção de implante, sensibilidade
            dental, convênio odontológico e o que fazer em caso de dente quebrado.
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-brand-800">
            Tem uma dúvida que gostaria de ver respondida aqui?{" "}
            <a
              href={whatsappLink("Olá! Tenho uma sugestão de pauta para o blog da Sorrir.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              Envie sua sugestão
            </a>
            .
          </p>
        </div>
      </section>

      <CtaBand
        title="Conteúdo não substitui avaliação"
        description="Se o seu caso exige exame clínico, o próximo passo é agendar. O plano com etapas e valores vem por escrito."
        whatsappHref={whatsappLink(
          "Olá! Li um conteúdo no blog da Sorrir e gostaria de agendar uma avaliação.",
        )}
        note={`${site.street}, ${site.neighborhood} · ${site.city}/${site.state}`}
      />

      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Blog", href: "/blog" }]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog da Sorrir Clínica Odontológica",
            url: `${site.url}/blog`,
            inLanguage: "pt-BR",
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              excerpt: post.excerpt,
              datePublished: post.date,
              url: `${site.url}/blog/${post.slug}`,
            })),
          },
        ]}
      />
    </>
  );
}
