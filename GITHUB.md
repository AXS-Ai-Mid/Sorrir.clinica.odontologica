# Como subir este projeto no GitHub

O projeto é um repositório Next.js completo (código + documentação). Você pode subir do seu computador ou publicar direto no GitHub.

## Opção 1 — Enviar do seu computador (recomendado)

1. Baixe o ZIP: `/download/sorrir-clinica-odontologica.zip` (adicione a URL do preview antes do caminho).
2. Extraia a pasta `sorrir-clinica-odontologica/` e abra o terminal dentro dela.
3. Confira que o `.env` **não** será enviado (ele já está no `.gitignore`).
4. Rode os comandos:

```bash
git init
git branch -M main
git add .
git commit -m "Site institucional Sorrir Clinica Odontologica com captacao de leads"
git remote add origin https://github.com/SEU-USUARIO/sorrir-clinica-odontologica.git
git push -u origin main
```

Se o repositório já existir com README remoto, use:

```bash
git pull --rebase origin main
git push -u origin main
```

## Opção 2 — Criar o repositório primeiro no GitHub

1. No GitHub: **New repository** → nome `sorrir-clinica-odontologica` → **Private** (recomendado enquanto o cliente não aprovar) → **Create repository**.
2. Copie a URL do repositório e siga os comandos da Opção 1 a partir do `git init`.

## O que está versionado

| Item | Vai para o GitHub? |
| --- | --- |
| `src/`, `public/`, configurações, `package-lock.json` | Sim |
| `README.md`, `GITHUB.md`, `conteudo/`, `scripts/` | Sim |
| `.env` (credenciais reais) | **Não** — use `.env.example` |
| `node_modules/`, `.next/`, logs | **Não** |
| `public/download/*.zip` | **Não** (apenas para download local) |

## Depois do push: publicar (Vercel + Postgres)

1. Em [vercel.com](https://vercel.com): **Add New → Project → Import Git Repository** e selecione o repositório.
2. Framework detectado: **Next.js** (build `npm run build`, sem configuração extra).
3. Em **Settings → Environment Variables**, cadastre:
   - `DATABASE_URL` — string do Postgres de produção (Neon, Supabase, Railway ou Vercel Postgres).
   - `ADMIN_PASSWORD` — senha forte para o painel `/admin`.
   - `NEXT_PUBLIC_SITE_URL` — domínio final (ex.: `https://sorrirmaringa.com.br`).
   - Opcionais: `RESEND_API_KEY`, `LEAD_NOTIFICATION_EMAIL`, `LEAD_NOTIFICATION_FROM`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`.
4. Crie a tabela `leads` no banco de produção. Duas formas:
   - Localmente, com a URL de produção no `.env`: `npx drizzle-kit push`
   - Ou execute o SQL abaixo no painel do provedor:

```sql
CREATE TABLE IF NOT EXISTS leads (
  id serial PRIMARY KEY,
  name varchar(120) NOT NULL,
  phone varchar(32) NOT NULL,
  email varchar(160),
  service varchar(140),
  profile varchar(60),
  preferred_time varchar(60),
  message text,
  consent boolean NOT NULL DEFAULT false,
  source_page varchar(180),
  status varchar(24) NOT NULL DEFAULT 'novo',
  notes text,
  notified_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at);
```

5. Em **Settings → Domains**, conecte o domínio e ajuste `NEXT_PUBLIC_SITE_URL`.
6. Faça o deploy e teste:
   - `/api/health` deve retornar `{"ok":true}`.
   - Envie um formulário de teste em `/contato` e confira o lead em `/admin`.
   - Confira `/sitemap.xml` e `/robots.txt` com o domínio final.

## Cuidados antes de tornar o repositório público

- Confirme que o `.env` nunca foi commitado (`git log --all -- .env`).
- Remova do README qualquer dado sensível do cliente.
- Use `ADMIN_PASSWORD` forte: o painel lista dados pessoais de pacientes (LGPD).
- Se trocar a senha do painel, os cookies antigos são invalidados automaticamente.
- Nunca envie credenciais por WhatsApp ou e-mail em texto aberto.

## Atualizações futuras

```bash
git add .
git commit -m "Atualiza textos da home"
git push
```

O deploy na Vercel é automático a cada push na branch `main`.
