import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { and, desc, eq, ilike, or, sql, type SQL } from "drizzle-orm";
import { db } from "@/db";
import { leads } from "@/db/schema";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { deleteLead, logoutAction, saveLeadNotes, updateLeadStatus } from "@/app/admin/actions";
import { isAuthenticated } from "@/lib/auth";
import { leadStatusLabels, leadStatuses, prettyPhone, type LeadStatus } from "@/lib/leads";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Painel de leads",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "America/Sao_Paulo",
});

const statusTone: Record<string, string> = {
  novo: "bg-brand-50 text-brand-800 border-brand-200",
  contatado: "bg-amber-50 text-amber-900 border-amber-200",
  orcamento_enviado: "bg-violet-50 text-violet-900 border-violet-200",
  agendado: "bg-emerald-50 text-emerald-900 border-emerald-200",
  fechado: "bg-emerald-100 text-emerald-900 border-emerald-300",
  perdido: "bg-slate-100 text-slate-700 border-slate-300",
};

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string }>;
}) {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const params = await searchParams;
  const statusFilter = leadStatuses.includes(params.status as LeadStatus)
    ? (params.status as LeadStatus)
    : null;
  const query = (params.q ?? "").trim();

  const conditions: SQL[] = [];
  if (statusFilter) conditions.push(eq(leads.status, statusFilter));
  if (query) {
    const like = `%${query}%`;
    const search = or(
      ilike(leads.name, like),
      ilike(leads.phone, like),
      ilike(leads.email, like),
      ilike(leads.service, like),
    );
    if (search) conditions.push(search);
  }

  const [rows, counts, originRows] = await Promise.all([
    db
      .select()
      .from(leads)
      .where(conditions.length > 0 ? and(...conditions) : undefined)
      .orderBy(desc(leads.createdAt))
      .limit(200),
    db
      .select({ status: leads.status, total: sql<number>`count(*)::int` })
      .from(leads)
      .groupBy(leads.status),
    db
      .select({ page: leads.sourcePage, total: sql<number>`count(*)::int` })
      .from(leads)
      .groupBy(leads.sourcePage)
      .orderBy(desc(sql`count(*)`))
      .limit(1),
  ]);

  const totalLeads = counts.reduce((sum, item) => sum + Number(item.total), 0);
  const countByStatus = new Map(counts.map((item) => [item.status, Number(item.total)]));
  const newCount = countByStatus.get("novo") ?? 0;
  const scheduledCount =
    (countByStatus.get("agendado") ?? 0) + (countByStatus.get("fechado") ?? 0);

  return (
    <div className="min-h-[80vh] bg-mist">
      <div className="border-b border-mist-dark bg-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="hidden rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-800 sm:inline">
              Painel de leads
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-mist-dark px-3 text-[13px] font-semibold text-brand-900 hover:bg-mist"
            >
              <Icon name="external" size={15} />
              Ver site
            </Link>
            <a
              href="/api/admin/export"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-mist-dark px-3 text-[13px] font-semibold text-brand-900 hover:bg-mist"
            >
              <Icon name="download" size={15} />
              Exportar CSV
            </a>
            <form action={logoutAction}>
              <button
                type="submit"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-brand-900 px-3 text-[13px] font-semibold text-white hover:bg-brand-950"
              >
                <Icon name="lock" size={15} />
                Sair
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-page py-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-[26px] font-extrabold text-brand-950">Pedidos de orçamento</h1>
            <p className="mt-1 text-[13.5px] text-ink-soft">
              Acompanhe os contatos recebidos pelo site. Nenhum lead é enviado a terceiros.
            </p>
          </div>
          <p className="text-[12.5px] text-ink-soft">
            {totalLeads} {totalLeads === 1 ? "registro" : "registros"} no total ·{" "}
            {newCount} novo{newCount === 1 ? "" : "s"}
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total de leads", value: totalLeads, icon: "document" as const },
            { label: "Aguardando contato", value: newCount, icon: "alert" as const },
            { label: "Agendados ou fechados", value: scheduledCount, icon: "calendar" as const },
            {
              label: "Origem com mais pedidos",
              value: originRows[0]?.page ?? "—",
              icon: "scan" as const,
            },
          ].map((card) => (
            <div key={card.label} className="rounded-2xl border border-mist-dark bg-white p-4">
              <Icon name={card.icon} size={18} className="text-brand-600" />
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                {card.label}
              </p>
              <p className="mt-0.5 text-[20px] font-extrabold text-brand-950">{card.value}</p>
            </div>
          ))}
        </div>

        <form
          method="get"
          className="mt-5 flex flex-col gap-3 rounded-2xl border border-mist-dark bg-white p-4 sm:flex-row sm:items-end"
        >
          <div className="flex-1">
            <label htmlFor="q" className="mb-1 block text-[12px] font-semibold text-brand-950">
              Buscar por nome, telefone, e-mail ou tratamento
            </label>
            <input
              id="q"
              name="q"
              defaultValue={query}
              placeholder="Ex.: Maria ou implante"
              className="min-h-11 w-full rounded-lg border border-mist-dark px-3 text-[14px] focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            />
          </div>
          <div>
            <label htmlFor="status" className="mb-1 block text-[12px] font-semibold text-brand-950">
              Situação
            </label>
            <select
              id="status"
              name="status"
              defaultValue={statusFilter ?? ""}
              className="min-h-11 w-full rounded-lg border border-mist-dark px-3 text-[14px] focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 sm:w-52"
            >
              <option value="">Todas</option>
              {leadStatuses.map((status) => (
                <option key={status} value={status}>
                  {leadStatusLabels[status]}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg bg-brand-700 px-4 text-[13px] font-semibold text-white hover:bg-brand-800"
          >
            <Icon name="search" size={15} />
            Filtrar
          </button>
          {query || statusFilter ? (
            <Link
              href="/admin"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-mist-dark px-3 text-[13px] font-semibold text-ink-soft hover:bg-mist"
            >
              Limpar
            </Link>
          ) : null}
        </form>

        {rows.length === 0 ? (
          <div className="mt-5 rounded-2xl border border-dashed border-mist-dark bg-white p-10 text-center">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-700">
              <Icon name="document" size={22} />
            </span>
            <h2 className="mt-4 text-[17px] font-bold text-brand-950">
              {query || statusFilter
                ? "Nenhum lead com esse filtro"
                : "Nenhum pedido recebido ainda"}
            </h2>
            <p className="mx-auto mt-2 max-w-md text-[13.5px] leading-relaxed text-ink-soft">
              {query || statusFilter
                ? "Ajuste a busca ou limpe os filtros para ver todos os registros."
                : "Quando alguém enviar o formulário do site, o pedido aparece aqui com origem, consentimento LGPD e situação. Teste pelo formulário público para ver o fluxo completo."}
            </p>
            <Link
              href="/contato"
              className="mt-4 inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-brand-700 px-4 text-[13px] font-semibold text-white hover:bg-brand-800"
            >
              Abrir formulário do site
              <Icon name="arrow" size={15} />
            </Link>
          </div>
        ) : (
          <div className="mt-5 grid gap-3">
            {rows.map((lead) => {
              const status = lead.status as LeadStatus;
              return (
                <article
                  key={lead.id}
                  className="rounded-2xl border border-mist-dark bg-white p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-[16px] font-extrabold text-brand-950">{lead.name}</h2>
                        <span
                          className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
                            statusTone[status] ?? "border-mist-dark bg-mist text-ink-soft"
                          }`}
                        >
                          {leadStatusLabels[status] ?? status}
                        </span>
                        <span className="text-[11.5px] text-ink-soft">#{lead.id}</span>
                      </div>
                      <p className="mt-1 text-[13px] text-ink-soft">
                        Recebido em {dateFormatter.format(lead.createdAt)} · Origem:{" "}
                        {lead.sourcePage ?? "site"}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={`https://wa.me/55${lead.phone.replace(/\D+/g, "")}?text=${encodeURIComponent(
                          `Olá, ${lead.name.split(" ")[0]}! Recebemos seu pedido de orçamento pelo site da Sorrir. Podemos falar agora?`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-whats px-3 text-[12.5px] font-semibold text-white hover:brightness-110"
                      >
                        <Icon name="whatsapp" size={15} />
                        {prettyPhone(lead.phone)}
                      </a>
                      <a
                        href={`mailto:?subject=${encodeURIComponent(`Pedido de orçamento #${lead.id}`)}`}
                        className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-mist-dark px-3 text-[12.5px] font-semibold text-brand-900 hover:bg-mist"
                        aria-label="Encaminhar por e-mail"
                      >
                        <Icon name="document" size={15} />
                        E-mail
                      </a>
                    </div>
                  </div>

                  <dl className="mt-4 grid gap-3 border-t border-mist-dark pt-4 text-[13px] sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <dt className="font-semibold text-ink-soft">Tratamento</dt>
                      <dd className="mt-0.5 font-medium text-brand-950">
                        {lead.service ?? "Não informado"}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink-soft">Perfil</dt>
                      <dd className="mt-0.5 font-medium text-brand-950">
                        {lead.profile ?? "Não informado"}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink-soft">Melhor horário</dt>
                      <dd className="mt-0.5 font-medium text-brand-950">
                        {lead.preferredTime ?? "Não informado"}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink-soft">E-mail</dt>
                      <dd className="mt-0.5 font-medium text-brand-950">
                        {lead.email ?? "Não informado"}
                      </dd>
                    </div>
                  </dl>

                  {lead.message ? (
                    <p className="mt-3 rounded-lg bg-mist p-3 text-[13px] leading-relaxed text-ink-soft">
                      “{lead.message}”
                    </p>
                  ) : null}

                  <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <form action={updateLeadStatus} className="flex flex-wrap items-end gap-2">
                      <input type="hidden" name="id" value={lead.id} />
                      <div>
                        <label
                          htmlFor={`status-${lead.id}`}
                          className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-soft"
                        >
                          Atualizar situação
                        </label>
                        <select
                          id={`status-${lead.id}`}
                          name="status"
                          defaultValue={lead.status}
                          className="min-h-9 rounded-lg border border-mist-dark px-2.5 text-[13px] focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
                        >
                          {leadStatuses.map((option) => (
                            <option key={option} value={option}>
                              {leadStatusLabels[option]}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-brand-700 px-3 text-[12.5px] font-semibold text-white hover:bg-brand-800"
                      >
                        Salvar
                      </button>
                      <span className="text-[11.5px] text-ink-soft">
                        Consentimento LGPD: {lead.consent ? "sim" : "não"}
                      </span>
                    </form>

                    <form action={deleteLead}>
                      <input type="hidden" name="id" value={lead.id} />
                      <button
                        type="submit"
                        className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-red-200 px-3 text-[12.5px] font-semibold text-red-700 hover:bg-red-50"
                      >
                        <Icon name="close" size={14} />
                        Excluir registro
                      </button>
                    </form>
                  </div>

                  <details className="mt-3">
                    <summary className="cursor-pointer text-[12.5px] font-semibold text-brand-700 marker:hidden">
                      Anotações internas{lead.notes ? " (preenchidas)" : ""}
                    </summary>
                    <form action={saveLeadNotes} className="mt-2">
                      <input type="hidden" name="id" value={lead.id} />
                      <label htmlFor={`notes-${lead.id}`} className="sr-only">
                        Anotações internas do lead {lead.id}
                      </label>
                      <textarea
                        id={`notes-${lead.id}`}
                        name="notes"
                        rows={3}
                        defaultValue={lead.notes ?? ""}
                        placeholder="Ex.: orçamento enviado em 12/11, retorno agendado para 19/11."
                        className="w-full rounded-lg border border-mist-dark px-3 py-2 text-[13px] focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      />
                      <button
                        type="submit"
                        className="mt-2 inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-mist-dark px-3 text-[12.5px] font-semibold text-brand-900 hover:bg-mist"
                      >
                        Salvar anotação
                      </button>
                    </form>
                  </details>
                </article>
              );
            })}
          </div>
        )}

        <div className="mt-6 rounded-2xl border border-mist-dark bg-white p-5">
          <h2 className="text-[14px] font-bold text-brand-950">Privacidade e LGPD</h2>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-soft">
            Estes registros contêm dados pessoais. Use apenas para responder ao pedido de
            atendimento, não compartilhe fora da equipe e exclua o registro quando ele não for
            mais necessário. Solicitações de exclusão devem ser atendidas em até 15 dias.
          </p>
          <p className="mt-2 text-[12px] text-ink-soft">
            Painel protegido por senha. Em produção, defina{" "}
            <code className="rounded bg-mist px-1 font-mono">ADMIN_PASSWORD</code> e habilite
            HTTPS. Contato da clínica:{" "}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-700 underline"
            >
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
