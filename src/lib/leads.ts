import { db } from "@/db";
import { leads, type Lead } from "@/db/schema";
import { serviceOptions, site, whatsappLink } from "@/lib/site";

export const leadStatuses = [
  "novo",
  "contatado",
  "orcamento_enviado",
  "agendado",
  "fechado",
  "perdido",
] as const;

export type LeadStatus = (typeof leadStatuses)[number];

export const leadStatusLabels: Record<LeadStatus, string> = {
  novo: "Novo",
  contatado: "Contatado",
  orcamento_enviado: "Orçamento enviado",
  agendado: "Agendado",
  fechado: "Fechado",
  perdido: "Perdido",
};

export type LeadInput = {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  profile?: string;
  preferredTime?: string;
  message?: string;
  consent: boolean;
  sourcePage?: string;
  website?: string;
  elapsedMs?: number;
};

export type ValidatedLead = {
  name: string;
  phone: string;
  email: string | null;
  service: string | null;
  profile: string | null;
  preferredTime: string | null;
  message: string | null;
  consent: boolean;
  sourcePage: string | null;
};

export type ValidationResult =
  | { ok: true; data: ValidatedLead }
  | { ok: false; errors: Record<string, string> };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function digitsOnly(value: string) {
  return value.replace(/\D+/g, "");
}

export function validateLead(input: LeadInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (input.website && input.website.trim() !== "") {
    errors.form = "Não foi possível enviar o formulário. Tente novamente.";
  }

  if (typeof input.elapsedMs === "number" && input.elapsedMs < 2000) {
    errors.form = "Envio muito rápido. Revise os dados e tente novamente.";
  }

  const name = (input.name ?? "").trim().replace(/\s+/g, " ");
  if (name.length < 2) {
    errors.name = "Informe seu nome completo (mínimo 2 caracteres).";
  } else if (name.length > 120) {
    errors.name = "Use no máximo 120 caracteres no nome.";
  }

  const phoneDigits = digitsOnly(input.phone ?? "");
  if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.phone = "Informe um WhatsApp válido com DDD, por exemplo (44) 98822-9844.";
  }

  const email = (input.email ?? "").trim();
  if (email && !emailPattern.test(email)) {
    errors.email = "Verifique o e-mail informado.";
  }

  const service = (input.service ?? "").trim();
  if (service && !serviceOptions.includes(service)) {
    errors.service = "Selecione um tratamento da lista.";
  }

  const message = (input.message ?? "").trim();
  if (message.length > 2000) {
    errors.message = "Resuma sua mensagem em até 2000 caracteres.";
  }

  if (!input.consent) {
    errors.consent = "É necessário autorizar o contato para enviar o pedido.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      phone: phoneDigits,
      email: email || null,
      service: service || null,
      profile: (input.profile ?? "").trim() || null,
      preferredTime: (input.preferredTime ?? "").trim() || null,
      message: message || null,
      consent: true,
      sourcePage: (input.sourcePage ?? "").slice(0, 180) || null,
    },
  };
}

export function prettyPhone(value: string) {
  const digits = digitsOnly(value);
  if (digits.length === 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return value;
}

export function leadWhatsappMessage(lead: ValidatedLead) {
  const lines = [
    "Olá! Enviei um pedido pelo site da Sorrir.",
    `Nome: ${lead.name}`,
    `WhatsApp: ${prettyPhone(lead.phone)}`,
  ];
  if (lead.service) lines.push(`Interesse: ${lead.service}`);
  if (lead.profile) lines.push(`Perfil: ${lead.profile}`);
  if (lead.preferredTime) lines.push(`Melhor horário: ${lead.preferredTime}`);
  if (lead.email) lines.push(`E-mail: ${lead.email}`);
  if (lead.message) lines.push(`Mensagem: ${lead.message}`);
  return lines.join("\n");
}

export function leadWhatsappUrl(lead: ValidatedLead) {
  return whatsappLink(leadWhatsappMessage(lead));
}

export async function createLead(lead: ValidatedLead): Promise<Lead> {
  const [created] = await db
    .insert(leads)
    .values({
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      service: lead.service,
      profile: lead.profile,
      preferredTime: lead.preferredTime,
      message: lead.message,
      consent: lead.consent,
      sourcePage: lead.sourcePage,
    })
    .returning();
  return created;
}

/**
 * Dispara o aviso por e-mail quando RESEND_API_KEY e LEAD_NOTIFICATION_EMAIL
 * estão configurados. Se não estiverem, o lead fica registrado no painel
 * /admin e o paciente segue o atendimento pelo WhatsApp.
 */
export async function notifyLeadByEmail(lead: Lead): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  const from =
    process.env.LEAD_NOTIFICATION_FROM ?? "Site Sorrir <onboarding@resend.dev>";

  if (!apiKey || !to) return false;

  const summary = [
    `Nome: ${lead.name}`,
    `WhatsApp: ${prettyPhone(lead.phone)}`,
    `E-mail: ${lead.email ?? "não informado"}`,
    `Interesse: ${lead.service ?? "não informado"}`,
    `Perfil: ${lead.profile ?? "não informado"}`,
    `Melhor horário: ${lead.preferredTime ?? "não informado"}`,
    `Origem: ${lead.sourcePage ?? "site"}`,
    "",
    `Mensagem: ${lead.message ?? "—"}`,
    "",
    `Painel: ${site.url}/admin`,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `Novo pedido de orçamento — ${lead.name}`,
        text: summary,
      }),
    });
    return response.ok;
  } catch {
    return false;
  }
}
