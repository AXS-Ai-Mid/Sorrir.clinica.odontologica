export type CareCase = {
  slug: string;
  title: string;
  category: "Reabilitação" | "Estética" | "Ortodontia" | "Clínico" | "Urgência" | "Empresas";
  tag: string;
  summary: string;
  context: string;
  challenge: string;
  approach: string;
  steps: { title: string; detail: string }[];
  technical: { label: string; value: string }[];
  care: string[];
  disclaimer: string;
};

/**
 * Protocolos de atendimento documentados pela clínica.
 * Não publicamos fotos, nomes ou resultados de pacientes sem autorização
 * expressa — por isso a página descreve o processo clínico, não o resultado
 * individual de uma pessoa. Quando a autorização chegar, cada item recebe
 * fotos de antes e depois e o depoimento do paciente.
 */
export const cases: CareCase[] = [
  {
    slug: "reabilitacao-com-implante",
    title: "Reabilitação de dente posterior com implante",
    category: "Reabilitação",
    tag: "Implante unitário",
    summary:
      "Planejamento de implante unitário em região posterior, com conferência de osso, etapas de cicatrização e coroa final.",
    context:
      "Chegou à avaliação com um dente posterior perdido há alguns meses e dificuldade para mastigar do lado direito.",
    challenge:
      "A ausência do dente já tinha alterado a mordida e a posição do dente vizinho. O plano precisava respeitar o tempo de cicatrização e o espaço disponível.",
    approach:
      "Exames de imagem, conferência de volume ósseo e plano por escrito com etapas, prazos e valores. A coroa foi escolhida junto com o paciente antes da cirurgia, para não haver decisão de última hora.",
    steps: [
      { title: "Avaliação e exames", detail: "Exame clínico, análise de imagem e registro do caso." },
      { title: "Plano por escrito", detail: "Etapas, valores, prazos e o que depende da cicatrização." },
      { title: "Cirurgia do implante", detail: "Instalação com anestesia local e orientação pós-operatória." },
      { title: "Controle de cicatrização", detail: "Consultas de acompanhamento e conferência da integração." },
      { title: "Coroa e manutenção", detail: "Instalação da coroa, ajuste de mordida e retorno de revisão." },
    ],
    technical: [
      { label: "Área", value: "Região posterior (molar ou pré-molar)" },
      { label: "Etapas típicas", value: "5 fases, contando avaliação e revisão" },
      { label: "Exames", value: "Radiografia e/ou tomografia, conforme o caso" },
      { label: "Controle", value: "Revisão após a instalação e manutenção periódica" },
    ],
    care: [
      "Higiene específica ao redor do implante, ensinada na consulta.",
      "Retornos de manutenção no intervalo definido no plano.",
      "Informar doenças sistêmicas e medicamentos em uso.",
    ],
    disclaimer:
      "Protocolo de atendimento, sem promessa de resultado. Prazos e indicação variam conforme condição óssea, saúde geral e resposta de cada pessoa.",
  },
  {
    slug: "clareamento-com-controle-de-sensibilidade",
    title: "Clareamento com controle de sensibilidade",
    category: "Estética",
    tag: "Clareamento dental",
    summary:
      "Como conduzimos clareamento em pacientes que já sentem sensibilidade: tratamento prévio e aplicações acompanhadas.",
    context:
      "Paciente com dentes amarelados por café e histórico de sensibilidade ao frio procurou clareamento.",
    challenge:
      "Sem tratar a causa da sensibilidade, o clareamento aumentaria o desconforto e poderia ser interrompido no meio.",
    approach:
      "Primeiro controle de saúde bucal e da sensibilidade, com limpeza e orientação de dessensibilizante. Só depois o clareamento começou, com registro de cor e aplicações acompanhadas.",
    steps: [
      { title: "Avaliação de saúde bucal", detail: "Cáries, gengiva e causa da sensibilidade." },
      { title: "Ajuste antes do clareamento", detail: "Limpeza e controle da sensibilidade." },
      { title: "Aplicações supervisionadas", detail: "Protocolo definido para o caso, com acompanhamento." },
      { title: "Registro e manutenção", detail: "Orientação de hábitos e revisão do tom ao longo do tempo." },
    ],
    technical: [
      { label: "Indicação", value: "Pigmentos internos, com saúde bucal controlada" },
      { label: "Exames", value: "Não obrigatórios quando o exame clínico é suficiente" },
      { label: "Acompanhamento", value: "Registro de sensibilidade a cada aplicação" },
      { label: "Manutenção", value: "Indicada conforme hábitos e retorno do tom" },
    ],
    care: [
      "Evitar café, chá e fumo nas primeiras horas após cada aplicação.",
      "Usar dessensibilizante conforme orientação quando indicado.",
      "Manter limpeza profissional no intervalo definido.",
    ],
    disclaimer:
      "Clareamento não é procedimento definitivo: o tom retorna com o tempo. Restaurações e próteses antigas não mudam de cor.",
  },
  {
    slug: "ortodontia-com-alinhadores",
    title: "Ortodontia discreta com alinhadores",
    category: "Ortodontia",
    tag: "Alinhadores",
    summary:
      "Plano de alinhamento com alinhadores para quem precisa conciliar estética e rotina de trabalho.",
    context:
      "Paciente adulto, com dentes anteriores levemente encavalados e rotina de reuniões presenciais.",
    challenge:
      "O tratamento não podia depender de aparelho fixo e exigia participação do paciente no uso das placas.",
    approach:
      "Análise da mordida, definição do planejamento e explicação franca sobre o compromisso de uso. Em casos fora do alcance dos alinhadores, o aparelho fixo é apresentado como alternativa.",
    steps: [
      { title: "Avaliação e exames", detail: "Registro da mordida e análise do posicionamento." },
      { title: "Escolha do recurso", detail: "Alinhador ou aparelho fixo, com critérios explicados." },
      { title: "Entrega das placas", detail: "Orientação de uso, higiene e trocas." },
      { title: "Manutenções", detail: "Acompanhamento da evolução no intervalo definido." },
      { title: "Contenção", detail: "Uso de contenção para preservar o resultado." },
    ],
    technical: [
      { label: "Perfil", value: "Adultos com demanda discreta ou moderada" },
      { label: "Exames", value: "Registro clínico e imagem conforme o caso" },
      { label: "Manutenções", value: "Intervalos definidos no plano" },
      { label: "Pós-tratamento", value: "Contenção e revisões" },
    ],
    care: [
      "Usar as placas pelo período orientado, todos os dias.",
      "Comparecer às manutenções: atrasos alteram o prazo.",
      "Manter higiene e consultas de prevenção durante o tratamento.",
    ],
    disclaimer:
      "O tempo total depende da complexidade e da adesão ao uso. Não trabalhamos com prazo garantido antes da avaliação.",
  },
  {
    slug: "urgencia-dor-e-infeccao",
    title: "Urgência por dor e infecção",
    category: "Urgência",
    tag: "Atendimento no mesmo dia",
    summary:
      "Fluxo adotado quando o paciente chega com dor forte: alívio primeiro, plano definitivo depois.",
    context:
      "Caso de dor latejante em dente posterior, com sensibilidade ao toque e início de inchaço na gengiva.",
    challenge:
      "Controlar dor e infecção sem decidir o tratamento definitivo no momento mais desconfortável.",
    approach:
      "Avaliação imediata e atenção aos sinais de infecção extensa. O alívio é feito na hora; o plano completo, com valores e etapas, é entregue depois, quando o paciente está sem dor.",
    steps: [
      { title: "Contato e triagem", detail: "Relato do quadro pelo WhatsApp e verificação de agenda." },
      { title: "Avaliação imediata", detail: "Exame clínico e imagem quando necessário." },
      { title: "Controle da dor", detail: "Procedimento de alívio e medicação quando indicada." },
      { title: "Plano definitivo", detail: "Orçamento por escrito e agendamento das etapas." },
    ],
    technical: [
      { label: "Atendimento", value: "Segunda a sexta, 8h–12h e 14h–18h" },
      { label: "Prioridade", value: "Encaixe conforme agenda do dia" },
      { label: "Sinais de alerta", value: "Febre, inchaço extenso e dificuldade para engolir" },
      { label: "Encaminhamento", value: "Hospitalar quando o quadro exigir" },
    ],
    care: [
      "Não aplicar aspirina sobre a gengiva.",
      "Não interromper medicação prescrita por conta própria.",
      "Procurar atendimento imediato se aparecer febre ou inchaço que aumenta.",
    ],
    disclaimer:
      "Atendimento de urgência depende de disponibilidade de agenda. Não substitui pronto-socorro em quadros graves.",
  },
  {
    slug: "restauracao-de-dentes-posteriores",
    title: "Restauração de múltiplos dentes posteriores",
    category: "Clínico",
    tag: "Restauração em resina",
    summary:
      "Organização de cáries múltiplas em etapas, com prioridade para o que causa dor e risco de perda dentária.",
    context:
      "Paciente sem consulta há vários anos, com cáries em mais de um dente e sensibilidade a doces.",
    challenge:
      "Tratar tudo de uma vez seria longo e desconfortável. Era necessário priorizar risco e organizar valores.",
    approach:
      "Plano dividido por prioridade clínica e por região, com valores por etapa. Dentes com risco de perda entraram primeiro; a estética ficou para depois da saúde.",
    steps: [
      { title: "Diagnóstico completo", detail: "Registro de cada dente e classificação de risco." },
      { title: "Plano por prioridade", detail: "Etapas separadas e valor de cada uma." },
      { title: "Execução por região", detail: "Sessões com anestesia e ajuste de mordida." },
      { title: "Revisão e prevenção", detail: "Retorno para conferir restaurações e orientar higiene." },
    ],
    technical: [
      { label: "Materiais", value: "Resina composta, com escolha de cor" },
      { label: "Sessões", value: "Definidas pela quantidade de dentes e regiões" },
      { label: "Anestesia", value: "Local, com conferência de mordida ao final" },
      { label: "Acompanhamento", value: "Retorno de revisão e profilaxia" },
    ],
    care: [
      "Higiene com fio dental nos dentes restaurados.",
      "Evitar morder objetos rígidos (gelo, caneta, unhas).",
      "Comparecer à revisão das restaurações.",
    ],
    disclaimer:
      "Vida útil de restauração varia com higiene, mordida e tamanho da lesão. Não há garantia de durabilidade eterna.",
  },
  {
    slug: "atendimento-para-equipes-de-empresas",
    title: "Programa de atendimento para equipes de empresas",
    category: "Empresas",
    tag: "Empresas e convênios",
    summary:
      "Fluxo de atendimento de grupos: levantamento de demanda, proposta de agenda e faturamento com nota fiscal.",
    context:
      "Empresa da região buscou organizar avaliações odontológicas para um grupo de colaboradores.",
    challenge:
      "Conciliar horários de trabalho, previsibilidade de custos e documentação fiscal para a empresa.",
    approach:
      "Reunião de levantamento, proposta por escrito com escopo e critérios, agenda organizada por grupos e canal direto com o responsável da empresa.",
    steps: [
      { title: "Reunião inicial", detail: "Entendimento da demanda e do número estimado de pessoas." },
      { title: "Proposta por escrito", detail: "Escopo, critérios de atendimento e faturamento." },
      { title: "Agenda organizada", detail: "Distribuição dos colaboradores em horários definidos." },
      { title: "Atendimento e documentos", detail: "Nota fiscal e relatório de atendimentos quando combinado." },
    ],
    technical: [
      { label: "Escopo", value: "Definido na proposta, por escrito" },
      { label: "Documentação", value: "Nota fiscal de serviço" },
      { label: "Agenda", value: "Segunda a sexta, nos horários da clínica" },
      { label: "Responsável", value: "Canal direto com o contato da empresa" },
    ],
    care: [
      "Indicar um responsável interno para centralizar a agenda.",
      "Definir critérios de autorização antes do início.",
      "Alinhar a política de faltas e remarcações no contrato.",
    ],
    disclaimer:
      "Escopo, valores e prazos são definidos apenas na proposta por escrito, após o levantamento da demanda.",
  },
];

export function getCase(slug: string) {
  return cases.find((item) => item.slug === slug);
}

export const caseCategories = Array.from(new Set(cases.map((item) => item.category)));
