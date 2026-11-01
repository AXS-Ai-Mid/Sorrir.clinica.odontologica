"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/icons";
import { buttonClass } from "@/components/ui";
import { serviceOptions, site, whatsappLink } from "@/lib/site";

type Props = {
  sourcePage: string;
  defaultService?: string;
  compact?: boolean;
};

type Errors = Record<string, string>;

const fieldClass =
  "min-h-12 w-full rounded-lg border border-mist-dark bg-white px-3.5 py-3 text-[15px] text-ink shadow-[inset_0_1px_2px_rgba(11,27,51,0.04)] transition-colors placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200";
const labelClass = "mb-1.5 block text-[13px] font-semibold text-brand-950";

const profiles = ["Particular", "Empresa ou órgão público", "Convênio"];
const preferredTimes = ["Manhã (8h às 12h)", "Tarde (14h às 18h)", "Indiferente"];

function trackConversion(service: string | null) {
  const w = window as typeof window & {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };
  w.gtag?.("event", "generate_lead", {
    event_category: "formulario",
    event_label: service ?? "sem_tratamento",
  });
  w.fbq?.("track", "Lead", { content_name: service ?? "contato" });
}

export function LeadForm({ sourcePage, defaultService = "", compact = false }: Props) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [successData, setSuccessData] = useState<{ whatsappUrl: string; name: string } | null>(
    null,
  );
  const [service, setService] = useState(defaultService);
  const startedAt = useRef<number>(Date.now());
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      service: String(data.get("service") ?? ""),
      profile: String(data.get("profile") ?? ""),
      preferredTime: String(data.get("preferredTime") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
      sourcePage,
      website: String(data.get("website") ?? ""),
      elapsedMs: Date.now() - startedAt.current,
    };

    const localErrors: Errors = {};
    if (payload.name.trim().length < 2) {
      localErrors.name = "Informe seu nome completo.";
    }
    if (payload.phone.replace(/\D+/g, "").length < 10) {
      localErrors.phone = "Informe um WhatsApp válido com DDD.";
    }
    if (!payload.consent) {
      localErrors.consent = "Autorize o contato para enviar o pedido.";
    }
    setErrors(localErrors);
    if (Object.keys(localErrors).length > 0) {
      const firstField = Object.keys(localErrors)[0];
      const element = form.querySelector<HTMLElement>(`[name="${firstField}"]`);
      element?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok: boolean;
        errors?: Errors;
        whatsappUrl?: string;
      };
      if (!response.ok || !result.ok) {
        setErrors(result.errors ?? { form: "Não foi possível enviar agora." });
        setStatus("idle");
        return;
      }
      setSuccessData({
        whatsappUrl: result.whatsappUrl ?? whatsappLink(),
        name: payload.name.split(" ")[0] ?? "",
      });
      setStatus("success");
      trackConversion(payload.service || null);
      form.reset();
      startedAt.current = Date.now();
    } catch {
      setErrors({
        form: "Sem conexão com o servidor. Tente novamente ou fale pelo WhatsApp.",
      });
      setStatus("idle");
    }
  }

  if (status === "success" && successData) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:p-8"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-700 text-white">
          <Icon name="check" size={24} />
        </span>
        <h3 className="mt-4 text-xl font-extrabold text-brand-950">
          Pedido recebido{successData.name ? `, ${successData.name}` : ""}.
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
          Registramos seus dados e a equipe responde em até 1 dia útil com o valor e o
          prazo do seu caso. Se preferir agilizar, envie a mesma mensagem no WhatsApp.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={successData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("whatsapp", "md")}
          >
            <Icon name="whatsapp" size={18} />
            Continuar no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setSuccessData(null);
            }}
            className={buttonClass("secondary", "md")}
          >
            Enviar outro pedido
          </button>
        </div>
        <p className="mt-4 text-xs text-ink-soft">
          Precisa falar agora? Ligue para{" "}
          <a href={site.phoneTel} className="font-semibold text-brand-700 underline">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className={compact ? "" : "rounded-2xl border border-mist-dark bg-white p-5 sm:p-7"}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor={`${sourcePage}-name`} className={labelClass}>
            Nome completo <span className="text-brand-600">*</span>
          </label>
          <input
            id={`${sourcePage}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            placeholder="Como podemos te chamar?"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${sourcePage}-name-error` : undefined}
            className={fieldClass}
          />
          {errors.name ? (
            <p id={`${sourcePage}-name-error`} className="mt-1.5 text-xs font-medium text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${sourcePage}-phone`} className={labelClass}>
            WhatsApp com DDD <span className="text-brand-600">*</span>
          </label>
          <input
            id={`${sourcePage}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="(44) 98822-9844"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${sourcePage}-phone-error` : undefined}
            className={fieldClass}
          />
          {errors.phone ? (
            <p id={`${sourcePage}-phone-error`} className="mt-1.5 text-xs font-medium text-red-700">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${sourcePage}-email`} className={labelClass}>
            E-mail <span className="font-normal text-ink-soft">(opcional)</span>
          </label>
          <input
            id={`${sourcePage}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="seu@email.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${sourcePage}-email-error` : undefined}
            className={fieldClass}
          />
          {errors.email ? (
            <p id={`${sourcePage}-email-error`} className="mt-1.5 text-xs font-medium text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${sourcePage}-service`} className={labelClass}>
            Tratamento de interesse
          </label>
          <select
            id={`${sourcePage}-service`}
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            className={fieldClass}
          >
            <option value="">Selecione (ou deixe em branco)</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={`${sourcePage}-profile`} className={labelClass}>
            Você é
          </label>
          <select
            id={`${sourcePage}-profile`}
            name="profile"
            defaultValue={profiles[0]}
            className={fieldClass}
          >
            {profiles.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={`${sourcePage}-preferred`} className={labelClass}>
            Melhor horário para contato
          </label>
          <select
            id={`${sourcePage}-preferred`}
            name="preferredTime"
            defaultValue={preferredTimes[2]}
            className={fieldClass}
          >
            {preferredTimes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${sourcePage}-message`} className={labelClass}>
            Conte o que você precisa{" "}
            <span className="font-normal text-ink-soft">(opcional)</span>
          </label>
          <textarea
            id={`${sourcePage}-message`}
            name="message"
            rows={compact ? 3 : 4}
            maxLength={2000}
            placeholder="Ex.: sinto dor no dente do fundo do lado direito há três dias."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? `${sourcePage}-message-error` : `${sourcePage}-message-help`
            }
            className={`${fieldClass} min-h-24 resize-y`}
          />
          <p id={`${sourcePage}-message-help`} className="mt-1.5 text-xs text-ink-soft">
            Não envie dados sensíveis de saúde. O detalhamento clínico é feito na avaliação.
          </p>
          {errors.message ? (
            <p id={`${sourcePage}-message-error`} className="mt-1.5 text-xs font-medium text-red-700">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-lg bg-mist p-3.5">
        <input
          id={`${sourcePage}-consent`}
          name="consent"
          type="checkbox"
          required
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? `${sourcePage}-consent-error` : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 rounded border-mist-dark text-brand-700 accent-brand-700 focus:ring-brand-300"
        />
        <label htmlFor={`${sourcePage}-consent`} className="text-[13px] leading-relaxed text-ink-soft">
          Autorizo o contato da Sorrir Clínica Odontológica por WhatsApp, telefone ou
          e-mail para responder este pedido, conforme a{" "}
          <Link href="/privacidade" className="font-semibold text-brand-700 underline">
            Política de Privacidade
          </Link>
          . <span className="text-brand-600">*</span>
        </label>
      </div>
      {errors.consent ? (
        <p className="mt-1.5 text-xs font-medium text-red-700">{errors.consent}</p>
      ) : null}

      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${sourcePage}-website`}>Não preencha este campo</label>
        <input id={`${sourcePage}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {errors.form ? (
        <p
          role="alert"
          className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-800"
        >
          {errors.form}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className={`${buttonClass("primary", "lg")} mt-5 w-full`}
      >
        {status === "sending" ? "Enviando pedido..." : "Pedir orçamento sem compromisso"}
        {status === "sending" ? null : <Icon name="arrow" size={18} />}
      </button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-ink-soft">
        <Icon name="lock" size={14} />
        Seus dados são usados apenas para responder este contato.
      </p>
    </form>
  );
}
