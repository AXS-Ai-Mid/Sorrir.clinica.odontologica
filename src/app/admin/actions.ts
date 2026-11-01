"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { leads } from "@/db/schema";
import { createSession, destroySession, isAuthenticated, verifyPassword } from "@/lib/auth";
import { leadStatuses, type LeadStatus } from "@/lib/leads";

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  if (!verifyPassword(password)) {
    redirect("/admin/login?erro=1");
  }
  await createSession();
  redirect("/admin");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/login");
}

export async function updateLeadStatus(formData: FormData) {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const id = Number(formData.get("id"));
  const status = String(formData.get("status") ?? "");

  if (!Number.isInteger(id) || id <= 0) return;
  if (!leadStatuses.includes(status as LeadStatus)) return;

  await db.update(leads).set({ status }).where(eq(leads.id, id));
  revalidatePath("/admin");
}

export async function saveLeadNotes(formData: FormData) {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const id = Number(formData.get("id"));
  const notes = String(formData.get("notes") ?? "").slice(0, 2000);

  if (!Number.isInteger(id) || id <= 0) return;

  await db.update(leads).set({ notes }).where(eq(leads.id, id));
  revalidatePath("/admin");
}

export async function deleteLead(formData: FormData) {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const id = Number(formData.get("id"));
  if (!Number.isInteger(id) || id <= 0) return;

  await db.delete(leads).where(eq(leads.id, id));
  revalidatePath("/admin");
}
