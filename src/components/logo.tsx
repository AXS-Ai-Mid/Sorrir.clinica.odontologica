import Link from "next/link";

export function Logo({
  tone = "light",
  compact = false,
}: {
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  const showWordmark = !compact;
  return (
    <Link
      href="/"
      aria-label="Sorrir Clínica Odontológica — ir para a página inicial"
      className="inline-flex items-center gap-2.5 rounded-lg"
    >
      <span
        aria-hidden="true"
        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-700 shadow-[0_6px_16px_-8px_rgba(0,66,170,0.9)]"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true">
          <path
            d="M16 7.6c-2.1-1.4-4.3-2-6.2-1.2-2.4 1-3.8 3.7-3.5 7.2.2 2 .8 3.4 1.2 5.4.4 1.9.4 3.5.8 5.5.3 1.9.8 4 2.4 4 1.5 0 1.8-2 2.2-4 .4-1.9.5-3.6 1.7-3.6s1.4 1.7 1.7 3.6c.4 2 .7 4 2.2 4 1.6 0 2.1-2.1 2.4-4 .4-2 .4-3.6.8-5.5.4-2 1-3.4 1.2-5.4.3-3.5-1.1-6.2-3.5-7.2-1.9-.8-4.1-.2-6.2 1.2Z"
            fill="white"
          />
          <path
            d="M9.5 12.4c1.7 1.6 4 2.4 6.5 2.4s4.8-.8 6.5-2.4"
            stroke="#00FDFF"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={`font-[family-name:var(--font-display)] text-[21px] font-extrabold tracking-tight ${
              tone === "dark" ? "text-white" : "text-brand-950"
            }`}
          >
            Sorrir
          </span>
          <span
            className={`mt-1 text-[9.5px] font-semibold uppercase tracking-[0.19em] ${
              tone === "dark" ? "text-brand-200" : "text-ink-soft"
            }`}
          >
            Clínica Odontológica
          </span>
        </span>
      ) : null}
    </Link>
  );
}
