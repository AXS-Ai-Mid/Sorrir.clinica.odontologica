import type { IconName } from "@/components/icons";

export const differentials: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "phone",
    title: "Atendimento direto com quem trata",
    text: "Você fala com a equipe da clínica, não com central de atendimento. A mesma pessoa que responde é a que acompanha o seu caso.",
  },
  {
    icon: "document",
    title: "Combinação por escrito",
    text: "Plano de tratamento, valor e prazo são registrados antes de começar. Nada de valor novo aparecendo no meio do caminho.",
  },
  {
    icon: "shield",
    title: "Nota fiscal e garantia formal",
    text: "Emitimos nota fiscal de serviço e registramos os critérios de garantia do que foi executado.",
  },
  {
    icon: "clock",
    title: "Resposta em até 1 dia útil",
    text: "Pedidos de orçamento recebidos pelo site ou WhatsApp são respondidos em até um dia útil com o próximo passo.",
  },
  {
    icon: "pin",
    title: "Zona 2, com acesso fácil",
    text: "Av. Cerro Azul, 1028 — uma região central de Maringá, alcançável por avenidas principais e com retorno simples.",
  },
];

export const processSteps: {
  number: string;
  icon: IconName;
  title: string;
  description: string;
  clientAction: string;
  timing: string;
}[] = [
  {
    number: "01",
    icon: "whatsapp",
    title: "Primeiro contato pelo site ou WhatsApp",
    description:
      "Você conta o que precisa, o bairro e o período de preferência. Se for urgência, avisamos na hora se há espaço na agenda do dia.",
    clientAction:
      "Informar o motivo da consulta, se há dor e o período que funciona para você.",
    timing: "Resposta em até 1 dia útil pelos canais do site ou WhatsApp.",
  },
  {
    number: "02",
    icon: "scan",
    title: "Avaliação clínica e exames",
    description:
      "Exame de dentes, gengiva e mordida. Quando o caso pede imagem, explicamos qual exame e por quê antes de solicitar.",
    clientAction:
      "Levar documentos, informar medicamentos em uso e exames recentes que já possua.",
    timing:
      "Consulta de 40 a 60 minutos. Exames de imagem podem exigir um retorno para fechar o plano.",
  },
  {
    number: "03",
    icon: "document",
    title: "Plano de tratamento por escrito",
    description:
      "Você recebe o que será feito, em que ordem, com valor, prazo e formas de pagamento. As etapas podem ser iniciadas aos poucos.",
    clientAction:
      "Ler o plano, tirar dúvidas e definir o que tratar primeiro conforme o seu orçamento.",
    timing:
      "Entrega em até 1 dia útil após a avaliação e a análise dos exames necessários.",
  },
  {
    number: "04",
    icon: "calendar",
    title: "Execução por etapas",
    description:
      "Cada sessão é agendada com antecedência e explicada antes de começar. O acompanhamento fica registrado no seu plano.",
    clientAction:
      "Comparecer no horário combinado e seguir as orientações de cuidado entre as sessões.",
    timing:
      "Depende do procedimento. O detalhamento por etapa está no orçamento, nunca em promessa verbal.",
  },
  {
    number: "05",
    icon: "heart",
    title: "Alta, garantia e manutenção",
    description:
      "Ao terminar, explicamos os cuidados e o intervalo de revisão. A manutenção periódica é o que preserva o resultado.",
    clientAction:
      "Manter as revisões e a higiene indicada, além de avisar em caso de qualquer alteração.",
    timing:
      "Revisões definidas no plano, conforme o procedimento realizado.",
  },
];

export const values = [
  {
    icon: "heart" as IconName,
    title: "Missão",
    text: "Resolver o problema odontológico de cada pessoa com diagnóstico honesto, tratamento explicado e acompanhamento de verdade.",
  },
  {
    icon: "scan" as IconName,
    title: "Visão",
    text: "Ser a clínica de referência da Zona 2 em Maringá para quem valoriza clareza: saber o que será feito, por que e quanto custa.",
  },
  {
    icon: "shield" as IconName,
    title: "Valores",
    text: "Transparência na combinação, prudência clínica, respeito ao tempo e ao dinheiro do paciente, e registro de tudo o que é combinado.",
  },
];

export const teamRoles = [
  {
    role: "Cirurgião-dentista responsável técnico",
    text: "Responde pelo diagnóstico, pelo plano de tratamento e pela condução clínica dos casos.",
    icon: "tooth" as IconName,
  },
  {
    role: "Atendimento e agendamento",
    text: "Faz a triagem dos contatos, organiza a agenda e mantém você informado sobre as etapas.",
    icon: "calendar" as IconName,
  },
  {
    role: "Auxiliar de saúde bucal",
    text: "Prepara a sala, organiza instrumentais e apoia o atendimento durante os procedimentos.",
    icon: "shield" as IconName,
  },
  {
    role: "Esterilização e biossegurança",
    text: "Controla o ciclo de esterilização e o registro dos instrumentais usados em cada atendimento.",
    icon: "scan" as IconName,
  },
];

export const structureItems = [
  "Endereço fixo na Av. Cerro Azul, 1028, Zona 2, Maringá.",
  "Salas de atendimento com cadeira odontológica e refletor.",
  "Ciclo de esterilização com instrumentais embalados por atendimento.",
  "Materiais de consumo e resinas com registro de validade.",
  "Apoio de exames de imagem por parceiros de confiança em Maringá.",
  "Estrutura adaptada para atendimento a empresas e convênios, com nota fiscal.",
];

export const complianceItems = [
  {
    title: "Orçamento por escrito",
    text: "Etapas, valores, formas de pagamento e validade descritos no documento entregue ao paciente.",
  },
  {
    title: "Nota fiscal",
    text: "Emissão para pessoa física e jurídica, com faturamento para empresas conforme proposta.",
  },
  {
    title: "Garantia registrada",
    text: "Critérios de garantia informados antes do procedimento, com acompanhamento documentado.",
  },
  {
    title: "Prontuário e consentimento",
    text: "Registro do que foi combinado e assinatura de consentimento para procedimentos.",
  },
  {
    title: "Biossegurança",
    text: "Protocolo de esterilização e descarte conforme as normas sanitárias vigentes.",
  },
  {
    title: "Responsabilidade técnica",
    text: "Cirurgião-dentista responsável pelo caso, registrado no conselho de classe.",
  },
];

export const followUpChannels = [
  "WhatsApp direto com a equipe da clínica.",
  "Telefone (44) 98822-9844 nos horários de atendimento.",
  "Corpo de prova e retorno presencial para conferir a evolução.",
  "Plano de tratamento impresso ou digital, com as etapas marcadas.",
];

export const pendingMaterials = [
  "Logotipo em vetor (SVG, AI ou PDF).",
  "Fotos próprias da fachada, recepção, salas e instrumentais, com no mínimo 1.600px de largura.",
  "Fotos da equipe e do responsável técnico, para as páginas Sobre e Galeria.",
  "Registros de casos com autorização expressa do paciente para uso de imagem.",
  "Depoimentos reais com nome, cidade e serviço contratado.",
  "Tabela de valores, se a clínica autorizar divulgar faixas de preço.",
  "E-mail oficial de atendimento e dados de nota fiscal (razão social e CNPJ).",
  "Domínio definitivo e acessos do Google Meu Negócio e do Google Analytics.",
  "Link de agendamento próprio, caso a clínica adote uma agenda online.",
];
