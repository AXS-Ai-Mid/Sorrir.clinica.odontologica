import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { leads } from "@/db/schema";
import {
  createLead,
  leadWhatsappUrl,
  notifyLeadByEmail,
  validateLead,
  type LeadInput,
} from "@/lib/leads";

export const dynamic = "force-dynamic";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 6;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "desconhecido";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        errors: {
          form: "Muitos envios em sequência. Aguarde alguns minutos ou fale pelo WhatsApp.",
        },
      },
      { status: 429 },
    );
  }

  let payload: LeadInput;
  try {
    payload = (await request.json()) as LeadInput;
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: "Não foi possível ler os dados enviados." } },
      { status: 400 },
    );
  }

  const validation = validateLead(payload);
  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, errors: validation.errors },
      { status: 422 },
    );
  }

  try {
    const created = await createLead(validation.data);
    const notified = await notifyLeadByEmail(created);

    if (notified) {
      await db
        .update(leads)
        .set({ notifiedAt: new Date() })
        .where(eq(leads.id, created.id));
    }

    return NextResponse.json({
      ok: true,
      leadId: created.id,
      whatsappUrl: leadWhatsappUrl(validation.data),
      message:
        "Pedido recebido. Respondemos em até 1 dia útil com o valor e o prazo do seu caso.",
    });
  } catch (error) {
    console.error("[leads] falha ao registrar lead", error);
    return NextResponse.json(
      {
        ok: false,
        errors: {
          form: "Tivemos um problema para registrar seu pedido. Tente novamente ou fale pelo WhatsApp.",
        },
      },
      { status: 500 },
    );
  }
}
