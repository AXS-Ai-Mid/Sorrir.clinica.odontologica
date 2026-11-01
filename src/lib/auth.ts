import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "sorrir_admin_session";
const DEFAULT_PASSWORD = "sorrir2026";
const SESSION_MAX_AGE = 60 * 60 * 8;

export const usingDefaultPassword = !process.env.ADMIN_PASSWORD;

function adminPassword() {
  const fromEnv = process.env.ADMIN_PASSWORD?.trim();
  return fromEnv && fromEnv.length > 0 ? fromEnv : DEFAULT_PASSWORD;
}

function sessionToken() {
  return createHmac("sha256", adminPassword())
    .update("sorrir-admin-v1")
    .digest("hex");
}

export function verifyPassword(input: string) {
  const expected = Buffer.from(adminPassword());
  const given = Buffer.from(input ?? "");
  if (expected.length !== given.length) return false;
  return timingSafeEqual(expected, given);
}

export async function isAuthenticated() {
  const store = await cookies();
  const value = store.get(COOKIE_NAME)?.value;
  if (!value) return false;
  return value === sessionToken();
}

export async function createSession() {
  const store = await cookies();
  store.set(COOKIE_NAME, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function destroySession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
