import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { loginAction } from "@/app/admin/actions";
import { isAuthenticated, usingDefaultPassword } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Acesso ao painel",
  description: "Acesso restrito à equipe da clínica.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>;
}) {
  if (await isAuthenticated()) redirect("/admin");
  const { erro } = await searchParams;

  return (
    <div className="grid min-h-[70vh] place-items-center bg-mist px-4 py-16">
      <div className="w-full max-w-md">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="mt-6 rounded-2xl border border-mist-dark bg-white p-6 shadow-[0_20px_48px_-30px_rgba(11,27,51,0.45)] sm:p-8">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
            <Icon name="lock" size={22} />
          </span>
          <h1 className="mt-4 text-[22px] font-extrabold text-brand-950">Painel de leads</h1>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
            Área restrita à equipe da clínica. Informe a senha de acesso para acompanhar os
            pedidos de orçamento recebidos pelo site.
          </p>

          <form action={loginAction} className="mt-5">
            {erro ? (
              <p
                role="alert"
                className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-medium text-red-800"
              >
                Senha incorreta. Verifique e tente novamente.
              </p>
            ) : null}
            <label htmlFor="password" className="mb-1.5 block text-[13px] font-semibold text-brand-950">
              Senha de acesso
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="min-h-12 w-full rounded-lg border border-mist-dark px-3.5 py-3 text-[15px] focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            />
            <button
              type="submit"
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-700 px-5 font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Entrar no painel
              <Icon name="arrow" size={18} />
            </button>
          </form>

          {usingDefaultPassword ? (
            <p className="mt-4 rounded-lg bg-amber-50 p-3 text-[12px] leading-relaxed text-amber-900">
              Ambiente de demonstração: a senha padrão é <strong>sorrir2026</strong>. Defina a
              variável <code className="font-mono">ADMIN_PASSWORD</code> para usar uma senha
              própria em produção.
            </p>
          ) : null}

          <p className="mt-4 text-center text-[12px] text-ink-soft">
            <Link href="/" className="font-semibold text-brand-700 underline">
              Voltar para o site
            </Link>
          </p>
        </div>
        <p className="mt-4 text-center text-[11.5px] leading-relaxed text-ink-soft">
          Dados pessoais tratados conforme a LGPD. Acesso registrado e restrito à finalidade de
          atendimento comercial.
        </p>
      </div>
    </div>
  );
}
