import { desc } from "drizzle-orm";
import { db } from "@/db";
import { leads } from "@/db/schema";
import { isAuthenticated } from "@/lib/auth";
import { leadStatusLabels, prettyPhone, type LeadStatus } from "@/lib/leads";

export const dynamic = "force-dynamic";

function csvCell(value: string | number | boolean | Date | null | undefined) {
  if (value === null || value === undefined) return '""';
  const raw = value instanceof Date ? value.toISOString() : String(value);
  return `"${raw.replaceAll('"', '""').replaceAll("\n", " ")}"`;
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return new Response("Acesso não autorizado.", { status: 401 });
  }

  const rows = await db.select().from(leads).orderBy(desc(leads.createdAt));

  const header = [
    "ID",
    "Recebido em",
    "Nome",
    "WhatsApp",
    "E-mail",
    "Tratamento",
    "Perfil",
    "Melhor horário",
    "Situação",
    "Origem",
    "Consentimento",
    "Mensagem",
    "Anotações internas",
  ];

  const body = rows.map((row) => [
    row.id,
    row.createdAt,
    row.name,
    prettyPhone(row.phone),
    row.email,
    row.service,
    row.profile,
    row.preferredTime,
    leadStatusLabels[row.status as LeadStatus] ?? row.status,
    row.sourcePage,
    row.consent ? "Sim" : "Não",
    row.message,
    row.notes,
  ]);

  const csv = [header, ...body].map((line) => line.map(csvCell).join(";")).join("\r\n");
  const stamp = new Date().toISOString().slice(0, 10);

  return new Response(`\uFEFF${csv}`, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="leads-sorrir-${stamp}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
