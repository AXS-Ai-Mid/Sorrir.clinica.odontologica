import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { Badge, ButtonLink, CtaBand, JsonLd, PageHero } from "@/components/ui";
import { getPost, posts, relatedPosts, type ContentBlock } from "@/lib/posts";
import { articleSchema, breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return pageMetadata({
      title: "Artigo não encontrado",
      description: "Página não encontrada.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }
  return {
    ...pageMetadata({
      title: post.title,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      image: post.image ?? "/images/hero-clinica.jpg",
      keywords: [post.title, post.category, "odontologia Maringá"],
    }),
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/blog/${post.slug}`,
      siteName: site.name,
      locale: "pt_BR",
      publishedTime: post.date,
      images: [{ url: post.image ?? "/images/hero-clinica.jpg", alt: post.imageAlt ?? post.title }],
    },
  };
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "h2": {
      const id = `secao-${index}`;
      return (
        <h2 key={id} id={id} className="mt-9 scroll-mt-24 text-[23px] font-extrabold leading-tight text-brand-950">
          {block.text}
        </h2>
      );
    }
    case "h3":
      return (
        <h3 key={index} className="mt-6 text-[18px] font-bold text-brand-950">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul key={index} className="mt-4 grid gap-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-ink-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside
          key={index}
          className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-5"
        >
          <h3 className="text-[15px] font-bold text-brand-950">{block.title}</h3>
          <p className="mt-1.5 text-[14px] leading-relaxed text-brand-900">{block.text}</p>
        </aside>
      );
    default:
      return (
        <p key={index} className="mt-4 text-[16px] leading-[1.75] text-ink-soft">
          {block.text}
        </p>
      );
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = relatedPosts(post.slug);
  const headings = post.blocks
    .map((block, index) => (block.type === "h2" ? { text: block.text, id: `secao-${index}` } : null))
    .filter((item): item is { text: string; id: string } => item !== null);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.category }]}
      >
        <div className="flex flex-wrap items-center gap-3 text-[13px] text-brand-200">
          <span>{post.dateLabel}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
          <span aria-hidden="true">·</span>
          <span>Por Sorrir Clínica Odontológica</span>
        </div>
      </PageHero>

      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14 lg:py-16">
        <article>
          {post.image ? (
            <figure className="overflow-hidden rounded-2xl border border-mist-dark">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 780px"
                  className="object-cover"
                />
              </div>
              <figcaption className="bg-white px-4 py-2.5 text-xs text-ink-soft">
                {post.imageAlt ?? post.title}
              </figcaption>
            </figure>
          ) : null}

          <div className="mt-6">{post.blocks.map(renderBlock)}</div>

          <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h2 className="flex items-center gap-2 text-[15px] font-bold text-amber-950">
              <Icon name="alert" size={18} />
              Conteúdo informativo
            </h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-amber-900">
              Este texto orienta, mas não substitui avaliação clínica presencial. Indicação,
              valores e prazos só são definidos após exame, e são entregues por escrito.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-mist-dark pt-6">
            <span className="text-[13px] font-semibold text-brand-950">Compartilhar:</span>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${post.title} — ${site.url}/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-mist-dark px-3 py-2 text-[13px] font-medium text-brand-800 hover:bg-mist"
            >
              <Icon name="whatsapp" size={16} />
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${site.url}/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-mist-dark px-3 py-2 text-[13px] font-medium text-brand-800 hover:bg-mist"
            >
              <Icon name="facebook" size={16} />
              Facebook
            </a>
          </div>

          <div className="mt-6">
            <ButtonLink href="/contato" icon="arrow">
              Agendar avaliação com a equipe
            </ButtonLink>
          </div>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          {headings.length > 0 ? (
            <nav aria-label="Índice do artigo" className="rounded-2xl border border-mist-dark bg-white p-5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Neste artigo
              </h2>
              <ol className="mt-3 grid gap-2">
                {headings.map((heading, index) => (
                  <li key={heading.id} className="text-[13.5px]">
                    <a
                      href={`#${heading.id}`}
                      className="flex gap-2 text-brand-900 hover:text-brand-700 hover:underline"
                    >
                      <span className="text-brand-500">{String(index + 1).padStart(2, "0")}</span>
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <div className="mt-4 rounded-2xl bg-brand-900 p-6 text-white">
            <Badge tone="light">Fale com a clínica</Badge>
            <h2 className="mt-3 text-[18px] font-extrabold !text-white">
              Precisa avaliar o seu caso?
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-brand-100">
              Atendemos na Zona 2, em Maringá, de segunda a sexta. Resposta em até 1 dia útil.
            </p>
            <div className="mt-4 grid gap-2">
              <ButtonLink href="/contato" variant="accent" size="sm" icon="arrow">
                Pedir orçamento
              </ButtonLink>
              <ButtonLink
                href={whatsappLink(`Olá! Li o artigo "${post.title}" e gostaria de agendar uma avaliação.`)}
                variant="ghost"
                size="sm"
                icon="whatsapp"
                iconPosition="left"
                external
              >
                WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-mist-dark bg-white p-5">
            <h2 className="text-[14px] font-bold text-brand-950">Leia também</h2>
            <ul className="mt-3 grid gap-2.5">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="block text-[13.5px] font-medium leading-snug text-brand-900 hover:text-brand-700 hover:underline"
                  >
                    {item.title}
                  </Link>
                  <span className="mt-0.5 block text-[11.5px] text-ink-soft">{item.category}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <CtaBand
        title="Quer sair da dúvida?"
        description="Uma avaliação mostra o que está acontecendo e quais são as opções. O plano fica por escrito."
        whatsappHref={whatsappLink(
          `Olá! Li o artigo "${post.title}" e gostaria de agendar uma avaliação.`,
        )}
      />

      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { label: "Blog", href: "/blog" },
            { label: post.category, href: `/blog/${post.slug}` },
          ]),
        ]}
      />
    </>
  );
}
