# Sorrir Clínica Odontológica — site + captação de leads

Site institucional com captação de orçamentos para a **Sorrir Clínica Odontológica** (Av. Cerro Azul, 1028 — Zona 2, Maringá/PR). Next.js (App Router) + PostgreSQL/Drizzle, mobile-first, SEO local e painel de leads protegido.

## Download e publicação no GitHub

- **Pacote pronto para download:** `public/download/sorrir-clinica-odontologica.zip` (acessível em `/download/sorrir-clinica-odontologica.zip`). Contém todo o código, imagens, documentação e exemplos de ambiente — sem `node_modules`, `.next` ou `.env`.
- **Para regerar o pacote:** `bash scripts/export-zip.sh`
- **Passo a passo de GitHub + deploy:** veja [`GITHUB.md`](./GITHUB.md).
- **Conteúdo entregue:** `conteudo/01-textos-site.md`, `02-seo-local.md`, `03-guia-do-cliente.md`, `04-materiais-a-solicitar.md`.
- **Antes de subir:** copie `.env.example` para `.env`, defina `ADMIN_PASSWORD` e nunca versione o `.env` (já está no `.gitignore`).

## Como rodar

```bash
npm install
npx drizzle-kit push     # cria a tabela leads
npm run dev              # http://localhost:3000
```

Variáveis de ambiente (`.env`):

| Variável | Uso |
| --- | --- |
| `DATABASE_URL` | Conexão PostgreSQL (obrigatória) |
| `ADMIN_PASSWORD` | Senha do painel `/admin` (padrão de demonstração: `sorrir2026`) |
| `NEXT_PUBLIC_SITE_URL` | Domínio canônico (ex.: `https://sorrirmaringa.com.br`) |
| `RESEND_API_KEY` / `LEAD_NOTIFICATION_EMAIL` | Aviso de novo lead por e-mail (opcional) |
| `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_META_PIXEL_ID` | GA4 e Meta Pixel, carregados só após consentimento de cookies |

## Mapa do site

- `/` — hero, prova de confiança, tratamentos, diferenciais, prova social verificável, processo, sobre, FAQ, formulário
- `/servicos` e `/servicos/[slug]` — 12 tratamentos, com indicação, o que está incluso, prazo, o que define o valor e FAQ por item
- `/casos` e `/casos/[slug]` — protocolos de atendimento documentados (sem foto/relato sem autorização)
- `/como-funciona` — 5 etapas, prazos, o que depende do paciente, documentação e acompanhamento
- `/sobre` — história, responsabilidade técnica, missão/visão/valores, função da equipe, estrutura, cadastros
- `/galeria` — grade com filtro e lightbox, política de imagens
- `/depoimentos` — canais de avaliação reais (Google, DentMap, agendarconsulta, convênio) e política de depoimentos
- `/faq` — 12 perguntas + FAQPage schema
- `/blog` e `/blog/[slug]` — 6 artigos com índice, relacionados e compartilhamento
- `/contato` — canais clicáveis, formulário LGPD, mapa, horários, como chegar, pagamento
- `/privacidade` — LGPD e cookies (10 seções)
- `/admin` — painel de leads (login em `/admin/login`), exportação CSV em `/api/admin/export`
- `/api/leads` (POST) — validação, honeypot, limite por IP, consentimento e handoff para WhatsApp
- `/api/health` — healthcheck
- `not-found.tsx`, `sitemap.xml`, `robots.txt`

## Lead → atendimento

1. O formulário envia para `POST /api/leads` (honeypot + tempo mínimo + limite de 6 envios/10 min por IP).
2. O lead é gravado em `leads` com consentimento, origem e situação inicial `novo`.
3. A resposta devolve um link `wa.me` com a mensagem pré-preenchida do próprio paciente.
4. Se `RESEND_API_KEY` + `LEAD_NOTIFICATION_EMAIL` existirem, um e-mail é disparado e `notified_at` é marcado.
5. No painel, a equipe acompanha a situação (`novo`, `contatado`, `orcamento_enviado`, `agendado`, `fechado`, `perdido`), adiciona anotações internas e exporta CSV.

## SEO e dados estruturados

Titles/descriptions únicos por página, canonical, Open Graph/Twitter, `lang="pt-BR"`, H1 único, breadcrumbs, alt descritivo, `sitemap.xml` e `robots.txt`. JSON-LD: `Dentist` (LocalBusiness), `Organization`, `WebSite`, `Service`, `FAQPage`, `BreadcrumbList`, `BlogPosting`, `ImageGallery`. Sem `aggregateRating` e sem depoimentos inventados.

## Acessibilidade e performance

Link “pular para o conteúdo”, foco visível, contraste AA (CTA azul `#0042AA`, verde WhatsApp `#0B7A43`), formulário com labels visíveis e mensagens de erro, acordeões com `<details>` nativos, `prefers-reduced-motion`, imagens com `next/image` e dimensões definidas, mapa com `loading="lazy"`.

## Materiais a solicitar ao cliente

1. Logotipo em vetor (SVG/AI/PDF) — o site usa marca tipográfica própria até receber o arquivo.
2. Fotos próprias em alta resolução: fachada, recepção, salas, instrumentais e equipe. As imagens atuais são ilustrativas e estão sinalizadas na Galeria/Sobre.
3. Nome, CRO e retrato do responsável técnico.
4. Depoimentos reais com autorização de uso e termo assinado para casos com foto.
5. Tabela de valores, se autorizada a divulgação (hoje o site explica o que define o valor).
6. E-mail oficial, CNPJ/razão social para o rodapé e política de privacidade.
7. Domínio definitivo e acessos do Google Meu Negócio, GA4 e Meta Business.
8. Vídeos curtos de bastidores (até 30s, legendados) para a Galeria.

## Pendências de informação (suposições sinalizadas)

- **Serviços clínicos:** a ficha do projeto listava serviços genéricos (“prestação de serviços”). Como o cliente é uma clínica odontológica e os diretórios enviados são de odontologia, o catálogo foi redigido com tratamentos odontológicos. Confirmar o escopo real antes de publicar.
- **Nenhum preço, nota, número de clientes, ano de fundação ou nome de profissional foi inventado.** O site informa o compromisso de resposta em até 1 dia útil e os critérios de documentação fornecidos no briefing.
- **Imagens:** geradas para representar o padrão de ambiente/equipamentos e marcadas como ilustrativas — substituir pelo ensaio fotográfico real.
- **E-mail:** não foi informado, então a página de contato usa WhatsApp/telefone como canais.
- **Domínio:** `NEXT_PUBLIC_SITE_URL` deve ser definido com o domínio final antes do lançamento.
