# Materiais a solicitar ao cliente

Nenhuma mídia foi enviada na contratação. O site está publicado com imagens ilustrativas do padrão de ambiente e equipamentos, sempre sinalizadas como tal. Esta é a lista para substituir pelo material próprio.

## Prioridade 1 — antes de divulgar o site

- [ ] **Logotipo em vetor** (SVG, AI ou PDF). O site usa marca tipográfica própria até receber o arquivo.
- [ ] **Fotos da fachada** em alta resolução (mín. 1600px de largura), em dia claro, mostrando a entrada e a sinalização.
- [ ] **Fotos da recepção e das salas de atendimento**, sem pacientes, ambiente organizado.
- [ ] **Foto do responsável técnico**: nome completo, CRO e retrato profissional.
- [ ] **Confirmação do catálogo de tratamentos.** O prompt listava serviços genéricos ("prestação de serviços"); como o cliente é clínica odontológica, foi redigido catálogo odontológico com 12 tratamentos. Confirmar o que a clínica realmente realiza.
- [ ] **E-mail oficial de atendimento** (não foi informado no briefing).
- [ ] **Razão social e CNPJ** para rodapé e Política de Privacidade.

## Prioridade 2 — prova social

- [ ] **Depoimentos reais** com nome, cidade e serviço contratado, com autorização de uso.
- [ ] **Termo de autorização de uso de imagem** para casos com fotos de antes e depois.
- [ ] **Prints de avaliações do Google** (opcional), com autorização dos autores.
- [ ] **Link curto de avaliação** do Google Meu Negócio para envio após o atendimento.

## Prioridade 3 — conteúdo e conversão

- [ ] **Tabela de valores** ou faixas de preço, se a divulgação for autorizada. Sem isso, o site explica o que define o valor.
- [ ] **Vídeos curtos** (até 30s, legendados) de bastidores, orientação de higiene e apresentação da equipe.
- [ ] **Equipe**: nomes, funções, formação e tempo de casa.
- [ ] **Convênios atendidos** (lista completa e critérios de cobertura).
- [ ] **Fotos de antes e depois** com a mesma angulação e iluminação.

## Prioridade 4 — acessos e infraestrutura

- [ ] Acesso ao **Google Meu Negócio** (ou convite como administrador).
- [ ] Acesso ao **Meta Business** e ao **Instagram** para integração de métricas.
- [ ] **Domínio** definitivo e acesso ao registrador/DNS.
- [ ] Conta **Google Analytics 4** (para `NEXT_PUBLIC_GA_ID`).
- [ ] Conta **Meta Pixel** (para `NEXT_PUBLIC_META_PIXEL_ID`).
- [ ] Banco PostgreSQL de produção (Neon, Supabase, Railway ou Vercel Postgres).
- [ ] Chave de envio de e-mail (Resend) e endereço de destino dos leads.

## Especificação técnica das fotos

| Uso | Proporção | Largura mínima |
| --- | --- | --- |
| Hero da home | 4:5 (mobile) / 16:9 (desktop) | 1600px |
| Cards de serviço | 4:3 | 1200px |
| Retratos da equipe | 3:4 | 1200px |
| Galeria | 4:3 | 1600px |
| Fachada | 16:9 | 1920px |

Enviar os originais em pasta separada. A compressão para WebP é feita na publicação. Nunca usar imagem com marca d'água ou sem licença de uso.

## Pendências e suposições assumidas nesta entrega

1. **Tratamentos odontológicos** foram adotados por coerência com o segmento e com os diretórios fornecidos (DentMap, agendarconsulta, convênio odontológico) — confirmar com o cliente.
2. **Nenhum preço, nota de avaliação, número de clientes, ano de fundação ou nome de profissional foi inventado.**
3. **Fotos ilustrativas** geradas para o padrão de ambiente/equipamentos, identificadas nas páginas Galeria e Sobre.
4. **E-mail** não informado: a página de contato usa WhatsApp e telefone.
5. **Domínio** provisório em `NEXT_PUBLIC_SITE_URL` — deve ser trocado antes do lançamento e no Google Meu Negócio.
6. **Depoimentos** não publicados por falta de autorização — página mantém a estrutura e aponta para os canais verificáveis.
