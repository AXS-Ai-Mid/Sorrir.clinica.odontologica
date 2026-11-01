# SEO local aplicado — Sorrir Clínica Odontológica

## NAP (usar idêntico no Google Meu Negócio, Instagram, diretórios e site)

- **Nome:** Sorrir Clínica Odontológica
- **Endereço:** Av. Cerro Azul, 1028, Zona 2 — Maringá/PR — CEP 87010-000
- **Telefone/WhatsApp:** (44) 98822-9844 — `https://wa.me/5544988229844`
- **Horário:** segunda a sexta, 08:00–12:00 e 14:00–18:00
- **Site:** definir `NEXT_PUBLIC_SITE_URL` com o domínio final

## Titles e descriptions por página

| Página | Title | Description |
| --- | --- | --- |
| Home | Clínica odontológica na Zona 2 \| Sorrir em Maringá | Clínica odontológica em Maringá com avaliação clara, orçamento por escrito e resposta em até 1 dia útil. Prevenção, estética, reabilitação, empresas e convênios. |
| Serviços | Tratamentos odontológicos em Maringá \| Sorrir Clínica Odontológica | Avaliação, limpeza, restaurações, canal, implantes, coroas, clareamento, ortodontia, odontopediatria, urgência e convênios. Veja o que cada tratamento inclui. |
| Serviço (detalhe) | [Tratamento] em Maringá \| Sorrir Clínica Odontológica | Texto curto do tratamento + atendimento na Zona 2 com orçamento por escrito e resposta em até 1 dia útil. |
| Casos e resultados | Casos e resultados odontológicos \| Sorrir Clínica Odontológica em Maringá | Protocolos de atendimento: implantes, clareamento, ortodontia, urgência, restaurações e atendimento a empresas, com etapas e critérios técnicos. |
| Como funciona | Como funciona o atendimento \| Sorrir Clínica Odontológica em Maringá | As 5 etapas: contato, avaliação, plano por escrito, execução e acompanhamento — com prazos, o que depende de você e documentação. |
| Sobre | Sobre a clínica \| Sorrir Clínica Odontológica em Maringá | Conheça a Sorrir, na Zona 2 em Maringá: atendimento próprio, responsabilidade técnica, estrutura e compromissos por escrito. |
| Galeria | Galeria da clínica \| Sorrir Clínica Odontológica em Maringá | Veja o ambiente, a estrutura e os equipamentos da clínica na Zona 2. Fotos com descrição e filtro por categoria. |
| Depoimentos | Depoimentos e avaliações \| Sorrir Clínica Odontológica | Onde ler avaliações reais da clínica em Maringá, nossa política de publicação e como enviar o seu depoimento. |
| FAQ | Perguntas frequentes \| Sorrir Clínica Odontológica em Maringá | Quanto custa, como pedir orçamento, prazo, formas de pagamento, nota fiscal, convênios e urgência: dúvidas comuns respondidas. |
| Blog | Blog e dicas de saúde bucal \| Sorrir Clínica Odontológica | Conteúdos sobre custo de tratamento em Maringá, clareamento, dor de dente, implante, ortodontia em adultos e escolha de clínica. |
| Contato | Contato, endereço e horário \| Sorrir Clínica Odontológica | WhatsApp (44) 98822-9844, Av. Cerro Azul, 1028, Zona 2, Maringá. Atendimento de segunda a sexta, 8h–12h e 14h–18h. |
| Privacidade | Política de Privacidade e cookies \| Sorrir Clínica Odontológica | Como tratamos dados pessoais e cookies, base legal, compartilhamento, direitos do titular e canal de contato para LGPD. |

## Palavras-chave

**Principal (home):** clínica odontológica em Maringá
**Secundárias:** dentista na Zona 2 Maringá · orçamento odontológico em Maringá · implante dentário Maringá · clareamento dental Maringá · dentista perto de mim Maringá · clínica odontológica perto de mim
**Cauda longa (blog/FAQ):** quanto custa uma avaliação odontológica em Maringá · quanto custa clareamento dental em Maringá · dor de dente quando procurar urgência · como escolher uma clínica odontológica em Maringá · implante dentário etapas e prazos · aparelho em adultos vale a pena

## Dados estruturados implementados (JSON-LD)

- `Dentist` (LocalBusiness) com endereço, telefone, `openingHoursSpecification`, `areaServed`, `sameAs`, `hasMap` e `makesOffer`.
- `Organization` com logo e perfis sociais (`sameAs`) + `WebSite`.
- `Service` + `Offer` em cada tratamento (sem preço fixo: valor por escrito após avaliação).
- `FAQPage` na home, na página de FAQ, em cada serviço e em Como Funciona.
- `BreadcrumbList` em todas as páginas internas.
- `BlogPosting` nos artigos, `ImageGallery` na galeria, `MedicalWebPage` em Sobre/Casos.
- **Não há `aggregateRating`**: nenhuma nota é exibida porque não há avaliação real coletada e autorizada. Incluir somente após obter avaliações verificáveis.

## Arquivos técnicos

- `sitemap.xml` e `robots.txt` gerados dinamicamente pelo Next.js.
- Canonical por página, `lang="pt-BR"`, Open Graph e Twitter Card.
- Página 404 com status correto e atalhos úteis.
- URLs amigáveis com palavra-chave: `/servicos/implantes-dentarios`, `/blog/quanto-custa-avaliacao-odontologica-em-maringa`.

## Checklist do Google Meu Negócio

- [ ] Reivindicar/verificar o perfil com o NAP exato do site.
- [ ] Categoria principal: Dentista. Secundárias: Clínica odontológica, Ortodontista, Implantodontista.
- [ ] Publicar fotos reais: fachada, recepção, consultórios, equipe e atendimento.
- [ ] Cadastrar horário (seg–sex, 8h–12h e 14h–18h) e feriados.
- [ ] Adicionar serviços com descrição igual à do site.
- [ ] Incluir link do site com UTM (ex.: `?utm_source=google&utm_medium=gbp`) para medir retorno.
- [ ] Criar link curto de avaliação e enviar após cada atendimento; responder todas as avaliações.
- [ ] Manter Facebook/Instagram e DentMap com o mesmo telefone e endereço.

## Rotina de manutenção recomendada

- Publicar 1 a 2 conteúdos por mês no blog (pautas já mapeadas).
- Revisar textos, horários e serviços a cada trimestre.
- Acompanhar semanalmente os leads em `/admin` e o tempo médio de resposta.
- Revisar metadados quando um serviço novo for adicionado (novo `title` e `description`).
