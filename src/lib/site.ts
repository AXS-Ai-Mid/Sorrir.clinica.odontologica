export const site = {
  name: "Sorrir Clínica Odontológica",
  shortName: "Sorrir",
  legalName: "Sorrir Clínica Odontológica",
  // Dominio provisório: trocar por NEXT_PUBLIC_SITE_URL quando o domínio final for definido.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sorrirmaringa.com.br",
  tagline: "Clínica odontológica na Zona 2, em Maringá",
  description:
    "Clínica odontológica em Maringá com avaliação clara, orçamento por escrito e resposta em até 1 dia útil. Prevenção, estética, reabilitação e atendimento a empresas.",
  city: "Maringá",
  state: "PR",
  stateName: "Paraná",
  country: "BR",
  neighborhood: "Zona 2",
  street: "Av. Cerro Azul, 1028",
  postalCode: "87010-000",
  fullAddress:
    "Av. Cerro Azul, 1028, Zona 2, Maringá/PR, CEP 87010-000",
  phoneDisplay: "(44) 98822-9844",
  phoneE164: "+5544988229844",
  phoneTel: "tel:+5544988229844",
  whatsappNumber: "5544988229844",
  whatsappBase: "https://wa.me/5544988229844",
  mapsLink: "https://maps.app.goo.gl/kmXbmbWAd333WDWf6",
  mapsRoute:
    "https://www.google.com/maps/dir/?api=1&destination=Av.+Cerro+Azul,+1028,+Zona+2,+Maring%C3%A1+PR+87010-000",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Cerro+Azul,+1028,+Zona+2,+Maring%C3%A1+-+PR,+87010-000&hl=pt-BR&z=16&output=embed",
  instagram: "https://www.instagram.com/sorrirmaringa/?hl=pt-br",
  facebook: "https://www.facebook.com/sorrirmaringa/",
  dentmap:
    "https://dentmap.com.br/dentistas/maringa/sorrir-clinica-odontologica-b22cae6d",
  agendarConsulta:
    "https://guia.agendarconsulta.com/parana/maringa/sorrir-clinica-odontologica-4897587",
  sindicatoBancarios:
    "https://bancarios.org.br/convenios/sorrir-clinica-odontologica/",
  hoursLabel: "Segunda a sexta, 8h às 12h e 14h às 18h",
  hours: [
    { day: "Segunda-feira", short: "Seg", value: "08:00–12:00 · 14:00–18:00" },
    { day: "Terça-feira", short: "Ter", value: "08:00–12:00 · 14:00–18:00" },
    { day: "Quarta-feira", short: "Qua", value: "08:00–12:00 · 14:00–18:00" },
    { day: "Quinta-feira", short: "Qui", value: "08:00–12:00 · 14:00–18:00" },
    { day: "Sexta-feira", short: "Sex", value: "08:00–12:00 · 14:00–18:00" },
    { day: "Sábado", short: "Sáb", value: "Fechado" },
    { day: "Domingo", short: "Dom", value: "Fechado" },
  ],
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Casos e resultados", href: "/casos" },
  { label: "Como funciona", href: "/como-funciona" },
  { label: "Sobre", href: "/sobre" },
  { label: "Galeria", href: "/galeria" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export const footerNav: NavItem[] = [
  { label: "Serviços", href: "/servicos" },
  { label: "Casos e resultados", href: "/casos" },
  { label: "Como funciona", href: "/como-funciona" },
  { label: "Sobre a clínica", href: "/sobre" },
  { label: "Galeria", href: "/galeria" },
  { label: "Depoimentos", href: "/depoimentos" },
  { label: "Perguntas frequentes", href: "/faq" },
  { label: "Blog e dicas", href: "/blog" },
  { label: "Contato", href: "/contato" },
  { label: "Política de Privacidade", href: "/privacidade" },
];

export const paymentMethods = [
  "Pix",
  "Dinheiro",
  "Cartão de débito",
  "Cartão de crédito (parcelamento conforme o orçamento)",
  "Faturamento para empresas, conforme contrato",
];

export function whatsappLink(message?: string) {
  const text =
    message ??
    "Olá! Vim pelo site da Sorrir Clínica Odontológica e gostaria de mais informações.";
  return `${site.whatsappBase}?text=${encodeURIComponent(text)}`;
}

export const whatsappMessages: Record<string, string> = {
  "/": "Olá! Vim pelo site e gostaria de agendar uma avaliação na Sorrir.",
  "/servicos":
    "Olá! Vim pelo site e gostaria de informações sobre os tratamentos da Sorrir.",
  "/casos":
    "Olá! Vi os casos e protocolos no site e gostaria de entender o meu caso.",
  "/como-funciona":
    "Olá! Quero entender como funciona a avaliação e o orçamento na Sorrir.",
  "/sobre": "Olá! Vim pelo site e quero conhecer melhor a clínica Sorrir.",
  "/galeria":
    "Olá! Vi a galeria no site e gostaria de agendar uma avaliação.",
  "/depoimentos":
    "Olá! Vim pelo site e gostaria de agendar uma avaliação na Sorrir.",
  "/faq": "Olá! Tenho uma dúvida sobre atendimento na Sorrir.",
  "/blog":
    "Olá! Vim pelo site da Sorrir e gostaria de agendar uma avaliação.",
  "/contato":
    "Olá! Vim pelo site e gostaria de falar sobre um orçamento odontológico.",
  "/privacidade":
    "Olá! Vim pelo site e gostaria de falar com a equipe da Sorrir.",
};

export function whatsappForPath(pathname: string) {
  if (whatsappMessages[pathname]) {
    return whatsappLink(whatsappMessages[pathname]);
  }
  if (pathname.startsWith("/servicos/")) {
    const slug = pathname.replace("/servicos/", "");
    return whatsappLink(
      `Olá! Vim pelo site e gostaria de informações sobre ${slug.replaceAll("-", " ")}.`,
    );
  }
  if (pathname.startsWith("/blog/")) {
    return whatsappLink(
      "Olá! Li um conteúdo no blog da Sorrir e gostaria de agendar uma avaliação.",
    );
  }
  if (pathname.startsWith("/casos/")) {
    return whatsappLink(
      "Olá! Vi um caso no site da Sorrir e gostaria de entender o meu caso.",
    );
  }
  return whatsappLink();
}

export const serviceOptions = [
  "Avaliação odontológica",
  "Limpeza e profilaxia",
  "Restauração",
  "Tratamento de canal",
  "Extração ou cirurgia",
  "Implante dentário",
  "Coroa ou prótese",
  "Clareamento dental",
  "Ortodontia / alinhadores",
  "Odontopediatria",
  "Urgência odontológica",
  "Convênio / atendimento para empresas",
  "Ainda não sei, preciso de orientação",
];
