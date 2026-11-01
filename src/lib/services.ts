import type { IconName } from "@/components/icons";

export type ContentFaq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  category:
    | "Prevenção"
    | "Clínico"
    | "Reabilitação"
    | "Estética"
    | "Ortodontia"
    | "Urgência"
    | "Empresas e convênios";
  icon: IconName;
  short: string;
  intro: string;
  forWhom: string[];
  resolves: string;
  included: string[];
  timing: string;
  priceFactors: string[];
  faqs: ContentFaq[];
  image?: string;
  imageAlt?: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "avaliacao-odontologica",
    name: "Avaliação odontológica e plano de tratamento",
    shortName: "Avaliação e plano",
    category: "Clínico",
    icon: "scan",
    featured: true,
    short:
      "Primeiro passo de qualquer tratamento: exame clínico, diagnóstico e um plano escrito com etapas, valores e prioridades.",
    intro:
      "A avaliação é onde tudo começa. Conversamos sobre o que incomoda, examinamos dentes e gengiva e, se necessário, pedimos exames de imagem. Você sai com um plano de tratamento organizado por prioridade, com o valor e o prazo de cada etapa por escrito — sem compromisso de iniciar na hora.",
    forWhom: [
      "Quem está há mais de um ano sem consulta odontológica.",
      "Quem sente sensibilidade, sangramento na gengiva ou mau hálito frequente.",
      "Quem recebeu orçamentos diferentes e quer uma segunda opinião clara.",
      "Quem quer planejar estética ou reabilitação com etapas e valores definidos.",
    ],
    resolves:
      "Troca o 'vamos ver na cadeira' por um plano previsível: você sabe o que será feito, em qual ordem e por quê.",
    included: [
      "Anamnese com histórico de saúde e uso de medicamentos.",
      "Exame clínico de dentes, gengiva e mordida.",
      "Orientação sobre exames de imagem quando indicados.",
      "Plano de tratamento com etapas, prioridades e valores por escrito.",
      "Explicação das alternativas e do que acontece se nada for feito.",
    ],
    timing:
      "Consulta de 40 a 60 minutos. Casos que dependem de exames de imagem têm o plano concluído após a análise, com prazo informado no atendimento.",
    priceFactors: [
      "Complexidade do caso e número de exames necessários.",
      "Necessidade de exames de imagem complementares.",
      "Quantidade de especialidades envolvidas no plano.",
    ],
    faqs: [
      {
        q: "A avaliação já inclui o orçamento?",
        a: "Sim. Após o exame, você recebe o plano com valores e prazos por escrito. A cobrança da avaliação, quando houver, é informada antes do agendamento.",
      },
      {
        q: "Preciso fazer todos os tratamentos do plano?",
        a: "Não. O plano é organizado por prioridade: você decide o que tratar agora, o que pode esperar e o que é apenas acompanhamento.",
      },
      {
        q: "Dói?",
        a: "A avaliação é um exame visual e tátil, sem procedimentos invasivos. Se algum teste incomodar, avisamos antes e você pede pausa a qualquer momento.",
      },
    ],
  },
  {
    slug: "limpeza-e-profilaxia",
    name: "Limpeza, raspagem e profilaxia",
    shortName: "Limpeza e profilaxia",
    category: "Prevenção",
    icon: "sparkle",
    featured: true,
    short:
      "Remove tártaro e placa em pontos que a escova não alcança, com orientação de higiene para o seu caso.",
    intro:
      "A limpeza profissional remove o tártaro que já está aderido ao dente e a placa que a escovação não alcança, principalmente entre os dentes e junto à gengiva. Além da remoção, mostramos onde a sua higiene está falhando e ajustamos a técnica para o seu tipo de mordida, aparelho ou prótese.",
    forWhom: [
      "Quem mantém consultas preventivas periódicas.",
      "Quem percebe sangramento, gengiva inchada ou tártaro visível.",
      "Quem usa aparelho fixo, prótese ou implante.",
      "Quem se prepara para clareamento, ortodontia ou reabilitação.",
    ],
    resolves:
      "Gengiva inflamada, sangramento e acúmulo de tártaro — a principal causa de perda de dente quando não é tratada.",
    included: [
      "Avaliação das condições de gengiva e dentes.",
      "Remoção de tártaro supra e subgengival conforme a necessidade.",
      "Polimento coronário e aplicação de flúor.",
      "Orientação de higiene para os pontos de maior risco.",
      "Definição do intervalo de retorno para o seu caso.",
    ],
    timing:
      "Uma sessão de 40 a 60 minutos na maioria dos casos. Casos com muita inflamação podem precisar de mais de uma sessão e um retorno de controle.",
    priceFactors: [
      "Quantidade de tártaro e condição da gengiva.",
      "Necessidade de raspagem por quadrante em sessões separadas.",
      "Presença de aparelho, implantes ou próteses que exigem cuidado extra.",
    ],
    faqs: [
      {
        q: "Limpeza dói?",
        a: "Em geral é desconfortável apenas na região com gengiva inflamada. Podemos ajustar o ritmo e, quando indicado, orientar o uso de analgésico comum antes da sessão.",
      },
      {
        q: "De quanto em quanto tempo devo fazer?",
        a: "O intervalo é definido na avaliação, conforme gengiva, higiene e histórico. O retorno é registrado no seu plano de acompanhamento.",
      },
      {
        q: "Limpeza clareia os dentes?",
        a: "Ela devolve o aspecto natural ao remover manchas superficiais de café e cigarro, mas não altera o tom do dente. Para mudar o tom existe o clareamento.",
      },
    ],
    image: "/images/instrumentos.jpg",
    imageAlt:
      "Instrumentos odontológicos esterilizados organizados em bandeja branca",
  },
  {
    slug: "restauracoes",
    name: "Restaurações em resina",
    shortName: "Restaurações",
    category: "Clínico",
    icon: "shield",
    short: "Tratamento de cáries e dentes quebrados com resina da cor do dente.",
    intro:
      "A restauração devolve forma, função e estética ao dente afetado por cárie ou fratura. Trabalhamos com resina composta em camadas, ajustando cor e formato, e conferimos a mordida no final para que o dente volte a trabalhar sem incomodar.",
    forWhom: [
      "Quem tem cárie detectada na avaliação.",
      "Quem quebrou a borda do dente ou perdeu uma restauração antiga.",
      "Quem sente dor ao mastigar doce, frio ou quente em um dente específico.",
      "Quem quer corrigir pequenas imperfeições de forma antes de uma reabilitação.",
    ],
    resolves:
      "Cárie, fratura e desconforto ao mastigar, preservando a maior quantidade possível de estrutura dental saudável.",
    included: [
      "Diagnóstico da extensão da lesão e definição da técnica.",
      "Anestesia local e remoção do tecido comprometido.",
      "Restauração em camadas com ajuste de cor e forma.",
      "Ajuste de mordida e polimento final.",
      "Orientações de cuidado nas primeiras 24 horas.",
    ],
    timing:
      "Uma sessão de 30 a 60 minutos por dente, na maioria dos casos. Casos múltiplos ou muito profundos podem ser divididos em etapas.",
    priceFactors: [
      "Número de faces do dente afetadas.",
      "Quantidade de dentes a restaurar.",
      "Necessidade de tratamento de canal ou de coroa no mesmo dente.",
    ],
    faqs: [
      {
        q: "Quanto tempo a restauração dura?",
        a: "Depende da higiene, da mordida e do tamanho da restauração. A vida útil é acompanhada nas consultas de revisão, com substituição quando aparecer desgaste ou infiltração.",
      },
      {
        q: "Restauração de resina e de porcelana são a mesma coisa?",
        a: "Não. A resina é feita na cadeira e é indicada para perdas pequenas e médias. Peças de porcelana são indicadas em perdas maiores, e cada caso é definido na avaliação.",
      },
      {
        q: "Posso comer depois?",
        a: "Na maioria dos casos a resina já sai polida e pode ser usada na sequência. A anestesia pode durar algumas horas, por isso orientamos cuidado com alimentos quentes até passar.",
      },
    ],
  },
  {
    slug: "tratamento-de-canal",
    name: "Tratamento de canal (endodontia)",
    shortName: "Tratamento de canal",
    category: "Clínico",
    icon: "tool",
    short:
      "Trata a inflamação ou infecção dentro do dente quando a polpa foi atingida, sem precisar extrair.",
    intro:
      "O tratamento de canal é indicado quando a polpa do dente — a parte interna, com nervos e vasos — está inflamada ou infectada. Removemos o tecido comprometido, limpamos e selamos os canais. O objetivo é manter o dente na boca, sem dor e sem infecção.",
    forWhom: [
      "Quem tem dor forte, latejante, que aumenta à noite.",
      "Quem apresenta inchaço ou fístula na gengiva.",
      "Quem tem dente fraturado ou cárie profunda que chegou à polpa.",
      "Quem recebeu indicação de extração e quer avaliar a possibilidade de manter o dente.",
    ],
    resolves:
      "Dor de origem pulpar e infecções que, sem tratamento, levam à perda do dente e a quadros mais graves.",
    included: [
      "Exame clínico e análise de exames de imagem.",
      "Anestesia local e isolamento do dente.",
      "Limpeza e modelagem dos canais.",
      "Selenamento dos canais e restauração provisória.",
      "Restauração definitiva ou encaminhamento para coroa, conforme o caso.",
    ],
    timing:
      "Pode ser concluído em uma sessão ou dividido em mais de um encontro, dependendo do número de canais e da presença de infecção. O plano com etapas é informado antes de começar.",
    priceFactors: [
      "Dente envolvido (frente ou posterior) e número de canais.",
      "Presença de infecção e necessidade de medicação entre sessões.",
      "Necessidade de retratamento de um canal já feito.",
      "Reconstrução e coroa após o tratamento.",
    ],
    faqs: [
      {
        q: "Canal dói?",
        a: "O procedimento é feito com anestesia, e a dor que o paciente sente é da inflamação, não do tratamento. A sensibilidade após a sessão é comum e manejada com a medicação orientada.",
      },
      {
        q: "O dente escurece depois do canal?",
        a: "Pode acontecer em alguns casos. Existem técnicas de reconstrução e de clareamento interno indicadas quando isso ocorre, avaliadas após o término do tratamento.",
      },
      {
        q: "Preciso de coroa em todo dente com canal?",
        a: "Não em todos. Dentes posteriores com grande perda de estrutura têm indicação mais frequente de coroa. A decisão é tomada com base na quantidade de dente remanescente.",
      },
    ],
  },
  {
    slug: "extracoes-e-cirurgias",
    name: "Extrações e pequenas cirurgias",
    shortName: "Extrações e cirurgias",
    category: "Clínico",
    icon: "alert",
    short:
      "Remoção de dentes sem possibilidade de recuperação, sisos e adequações de gengiva, com orientação pós-operatória.",
    intro:
      "Quando o dente não tem mais condição de ser mantido ou quando um siso está causando inflamação, a extração é a conduta indicada. Explicamos alternativas antes, realizamos o procedimento com anestesia e entregamos por escrito os cuidados do pós-operatório.",
    forWhom: [
      "Quem tem dente muito destruído ou com fratura abaixo da gengiva.",
      "Quem tem siso incluso, semi-incluso ou causando inflamação recorrente.",
      "Quem precisa de espaço para ortodontia ou reabilitação.",
      "Quem tem indicação de extração e quer entender o que fazer no lugar do dente.",
    ],
    resolves:
      "Infecções e inflamações recorrentes, além de dor causada por dentes sem condições de recuperação.",
    included: [
      "Avaliação clínica e análise de exames de imagem.",
      "Explicação das alternativas e do plano de reabilitação.",
      "Procedimento com anestesia local.",
      "Orientações escritas de pós-operatório e prescrição quando indicada.",
      "Retorno de avaliação da cicatrização quando necessário.",
    ],
    timing:
      "Extração simples costuma levar de 30 a 45 minutos, incluindo anestesia. Cirurgias de siso podem exigir mais tempo e retorno de acompanhamento.",
    priceFactors: [
      "Complexidade cirúrgica e posição do dente.",
      "Necessidade de exames de imagem (panorâmica ou tomografia).",
      "Quantidade de dentes removidos na mesma sessão.",
      "Necessidade de enxerto ósseo para planejar implante.",
    ],
    faqs: [
      {
        q: "Quanto tempo para cicatrizar?",
        a: "A gengiva fecha em poucos dias e a cicatrização completa leva algumas semanas. O prazo varia com a região e o tipo de procedimento; o cuidado indicado está na orientação escrita.",
      },
      {
        q: "Posso trabalhar no dia seguinte?",
        a: "Em extrações simples, muitas pessoas retornam no dia seguinte com cuidado. Em cirurgias mais extensas, pode ser indicado repouso relativo, informado antes do procedimento.",
      },
      {
        q: "Preciso repor o dente extraído?",
        a: "Na maioria dos casos, sim, para evitar migração dos dentes vizinhos e perda óssea. Avaliamos implante, ponte ou prótese removível conforme a região.",
      },
    ],
  },
  {
    slug: "implantes-dentarios",
    name: "Implantes dentários",
    shortName: "Implantes",
    category: "Reabilitação",
    icon: "tooth",
    featured: true,
    short:
      "Reposição de dentes perdidos com implante, planejada com exames e acompanhamento por etapas.",
    intro:
      "O implante substitui a raiz do dente perdido e serve de base para a coroa. O tratamento é planejado com exames de imagem para avaliar osso e posição, e conduzido por etapas: cirurgia, período de cicatrização, instalação da coroa e acompanhamento.",
    forWhom: [
      "Quem perdeu um ou mais dentes e quer recuperar mastigação.",
      "Quem usa prótese removível e não se adaptou.",
      "Quem tem dente fraturado abaixo da gengiva com indicação de extração.",
      "Quem foi informado de que não tem osso suficiente e quer uma avaliação.",
    ],
    resolves:
      "Ausência de dentes, dificuldade para mastigar e instabilidade da prótese, com planejamento individualizado.",
    included: [
      "Avaliação clínica e análise de exames de imagem.",
      "Plano de tratamento com etapas, prazos e valores por escrito.",
      "Instalação do implante sob anestesia local.",
      "Acompanhamento da cicatrização e da osseointegração.",
      "Instalação da coroa ou prótese sobre o implante.",
      "Consultas de manutenção e orientação de higiene.",
    ],
    timing:
      "O tempo entre a cirurgia e a instalação da coroa depende da cicatrização de cada pessoa e da região. O prazo estimado, as etapas e o que pode alterá-lo são apresentados no plano antes do início.",
    priceFactors: [
      "Quantidade de implantes e dentes a repor.",
      "Necessidade de enxerto ósseo ou de procedimentos complementares.",
      "Tipo de coroa ou prótese escolhida.",
      "Exames de imagem necessários para o planejamento.",
    ],
    faqs: [
      {
        q: "Implante dói?",
        a: "A instalação é feita com anestesia local e o desconforto do pós-operatório é controlado com a medicação prescrita. O que mais pesa no resultado é seguir as orientações de cuidado.",
      },
      {
        q: "Todo mundo pode fazer implante?",
        a: "É preciso avaliar saúde geral, uso de medicamentos, condição óssea e hábitos como fumar. Essas informações são levantadas na avaliação inicial.",
      },
      {
        q: "Quanto tempo dura um implante?",
        a: "Com manutenção periódica e higiene adequada, o implante tem longa durabilidade. A revisão periódica é o que identifica precocemente qualquer alteração.",
      },
    ],
    image: "/images/consultorio.jpg",
    imageAlt:
      "Detalhe de cadeira odontológica e refletor de consultório clínico moderno",
  },
  {
    slug: "coroas-e-proteses",
    name: "Coroas, próteses e reabilitação",
    shortName: "Coroas e próteses",
    category: "Reabilitação",
    icon: "crown",
    short:
      "Recupera a forma e a função de dentes muito desgastados, tratados com canal ou ausentes.",
    intro:
      "Coroas e próteses devolvem forma, função e estética quando o dente perdeu muita estrutura ou já não está presente. O planejamento considera cor, formato, mordida e saúde da gengiva, e você participa das escolhas antes da execução.",
    forWhom: [
      "Quem tem dente com canal e grande perda de estrutura.",
      "Quem perdeu um ou mais dentes e não quer implante.",
      "Quem tem desgaste por ranger os dentes.",
      "Quem quer melhorar estética de dentes anteriores com planejamento.",
    ],
    resolves:
      "Dentes fragilizados, ausências e desgastes que comprometem a mastigação e a estética.",
    included: [
      "Avaliação e planejamento com fotografias quando indicado.",
      "Preparo dos dentes e moldagem ou escaneamento.",
      "Prova e ajuste da peça antes da instalação definitiva.",
      "Cimentação, ajuste de mordida e orientação de higiene.",
      "Retorno de controle após a instalação.",
    ],
    timing:
      "Normalmente envolve a fase de preparo, a confecção no laboratório e a instalação. Os prazos são informados no orçamento e dependem do tipo de peça escolhida.",
    priceFactors: [
      "Material da peça (resina, cerâmica e variações).",
      "Quantidade de dentes envolvidos.",
      "Necessidade de tratamento de canal ou de ajuste de gengiva.",
      "Etapas de laboratório e provas intermediárias.",
    ],
    faqs: [
      {
        q: "Qual a diferença entre coroa e faceta?",
        a: "A coroa cobre todo o dente, indicada quando há grande perda de estrutura. A faceta cobre a face da frente e é indicada principalmente em estética. A indicação depende do exame clínico.",
      },
      {
        q: "Quanto tempo dura a prótese?",
        a: "Depende do material, da mordida e da higiene. A revisão periódica e a troca de peças desgastadas são o que mantêm o trabalho estável ao longo do tempo.",
      },
      {
        q: "A cor fica igual à dos outros dentes?",
        a: "Trabalhamos com escolha de cor e prova antes da instalação. Peças próximas de dentes naturais exigem ajuste fino de tonalidade, feito em conjunto com você.",
      },
    ],
  },
  {
    slug: "clareamento-dental",
    name: "Clareamento dental",
    shortName: "Clareamento",
    category: "Estética",
    icon: "sparkle",
    featured: true,
    short:
      "Clareamento com controle de sensibilidade, sempre depois de avaliar a saúde dos dentes e gengiva.",
    intro:
      "O clareamento age nos pigmentos que se acumulam dentro do dente ao longo do tempo, resultado de café, chá, refrigerante e cigarro. Antes de iniciar, avaliamos a causa da cor e tratamos qualquer problema que possa gerar sensibilidade ou impedir o resultado.",
    forWhom: [
      "Quem percebe os dentes mais amarelados do que antes.",
      "Quem tem manchas superficiais por café, chá ou cigarro.",
      "Quem vai se preparar para restaurações ou reabilitação estética.",
      "Quem quer resultado gradual e acompanhado, sem abandonar a saúde bucal.",
    ],
    resolves:
      "Escurecimento e manchas de pigmentos, desde que a saúde bucal esteja controlada.",
    included: [
      "Avaliação prévia e tratamento de cáries ou gengiva quando necessário.",
      "Escolha da técnica indicada para o seu caso.",
      "Aplicação supervisionada e instruções de uso domiciliar quando indicado.",
      "Acompanhamento da sensibilidade durante o processo.",
      "Registro e orientação de manutenção com o passar do tempo.",
    ],
    timing:
      "O processo varia conforme a técnica escolhida e a resposta do dente aos poucos dias. A prévia de tempo, número de aplicações e cuidados é explicada antes de iniciar.",
    priceFactors: [
      "Técnica indicada (consultório, caseiro supervisionado ou combinado).",
      "Quantidade de sessões previstas.",
      "Necessidade de tratar cáries, gengiva ou manchas profundas antes.",
      "Presença de restaurações e próteses antigas que não clareiam.",
    ],
    faqs: [
      {
        q: "Clareamento desgasta o esmalte?",
        a: "Quando indicado e acompanhado por profissional, com produtos e técnica corretos, não é esperado desgaste. O que aparece em alguns casos é sensibilidade temporária, que é manejada.",
      },
      {
        q: "O resultado é permanente?",
        a: "Não. O tom retorna lentamente com o tempo e depende dos hábitos, como fumo e consumo de café. A manutenção é indicada conforme o caso.",
      },
      {
        q: "Prótese e restauração clareiam também?",
        a: "Não. Resinas e porcelanas mantêm a cor original. Quando necessário, a troca dessas peças é planejada após a estabilização do novo tom.",
      },
    ],
    image: "/images/ortodontia.jpg",
    imageAlt:
      "Placa ortodôntica transparente e modelo anatômico dental sobre superfície clara",
  },
  {
    slug: "ortodontia-e-alinhadores",
    name: "Ortodontia e alinhadores",
    shortName: "Ortodontia",
    category: "Ortodontia",
    icon: "braces",
    featured: true,
    short:
      "Alinhamento dos dentes com aparelho fixo ou alinhadores, com avaliação de mordida e prazos por escrito.",
    intro:
      "Dentes fora de posição e mordida desalinhada dificultam a higiene e sobrecarregam a musculatura. A ortodontia organiza o posicionamento dos dentes e a relação entre as arcadas. Avaliamos qual recurso — aparelho fixo ou alinhador — é coerente com o seu caso e com a sua rotina.",
    forWhom: [
      "Quem tem dentes encavalados ou espaçados.",
      "Quem sente desgaste, estalos ou desconforto ao abrir a boca.",
      "Quem está planejando reabilitação e precisa reorganizar o posicionamento.",
      "Adultos que nunca fizeram tratamento e querem avaliar opções discretas.",
    ],
    resolves:
      "Dentes desalinhados, mordida cruzada ou aberta e dificuldade de higiene entre os dentes.",
    included: [
      "Avaliação ortodôntica e análise de exames de imagem.",
      "Plano com previsão de tempo, aparência do aparelho e cuidados.",
      "Instalação do aparelho ou entrega dos alinhadores.",
      "Manutenções periódicas e ajustes conforme a evolução.",
      "Contenção e acompanhamento após a remoção.",
    ],
    timing:
      "O tempo total é estimado na avaliação e varia com a complexidade e a resposta de cada pessoa. As manutenções têm intervalo definido no plano — faltar ou atrasar muda o prazo.",
    priceFactors: [
      "Tipo de aparelho escolhido (fixo ou alinhador).",
      "Complexidade da mordida e quantidade de movimentos previstos.",
      "Necessidade de extrações ou de outros tratamentos antes.",
      "Tempo estimado de tratamento e número de manutenções.",
    ],
    faqs: [
      {
        q: "Aparelho em adulto funciona?",
        a: "Sim. A movimentação é possível em qualquer idade, desde que a gengiva e o osso estejam saudáveis. O que muda é o tempo e a necessidade de controle periodontal.",
      },
      {
        q: "Alinhador substitui o aparelho fixo?",
        a: "Em muitos casos, sim. Casos mais complexos ou com movimentos específicos podem ter indicação de aparelho fixo. A decisão é tomada após exames.",
      },
      {
        q: "Preciso usar contenção depois?",
        a: "Sim. Sem contenção, os dentes tendem a voltar parcialmente à posição anterior. O tipo e o tempo de uso são definidos no final do tratamento.",
      },
    ],
  },
  {
    slug: "odontopediatria",
    name: "Odontopediatria",
    shortName: "Odontopediatria",
    category: "Prevenção",
    icon: "child",
    short:
      "Acompanhamento infantil com linguagem acessível, prevenção e adaptação sem sustos.",
    intro:
      "A primeira consulta infantil é sobre criar vínculo. Explicamos instrumentos e procedimentos de forma simples, mostramos antes de fazer e respeitamos o tempo da criança. Prevenir desde cedo evita cáries, extrações e o medo de dentista na vida adulta.",
    forWhom: [
      "Crianças na primeira consulta odontológica.",
      "Crianças com sangramento na gengiva ou manchas nos dentes.",
      "Crianças que precisam de selante e aplicação de flúor.",
      "Pais que querem orientação sobre mamadeira, chupeta e alimentação.",
    ],
    resolves:
      "Cárie infantil, dor, sangramento e dificuldade de adaptação da criança ao atendimento.",
    included: [
      "Consulta de adaptação com linguagem própria para a idade.",
      "Avaliação de dentes, gengiva e hábitos.",
      "Limpeza, aplicação de flúor e selantes quando indicados.",
      "Orientação de higiene e alimentação para os responsáveis.",
      "Encaminhamento para ortodontia infantil quando necessário.",
    ],
    timing:
      "Consultas mais curtas são divididas em mais encontros para preservar a adaptação. O responsável acompanha todo o atendimento.",
    priceFactors: [
      "Idade e comportamento da criança (adaptação pode exigir mais sessões).",
      "Quantidade de dentes a tratar.",
      "Necessidade de técnicas específicas de manejo.",
    ],
    faqs: [
      {
        q: "Com que idade começar?",
        a: "Recomenda-se a primeira consulta ainda na primeira infância, mesmo antes do nascimento de todos os dentes. Quanto mais cedo, mais fácil a adaptação.",
      },
      {
        q: "Posso entrar com meu filho?",
        a: "Sim. Os responsáveis acompanham o atendimento, o que costuma facilitar a tranquilidade da criança.",
      },
      {
        q: "Dente de leite precisa tratar cárie?",
        a: "Sim. A cárie pode causar dor, infectar e comprometer o dente permanente que está se formando embaixo.",
      },
    ],
  },
  {
    slug: "urgencia-odontologica",
    name: "Urgência odontológica",
    shortName: "Urgência",
    category: "Urgência",
    icon: "alert",
    featured: true,
    short:
      "Atendimento de dor, inchaço e trauma nos horários de funcionamento da clínica, com prioridade na agenda.",
    intro:
      "Dor forte, inchaço, sangramento após trauma ou restauração quebrada não podem esperar semanas. Reservamos horários para urgência dentro do funcionamento da clínica. O objetivo inicial é controlar o problema e a dor; o tratamento definitivo entra no plano, com orçamento depois.",
    forWhom: [
      "Quem está com dor de dente intensa.",
      "Quem tem inchaço no rosto ou na gengiva.",
      "Quem sofreu trauma, queda ou acidente com o dente.",
      "Quem perdeu restauração, coroa ou aparelho e está com desconforto.",
    ],
    resolves:
      "Dor aguda e quadros inflamatórios que precisam de intervenção rápida para não evoluir.",
    included: [
      "Avaliação imediata e exame de imagem quando necessário.",
      "Procedimento de alívio e controle da dor.",
      "Prescrição de medicação quando indicada.",
      "Orientação escrita de cuidados até o retorno.",
      "Agendamento do tratamento definitivo com orçamento.",
    ],
    timing:
      "Atendimento no mesmo dia quando há horário disponível — chame no WhatsApp para verificar a agenda. Casos com sinais de infecção extensa podem exigir encaminhamento hospitalar.",
    priceFactors: [
      "Procedimento necessário para o alívio imediato.",
      "Exames de imagem solicitados na hora.",
      "Complexidade do tratamento definitivo posterior.",
    ],
    faqs: [
      {
        q: "Atendem fora do horário?",
        a: "O atendimento presencial ocorre de segunda a sexta, das 8h às 12h e das 14h às 18h. Envie mensagem no WhatsApp: se não houver agenda no momento, orientamos sobre onde buscar atendimento.",
      },
      {
        q: "O que fazer enquanto espero?",
        a: "Evite gelo direto na pele sem proteção, não coloque aspirinas sobre a gengiva e procure atendimento se aparecer febre ou inchaço que piora rapidamente.",
      },
      {
        q: "Urgência já resolve o caso todo?",
        a: "Nem sempre. O primeiro atendimento controla a dor e a infecção. O tratamento definitivo é planejado com orçamento e etapas.",
      },
    ],
  },
  {
    slug: "atendimento-para-empresas-e-convenios",
    name: "Atendimento para empresas e convênios",
    shortName: "Empresas e convênios",
    category: "Empresas e convênios",
    icon: "building",
    short:
      "Atendimento para equipes, empresas, órgãos públicos e pacientes de convênios com agenda organizada e nota fiscal.",
    intro:
      "Atendemos empresas, instituições e órgãos públicos que precisam organizar o acesso da equipe à odontologia. Definimos fluxo de agendamento, autorização e faturamento por escrito, e emitimos nota fiscal. Também recebemos pacientes de convênios com atendimento cadastrado no guia do convênio.",
    forWhom: [
      "Empresas que querem oferecer saúde bucal para o time.",
      "Órgãos públicos e instituições com demanda de atendimento.",
      "Colaboradores de convênios atendidos pela clínica.",
      "Sindicatos e associações que já possuem convênio odontológico.",
    ],
    resolves:
      "Organização da demanda de atendimento, previsibilidade de custos e faturamento documentado.",
    included: [
      "Reunião para entender a demanda e o fluxo de autorização.",
      "Proposta por escrito com critérios de atendimento e faturamento.",
      "Agenda organizada para a equipe ou grupo atendido.",
      "Emissão de nota fiscal e relatórios de atendimento quando combinado.",
      "Canal direto para o responsável da empresa.",
    ],
    timing:
      "A proposta é montada após a reunião de levantamento. O prazo de início depende do fluxo de autorização de cada instituição e é informado na proposta.",
    priceFactors: [
      "Quantidade estimada de pessoas atendidas.",
      "Escopo do atendimento (consulta, prevenção ou tratamentos completos).",
      "Critérios de autorização e faturamento definidos pela empresa.",
      "Necessidade de atendimentos em horários específicos.",
    ],
    faqs: [
      {
        q: "Vocês emitem nota fiscal para empresas?",
        a: "Sim. Emitimos nota fiscal de serviço e trabalhamos com faturamento conforme o combinado por escrito na proposta.",
      },
      {
        q: "Atendem convênio do Sindicato dos Bancários?",
        a: "Sim, a clínica é conveniada e está listada na página de convênios do sindicato. Confirme a cobertura e a documentação necessária no seu canal de atendimento antes da consulta.",
      },
      {
        q: "É possível um atendimento fora do horário da clínica?",
        a: "O horário padrão é de segunda a sexta, das 8h às 12h e das 14h às 18h. Demanda diferente é avaliada caso a caso na proposta.",
      },
    ],
    image: "/images/fachada.jpg",
    imageAlt:
      "Entrada de clínica odontológica contemporânea em avenida arborizada",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const serviceCategories = Array.from(
  new Set(services.map((service) => service.category)),
);

export const featuredServices = services.filter((service) => service.featured);
