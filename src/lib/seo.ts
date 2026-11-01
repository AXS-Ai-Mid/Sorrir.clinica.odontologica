import type { Metadata } from "next";
import { site, whatsappLink } from "@/lib/site";
import type { ContentFaq, Service } from "@/lib/services";
import type { Post } from "@/lib/posts";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = "/images/hero-clinica.jpg",
  noIndex,
}: PageMetaInput): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "pt_BR",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.street,
  addressLocality: site.city,
  addressRegion: site.state,
  postalCode: site.postalCode,
  addressCountry: site.country,
};

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${site.url}/#clinica`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneE164,
    image: `${site.url}/images/fachada.jpg`,
    priceRange: "Sob orçamento",
    address: postalAddress,
    areaServed: [
      { "@type": "City", name: "Maringá" },
      { "@type": "AdministrativeArea", name: "Noroeste do Paraná" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "14:00",
        closes: "18:00",
      },
    ],
    sameAs: [site.instagram, site.facebook, site.dentmap, site.agendarConsulta],
    hasMap: site.mapsLink,
    makesOffer: [
      "Avaliação odontológica",
      "Limpeza e profilaxia",
      "Restaurações",
      "Tratamento de canal",
      "Implantes dentários",
      "Ortodontia",
      "Clareamento dental",
      "Atendimento a empresas e convênios",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organizacao`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/logo-sorrir.svg`,
    telephone: site.phoneE164,
    address: postalAddress,
    sameAs: [
      site.instagram,
      site.facebook,
      site.dentmap,
      site.agendarConsulta,
      site.sindicatoBancarios,
      site.mapsLink,
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#site`,
    name: site.name,
    url: site.url,
    inLanguage: "pt-BR",
    publisher: { "@id": `${site.url}/#organizacao` },
  };
}

export function faqPageSchema(faqs: ContentFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { label: "Home", href: "/" },
      ...items,
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${site.url}${item.href ?? ""}`,
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.short,
    url: `${site.url}/servicos/${service.slug}`,
    provider: {
      "@type": "Dentist",
      name: site.name,
      telephone: site.phoneE164,
      address: postalAddress,
    },
    areaServed: { "@type": "City", name: "Maringá" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      description: "Valor informado por escrito após avaliação, sem compromisso.",
      url: whatsappLink(
        `Olá! Vim pelo site e gostaria de informações sobre ${service.name}.`,
      ),
    },
  };
}

export function articleSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "pt-BR",
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/images/logo-sorrir.svg` },
    },
    image: `${site.url}${post.image ?? "/images/hero-clinica.jpg"}`,
  };
}

export function medicalWebPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name,
    description,
    url: `${site.url}${path}`,
    inLanguage: "pt-BR",
    about: { "@id": `${site.url}/#clinica` },
    lastReviewed: "2026-10-30",
  };
}
