import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidade e cookies",
  description:
    "Como a Sorrir Clínica Odontológica trata dados pessoais e cookies, base legal, compartilhamento, direitos do titular e canal de contato para LGPD.",
  path: "/privacidade",
  keywords: ["política de privacidade clínica odontológica", "LGPD odontologia Maringá"],
});

const sections = [
  {
    title: "1. Quem é o controlador",
    body: [
      `${site.name}, com endereço em ${site.fullAddress}, é a controladora dos dados pessoais tratados neste site. O canal de contato para assuntos de privacidade é o WhatsApp ${site.phoneDisplay} ou o endereço acima, aos cuidados do encarregado de dados.`,
      "Este site tem como finalidade apresentar os serviços da clínica, divulgar conteúdo informativo e receber pedidos de orçamento. Não realizamos venda online nem processamos pagamentos nesta página.",
    ],
  },
  {
    title: "2. Quais dados coletamos",
    body: [
      "Dados fornecidos por você: nome, WhatsApp, e-mail (opcional), tratamento de interesse, perfil de atendimento, melhor horário de contato e a mensagem que você escrever no formulário.",
      "Dados de navegação: páginas visitadas, origem do acesso e interações, quando você autoriza cookies de análise. Também registramos a página de origem do formulário para entender qual conteúdo gera contato.",
      "Dados técnicos de segurança: endereço IP e data/hora do envio, usados para proteção contra spam e fraude.",
    ],
  },
  {
    title: "3. Finalidade e base legal",
    body: [
      "Pedidos de orçamento e contato: usamos seus dados para responder ao pedido e organizar o atendimento. Base legal: consentimento do titular (art. 7º, I da LGPD), manifestado no envio do formulário.",
      "Obrigações legais e fiscais: quando o atendimento se concretiza, mantemos os registros necessários de prontuário e emissão de nota fiscal. Base legal: cumprimento de obrigação legal e regulatória e tutela da saúde (art. 7º, II e VIII).",
      "Análise de audiência: entender o desempenho do site e melhorar o conteúdo, sempre mediante consentimento de cookies e com IP anonimizado.",
      "Não utilizamos dados de contato para envio de propaganda de terceiros.",
    ],
  },
  {
    title: "4. Compartilhamento com terceiros",
    body: [
      "WhatsApp (Meta): quando você escolhe continuar a conversa pelo WhatsApp, a mensagem é transportada pela plataforma, sujeita à política de privacidade dela.",
      "Google (Maps, Analytics): usamos mapa incorporado do Google Maps e, com seu consentimento, o Google Analytics 4 para medir audiência. A Meta Pixel pode ser ativada com seu consentimento, para medir a campanha que trouxe você ao site.",
      "Provedores técnicos: hospedagem do site, banco de dados e envio de e-mail transacional, que processam dados apenas em nome da clínica e com obrigações de confidencialidade.",
      "Não vendemos, alugamos ou cedemos dados pessoais para terceiros.",
    ],
  },
  {
    title: "5. Dados de saúde",
    body: [
      "O formulário do site não é canal para envio de dados de saúde detalhados. Pedimos que você não envie exames, laudos ou histórico clínico por ele.",
      "O detalhamento clínico é feito na avaliação presencial e registrado em prontuário, com acesso restrito à equipe de atendimento e guarda conforme as normas do Conselho Federal de Odontologia.",
    ],
  },
  {
    title: "6. Cookies",
    body: [
      "Cookies essenciais: necessários para o funcionamento e a segurança do site. Não podem ser desativados sem prejuízo da navegação.",
      "Cookies de análise e marketing: carregados apenas depois de você clicar em Aceitar todos no banner de consentimento. Se escolher Somente essenciais, as ferramentas de análise não são carregadas.",
      "Você pode limpar os cookies e o armazenamento local do navegador a qualquer momento para redefinir sua escolha.",
    ],
  },
  {
    title: "7. Prazo de retenção",
    body: [
      "Pedidos de orçamento não convertidos em atendimento são mantidos pelo tempo necessário ao contato comercial e, depois, excluídos ou anonimizados.",
      "Prontuários e documentos fiscais são mantidos pelos prazos legais aplicáveis. Registros de acesso são guardados por prazo definido na legislação de proteção de dados e no Marco Civil da Internet.",
    ],
  },
  {
    title: "8. Seus direitos",
    body: [
      "Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação de dados tratados com consentimento e informações sobre compartilhamento.",
      "Para exercer qualquer direito, fale pelo WhatsApp oficial informando seu nome e o pedido. Responderemos em até 15 dias, nos termos da LGPD.",
      "Se preferir, você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).",
    ],
  },
  {
    title: "9. Segurança",
    body: [
      "O site usa conexão criptografada (HTTPS). O acesso ao painel de leads é restrito por senha e as informações são armazenadas em banco de dados com controle de acesso.",
      "Em caso de incidente de segurança com risco relevante aos titulares, a clínica comunicará os afetados e a ANPD conforme a legislação.",
    ],
  },
  {
    title: "10. Atualizações desta política",
    body: [
      "Esta política pode ser atualizada para refletir mudanças no site, nas ferramentas ou na legislação. A data da última atualização aparece no topo da página.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade e LGPD"
        title="Política de Privacidade"
        description="Como a Sorrir Clínica Odontológica usa os dados enviados pelo site, com finalidade, base legal, compartilhamento e seus direitos como titular."
        breadcrumbs={[{ label: "Política de Privacidade" }]}
      >
        <p className="text-[13px] text-brand-200">
          Última atualização: 30 de outubro de 2026
        </p>
      </PageHero>

      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14 lg:py-16">
        <article>
          <div className="prose-clinic">
            {sections.map((section) => (
              <section key={section.title} className="mb-7">
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-5">
            <h2 className="text-[17px] font-extrabold text-brand-950">
              Como falar sobre seus dados
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-brand-900">
              Envie sua solicitação para o WhatsApp oficial {site.phoneDisplay} ou
              presencialmente em {site.fullAddress}, aos cuidados do encarregado de dados.
              Informe seu nome completo e o que deseja fazer (acesso, correção ou exclusão).
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={whatsappLink("Olá! Gostaria de exercer um direito previsto na LGPD.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-brand-700 px-4 text-sm font-semibold text-white hover:bg-brand-800"
              >
                <Icon name="whatsapp" size={17} />
                Solicitar pelo WhatsApp
              </a>
              <Link
                href="/contato"
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-brand-200 bg-white px-4 text-sm font-semibold text-brand-800 hover:bg-brand-50"
              >
                Ver página de contato
              </Link>
            </div>
          </div>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-mist-dark bg-white p-6">
            <SectionHeading eyebrow="Resumo" title="Em uma frase" as="h2" />
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              Usamos seus dados para responder ao seu pedido de atendimento. Não vendemos
              dados, não fazemos propaganda de terceiros e você pode pedir a exclusão quando
              quiser.
            </p>
            <ul className="mt-4 grid gap-2.5">
              {[
                "Consentimento no formulário de contato.",
                "Cookies de análise só com autorização.",
                "Exclusão sob solicitação, respeitando prazos legais.",
                "Canal direto para o titular dos dados.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px] text-ink-soft">
                  <Icon name="check" size={15} className="mt-0.5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 rounded-2xl border border-mist-dark bg-mist p-6">
            <h2 className="text-[15px] font-bold text-brand-950">Dados da clínica</h2>
            <dl className="mt-3 grid gap-2 text-[13px]">
              <div>
                <dt className="font-semibold text-brand-900">Razão social</dt>
                <dd className="text-ink-soft">{site.legalName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-900">Endereço</dt>
                <dd className="text-ink-soft">{site.fullAddress}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-900">Telefone / WhatsApp</dt>
                <dd className="text-ink-soft">{site.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-900">Atendimento</dt>
                <dd className="text-ink-soft">{site.hoursLabel}</dd>
              </div>
            </dl>
            <p className="mt-3 text-[11.5px] leading-relaxed text-ink-soft">
              CNPJ e e-mail oficial serão incluídos nesta página assim que informados pela
              clínica.
            </p>
          </div>
        </aside>
      </div>

      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Política de Privacidade", href: "/privacidade" }]),
          {
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            name: "Política de Privacidade da Sorrir Clínica Odontológica",
            url: `${site.url}/privacidade`,
            inLanguage: "pt-BR",
          },
        ]}
      />
    </>
  );
}
