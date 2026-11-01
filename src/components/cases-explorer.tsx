"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/icons";
import type { CareCase } from "@/lib/cases";

export function CasesExplorer({ items }: { items: CareCase[] }) {
  const categories = ["Todos", ...Array.from(new Set(items.map((item) => item.category)))];
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? items : items.filter((item) => item.category === filter);

  return (
    <div>
      <div role="group" aria-label="Filtrar casos por categoria" className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const selected = filter === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={selected}
              className={`min-h-10 rounded-full border px-4 text-[13px] font-semibold transition-colors ${
                selected
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-mist-dark bg-white text-ink-soft hover:border-brand-300 hover:text-brand-800"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-3 text-sm text-ink-soft">
        {filtered.length} {filtered.length === 1 ? "registro" : "registros"} exibidos
      </p>

      <ul className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <li key={item.slug}>
            <article className="flex h-full flex-col rounded-2xl border border-mist-dark bg-white p-6 transition-shadow duration-200 hover:shadow-[0_16px_40px_-24px_rgba(11,27,51,0.35)]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-800">
                  {item.category}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wide text-ink-soft">
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-3 text-[17px] font-bold leading-snug text-brand-950">
                <Link href={`/casos/${item.slug}`} className="hover:text-brand-700 hover:underline">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{item.summary}</p>
              <Link
                href={`/casos/${item.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
              >
                Ver protocolo completo
                <Icon name="arrow" size={16} />
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
