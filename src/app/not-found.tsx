import Link from "next/link";
import { Icon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { site, whatsappLink } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 80% 0%, rgba(0,97,255,0.16) 0%, rgba(238,241,245,0) 65%)",
        }}
      />
      <div className="container-page relative py-16 lg:py-24">
        <p className="eyebrow">
          <span aria-hidden="true" className="inline-block h-px w-6 bg-brand-500" />
          Erro 404
        </p>
        <h1 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-[1.08] text-brand-950">
          Esta página saiu do lugar
        </h1>
        <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-ink-soft">
          O endereço não existe ou foi alterado. Você pode voltar para a home, ver os
          tratamentos ou falar direto com a equipe da clínica em Maringá.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg" icon="arrowLeft" iconPosition="left">
            Voltar para a home
          </ButtonLink>
          <ButtonLink
            href={whatsappLink("Olá! Vim pelo site e gostaria de mais informações.")}
            variant="whatsapp"
            size="lg"
            icon="whatsapp"
            iconPosition="left"
            external
          >
            Falar no WhatsApp
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/servicos", title: "Tratamentos", text: "Todos os atendimentos e o que cada um inclui." },
            { href: "/como-funciona", title: "Como funciona", text: "As 5 etapas do contato à manutenção." },
            { href: "/contato", title: "Contato", text: "Mapa, horário e formulário de orçamento." },
            { href: "/faq", title: "Dúvidas", text: "Respostas sobre valores, prazos e convênios." },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-white bg-white p-5 transition-colors hover:border-brand-200 hover:bg-brand-50/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-bold text-brand-950">{item.title}</span>
                <Icon name="arrow" size={16} className="text-brand-600" />
              </div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{item.text}</p>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-[13px] text-ink-soft">
          Se você chegou aqui por um link antigo, avise a equipe:{" "}
          <a href={site.phoneTel} className="font-semibold text-brand-700 underline">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
