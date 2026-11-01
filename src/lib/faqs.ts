import type { ContentFaq } from "@/lib/services";

export const generalFaqs: ContentFaq[] = [
  {
    q: "Como peço um orçamento?",
    a: "Preencha o formulário do site ou chame no WhatsApp informando o que precisa, o bairro e a data desejada. Respondemos em até 1 dia útil com o valor e o prazo do seu caso.",
  },
  {
    q: "Quanto custa o tratamento?",
    a: "Depende do escopo, dos materiais e dos exames necessários. Depois de entender o caso, enviamos o valor e o prazo por escrito, sem compromisso.",
  },
  {
    q: "Vocês emitem nota fiscal?",
    a: "Sim. Emitimos nota fiscal de serviço e trabalhamos com garantia formal do que foi executado, com os critérios registrados no orçamento.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Pix, dinheiro, cartão de débito e cartão de crédito, com parcelamento nas condições informadas no orçamento. Para empresas, faturamos conforme combinado na proposta.",
  },
  {
    q: "Atendem pacientes de outras cidades?",
    a: "Sim. Recebemos pacientes da região. Para quem vem de fora, organizamos as etapas no mesmo dia sempre que o caso permite; isso é alinhado antes do agendamento.",
  },
  {
    q: "Atendem convênio?",
    a: "Atendemos pacientes de convênios que têm a clínica credenciada, como o convênio do Sindicato dos Bancários. Confirme a cobertura e a documentação no seu canal de atendimento antes da consulta.",
  },
  {
    q: "Em quanto tempo conseguem atender?",
    a: "Para avaliações e casos de urgência, a busca é pelo mesmo dia ou pela mesma semana. O prazo real é confirmado junto com o orçamento, conforme a agenda.",
  },
  {
    q: "O tratamento dói?",
    a: "Trabalhamos com anestesia local e avisamos cada etapa antes de executar. Você pode pedir pausa a qualquer momento. Para o pós-procedimento, entregamos a orientação por escrito.",
  },
  {
    q: "Preciso agendar ou posso passar na clínica?",
    a: "Recomendamos agendar pelo WhatsApp ou pelo formulário para reservar horário. Casos de dor são encaixados conforme a agenda do dia.",
  },
  {
    q: "Crianças são atendidas?",
    a: "Sim, com consulta de adaptação e linguagem própria para a idade. Os responsáveis acompanham o atendimento.",
  },
  {
    q: "Como funciona o pagamento de tratamentos longos?",
    a: "O tratamento é dividido em etapas e o pagamento acompanha essas etapas. As condições de cada fase são descritas no orçamento por escrito.",
  },
  {
    q: "Onde ficam e como chego?",
    a: "Estamos na Av. Cerro Azul, 1028, Zona 2, em Maringá. A página de contato tem o mapa, o link para traçar rota e o horário de atendimento completo.",
  },
];

export const homeFaqs = generalFaqs.slice(0, 5);
