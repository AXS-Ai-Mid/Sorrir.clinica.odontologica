export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Prevenção" | "Tratamentos" | "Estética" | "Ortodontia" | "Urgência" | "Escolha da clínica";
  date: string;
  dateLabel: string;
  readingTime: string;
  image?: string;
  imageAlt?: string;
  blocks: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "quanto-custa-avaliacao-odontologica-em-maringa",
    title: "Quanto custa uma avaliação odontológica em Maringá?",
    excerpt:
      "O que define o valor da avaliação, o que ela precisa incluir e as perguntas certas antes de marcar.",
    category: "Tratamentos",
    date: "2026-09-18",
    dateLabel: "18 de setembro de 2026",
    readingTime: "5 min de leitura",
    image: "/images/recepcao.jpg",
    imageAlt: "Recepção de clínica odontológica com poltronas e balcão azul",
    blocks: [
      {
        type: "p",
        text: "Quem procura atendimento em Maringá costuma comparar dois ou três orçamentos antes de decidir. O primeiro passo em qualquer um deles é a avaliação. Entender o que esse valor cobre evita comparação injusta entre propostas diferentes.",
      },
      {
        type: "h2",
        text: "O que costuma definir o valor da avaliação",
      },
      {
        type: "list",
        items: [
          "Tempo de consulta e complexidade do exame clínico.",
          "Necessidade de exames de imagem, como radiografia ou tomografia.",
          "Quantidade de especialidades envolvidas no plano.",
          "Se o profissional entrega um plano de tratamento por escrito.",
        ],
      },
      {
        type: "p",
        text: "Uma avaliação completa não termina com 'está tudo bem'. Ela termina com um documento: o que precisa ser feito, o que pode esperar, o que é acompanhamento e quanto custa cada etapa.",
      },
      {
        type: "h2",
        text: "Perguntas para fazer antes de agendar",
      },
      {
        type: "list",
        items: [
          "A avaliação inclui exames de imagem? Se não, qual o custo separado?",
          "Recebo o plano de tratamento por escrito com valores?",
          "Qual o prazo para iniciar o tratamento depois da avaliação?",
          "Vocês emitem nota fiscal e qual o critério de garantia?",
        ],
      },
      {
        type: "callout",
        title: "Sem preço público, sem promessa",
        text: "Na Sorrir, o valor depende do que a avaliação encontra. O orçamento é enviado por escrito, com etapas e critérios, e não existe cobrança surpresa no meio do tratamento.",
      },
      {
        type: "p",
        text: "Se você está comparando clínicas em Maringá, use o mesmo roteiro de perguntas para todas. A comparação passa a ser de escopo, não apenas de número.",
      },
    ],
  },
  {
    slug: "clareamento-dental-em-maringa-o-que-esperar",
    title: "Clareamento dental em Maringá: o que esperar e quanto tempo dura",
    excerpt:
      "Como funciona, por que a sensibilidade aparece, o que o clareamento não resolve e como manter o tom.",
    category: "Estética",
    date: "2026-09-05",
    dateLabel: "5 de setembro de 2026",
    readingTime: "6 min de leitura",
    image: "/images/ortodontia.jpg",
    imageAlt: "Placa transparente e modelo de dentes sobre superfície clara",
    blocks: [
      {
        type: "p",
        text: "Clareamento é um dos pedidos mais comuns em consultas de estética. Também é um dos que mais geram dúvida, porque envolve expectativa de cor, sensibilidade e durabilidade.",
      },
      { type: "h2", text: "O que o clareamento faz" },
      {
        type: "p",
        text: "O procedimento age sobre pigmentos que se acumulam internamente no dente, vindos principalmente de café, chá, refrigerante e cigarro. Ele não muda a cor de restaurações, coroas e próteses antigas — essas peças mantêm o tom original.",
      },
      { type: "h2", text: "Por que a sensibilidade aparece" },
      {
        type: "p",
        text: "Durante o processo, os túbulos dentinários ficam mais permeáveis e o dente responde a frio. É um efeito conhecido e geralmente temporário. Por isso a avaliação prévia importa: tratar cáries e gengiva antes diminui o desconforto e evita interromper o tratamento.",
      },
      {
        type: "callout",
        title: "Nem toda mancha é clareamento",
        text: "Manchas por fluorose, tetraclicina ou restaurações antigas podem exigir outro tratamento. A indicação correta só aparece no exame clínico.",
      },
      { type: "h2", text: "Quanto tempo o resultado dura" },
      {
        type: "p",
        text: "O tom não é permanente. Hábitos como fumo e consumo frequente de café aceleram o retorno da cor. A manutenção é individual: em alguns casos, uma nova aplicação em consultório no intervalo definido na avaliação resolve.",
      },
      {
        type: "list",
        items: [
          "Mantenha a limpeza profissional no intervalo indicado.",
          "Reduza café e cigarro nas primeiras horas após cada aplicação.",
          "Use dessensibilizante apenas com orientação.",
          "Avise a equipe se a sensibilidade passar de desconforto leve.",
        ],
      },
    ],
  },
  {
    slug: "dor-de-dente-quando-procurar-urgencia",
    title: "Dor de dente: quando procurar atendimento de urgência",
    excerpt:
      "Sinais que não podem esperar a próxima consulta de rotina e o que fazer enquanto aguarda atendimento.",
    category: "Urgência",
    date: "2026-08-22",
    dateLabel: "22 de agosto de 2026",
    readingTime: "4 min de leitura",
    image: "/images/instrumentos.jpg",
    imageAlt: "Instrumentos odontológicos em bandeja esterilizada",
    blocks: [
      {
        type: "p",
        text: "Dor de dente tem causas diferentes e, portanto, tratamentos diferentes. Cárie profunda, inflamação da polpa, gengiva inflamada e fratura podem gerar sintomas parecidos. A avaliação é o que separa cada caso.",
      },
      { type: "h2", text: "Sinais de que a espera não é uma boa ideia" },
      {
        type: "list",
        items: [
          "Dor forte e latejante que piora à noite.",
          "Inchaço no rosto ou na gengiva.",
          "Febre junto com dor dental.",
          "Dificuldade para abrir a boca ou engolir.",
          "Sangramento que não para após trauma.",
        ],
      },
      {
        type: "callout",
        title: "Inchaço extenso é emergência",
        text: "Inchaço que evolui rápido, febre ou dificuldade para respirar ou engolir exigem pronto atendimento médico-hospitalar. Não espere a clínica abrir.",
      },
      { type: "h2", text: "O que não fazer enquanto espera" },
      {
        type: "list",
        items: [
          "Não coloque aspirina em cima da gengiva: isso queima o tecido.",
          "Não tome antibiótico sem prescrição.",
          "Não tente furar ou lixar o dente por conta própria.",
          "Evite alimentos muito quentes e açucarados na região da dor.",
        ],
      },
      {
        type: "p",
        text: "O primeiro atendimento controla a dor e a infecção. O tratamento definitivo é planejado depois, com orçamento por escrito e etapas claras. Guardar o plano evita retrabalho e gastos repetidos.",
      },
    ],
  },
  {
    slug: "como-escolher-uma-clinica-odontologica-em-maringa",
    title: "Como escolher uma clínica odontológica em Maringá",
    excerpt:
      "Sete critérios objetivos para comparar propostas sem se perder no preço mais baixo.",
    category: "Escolha da clínica",
    date: "2026-08-08",
    dateLabel: "8 de agosto de 2026",
    readingTime: "5 min de leitura",
    image: "/images/consultorio.jpg",
    imageAlt: "Consultório odontológico com cadeira e refletor",
    blocks: [
      {
        type: "p",
        text: "A escolha da clínica costuma acontecer no celular, entre uma pesquisa no Google e uma conversa no WhatsApp. Alguns critérios objetivos ajudam a diferenciar propostas que parecem iguais.",
      },
      {
        type: "list",
        items: [
          "A clínica tem endereço fixo, localizado e com mapa?",
          "O orçamento traz etapas, valores e o que está incluído?",
          "Fica claro quem é o profissional responsável pelo seu caso?",
          "A clínica emite nota fiscal e informa critérios de garantia?",
          "Existe documentação do planejamento com exames?",
          "As dúvidas são respondidas antes do procedimento, ou só na cadeira?",
          "O prazo informado é compatível com o que você entendeu?",
        ],
      },
      { type: "h2", text: "Preço baixo sem escopo é preço incompleto" },
      {
        type: "p",
        text: "Duas propostas de 'tratamento completo' podem conter coisas muito diferentes: uma inclui exames, coroa, retorno e material nobre; outra inclui apenas a primeira etapa. Comparar linha por linha evita a surpresa de um valor que dobra no meio do caminho.",
      },
      {
        type: "callout",
        title: "Peça por escrito",
        text: "Toda combinação que ficar apenas falada se perde. Orçamento, prazo, garantia e condições de pagamento precisam estar no documento que você leva para casa.",
      },
      { type: "h2", text: "Localização importa mais do que parece" },
      {
        type: "p",
        text: "Tratamentos costumam exigir retornos. Uma clínica perto do trabalho ou de casa aumenta a chance de você manter as manutenções em dia. Em Maringá, a Zona 2 é uma região central, com acesso por avenidas principais.",
      },
    ],
  },
  {
    slug: "implante-dentario-etapas-prazos-e-valor",
    title: "Implante dentário: etapas, prazos e o que define o valor",
    excerpt:
      "Do exame de imagem à coroa final: por que o orçamento muda de pessoa para pessoa.",
    category: "Tratamentos",
    date: "2026-07-25",
    dateLabel: "25 de julho de 2026",
    readingTime: "6 min de leitura",
    image: "/images/hero-clinica.jpg",
    imageAlt: "Sala de atendimento odontológico clara e equipada",
    blocks: [
      {
        type: "p",
        text: "Implantar é repor a raiz do dente perdido com um pino de titânio que serve de base para a coroa. O processo é previsível quando bem planejado, mas o tempo não é igual para todo mundo.",
      },
      { type: "h2", text: "As etapas comuns a um caso de implante" },
      {
        type: "list",
        items: [
          "Avaliação clínica e exames de imagem para medir osso.",
          "Plano por escrito com etapas, prazos estimados e valores.",
          "Cirurgia de instalação do implante, com anestesia local.",
          "Período de cicatrização e conferência da integração.",
          "Instalação da coroa e ajuste de mordida.",
          "Revisões de manutenção.",
        ],
      },
      { type: "h2", text: "O que pode mudar o prazo" },
      {
        type: "p",
        text: "Volume ósseo, hábitos como fumar, doenças controladas ou não, e a necessidade de enxerto influenciam a cicatrização. Por isso prometer data fechada antes de examinar é sinal de proposta mal feita.",
      },
      { type: "h2", text: "O que define o valor" },
      {
        type: "list",
        items: [
          "Quantidade de implantes e de dentes a repor.",
          "Necessidade de enxerto ósseo ou de procedimentos complementares.",
          "Tipo de coroa ou prótese escolhida.",
          "Exames e etapas de laboratório.",
        ],
      },
      {
        type: "callout",
        title: "Manutenção não é opcional",
        text: "O acompanhamento periódico é o que mantém o implante saudável. A rotina inclui controle da gengiva, higiene específica e ajuste de mordida quando necessário.",
      },
    ],
  },
  {
    slug: "aparelho-em-adultos-vale-a-pena",
    title: "Aparelho ortodôntico em adultos: vale a pena?",
    excerpt:
      "O que muda no tratamento depois dos 30, as opções discretas e o papel da contenção.",
    category: "Ortodontia",
    date: "2026-07-10",
    dateLabel: "10 de julho de 2026",
    readingTime: "5 min de leitura",
    image: "/images/fachada.jpg",
    imageAlt: "Fachada moderna de clínica em avenida arborizada",
    blocks: [
      {
        type: "p",
        text: "Muitos adultos acreditam que perderam a idade do aparelho. Não existe limite de idade para movimentar dentes: existe condição de gengiva e osso. Com acompanhamento, o tratamento é possível em qualquer fase da vida.",
      },
      { type: "h2", text: "O que muda no adulto" },
      {
        type: "list",
        items: [
          "A gengiva precisa estar saudável antes e durante o tratamento.",
          "Movimentos tendem a ser mais lentos que na adolescência.",
          "Restaurações e próteses existentes precisam entrar no planejamento.",
          "A constância nas manutenções pesa mais no resultado.",
        ],
      },
      { type: "h2", text: "Aparelho fixo ou alinhador?" },
      {
        type: "p",
        text: "Alinhadores são discretos e removíveis, e funcionam bem em muitos casos. Movimentos complexos e situações específicas de mordida podem ter melhor indicação com aparelho fixo. A escolha depende de exames, não de preferência isolada.",
      },
      {
        type: "callout",
        title: "O papel da contenção",
        text: "Terminar o tratamento não é o fim. Sem contenção, os dentes tendem a voltar parcialmente à posição original. O tipo e o tempo de uso são definidos no fim do tratamento.",
      },
      {
        type: "p",
        text: "Se você está avaliando ortodontia em Maringá, peça a estimativa de tempo e as manutenções previstas. Faltar às consultas é o principal fator que estica o prazo.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export const postCategories = Array.from(new Set(posts.map((post) => post.category)));

export function relatedPosts(slug: string, limit = 3) {
  const current = getPost(slug);
  return posts
    .filter((post) => post.slug !== slug)
    .sort((a, b) => {
      const aMatch = current && a.category === current.category ? 1 : 0;
      const bMatch = current && b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}
