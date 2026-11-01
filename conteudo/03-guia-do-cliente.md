# Guia do cliente — como editar o site e usar o painel

## 1. Onde ficam os textos

| O que você quer mudar | Arquivo |
| --- | --- |
| Nome, telefone, endereço, horário, redes sociais | `src/lib/site.ts` |
| Textos dos tratamentos, o que está incluso, FAQ e prazos | `src/lib/services.ts` |
| Perguntas frequentes gerais | `src/lib/faqs.ts` |
| Diferenciais, etapas do atendimento, missão/valores e estrutura | `src/lib/company.ts` |
| Casos e protocolos clínicos | `src/lib/cases.ts` |
| Artigos do blog | `src/lib/posts.ts` |
| Cores, tipografia, espaçamentos e componentes | `src/app/globals.css` |
| Imagens | `public/images/` |

> Todos os arquivos de conteúdo são TypeScript simples, com texto entre aspas. Basta editar o texto, salvar e publicar. Não altere as chaves (`slug`, `icon`, `category`).

## 2. Cadastrar um novo artigo no blog

1. Abra `src/lib/posts.ts`.
2. Copie um bloco existente e altere:
   - `slug` (URL, sem acentos e com hífens);
   - `title`, `excerpt`, `category`, `date`, `dateLabel`, `readingTime`;
   - `blocks` (use `p`, `h2`, `h3`, `list` e `callout`).
3. Salve. A página e o `sitemap.xml` são atualizados automaticamente.

## 3. Painel de leads (`/admin`)

1. Acesse `https://SEU-DOMINIO/admin`.
2. Informe a senha definida em `ADMIN_PASSWORD`.
3. Cada pedido mostra: nome, WhatsApp clicável, e-mail, tratamento, perfil, melhor horário, origem (página do site), consentimento LGPD e mensagem.
4. Atualize a situação: `Novo → Contatado → Orçamento enviado → Agendado → Fechado/Perdido`.
5. Use "Anotações internas" para registrar o retorno combinado.
6. "Exportar CSV" gera a planilha com todos os registros (abre no Excel com acentuação correta).

**Fluxo recomendado de resposta:** abrir o WhatsApp pelo botão do lead em até 1 dia útil, registrar a situação e anotar o próximo passo. Pedidos de exclusão de dados devem ser atendidos em até 15 dias (LGPD).

## 4. Formulário e notificações

- O formulário grava no banco e devolve ao paciente um link de WhatsApp com os dados já preenchidos.
- Para receber aviso por e-mail, configure `RESEND_API_KEY` e `LEAD_NOTIFICATION_EMAIL` (veja `.env.example`).
- Proteções ativas: campo honeypot invisível, tempo mínimo de preenchimento e limite de 6 envios por IP a cada 10 minutos.

## 5. Publicar alterações

```bash
git add .
git commit -m "Atualiza horário de atendimento"
git push
```

Se o projeto estiver na Vercel, o deploy é automático. Para rodar localmente: `npm install && npm run dev`.

## 6. Cuidados com imagens

- Formato recomendado: JPG/WebP com no máximo 1600px de largura e até 300 KB.
- Nomeie com descrição (`fachada-av-cerro-azul.jpg`), nunca `IMG_1234.jpg`.
- Atualize também o texto alternativo (`alt`) — ele aparece para leitores de tela e no Google.
- Fotos de pacientes exigem autorização por escrito antes de publicar.

## 7. Rotina sugerida

- **Diário:** responder leads em até 1 dia útil.
- **Semanal:** revisar o painel e as avaliações do Google.
- **Mensal:** publicar 1 conteúdo no blog e conferir o envio do formulário.
- **Trimestral:** revisar textos, valores, horários e fotos; testar WhatsApp e telefone em Android e iPhone.
