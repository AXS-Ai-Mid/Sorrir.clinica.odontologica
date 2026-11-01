"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: string;
};

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const categories = ["Todos", ...Array.from(new Set(items.map((item) => item.category)))];
  const [filter, setFilter] = useState("Todos");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = filter === "Todos" ? items : items.filter((item) => item.category === filter);
  const active = activeIndex !== null ? filtered[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index === null ? null : (index + 1) % filtered.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null ? null : (index - 1 + filtered.length) % filtered.length,
        );
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activeIndex, filtered.length]);

  return (
    <div>
      <div role="group" aria-label="Filtrar imagens por categoria" className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const selected = filter === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setFilter(category);
                setActiveIndex(null);
              }}
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

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <li key={item.src + item.caption}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-mist-dark bg-mist text-left focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
              aria-label={`Ampliar imagem: ${item.caption}`}
            >
              <span className="relative block aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </span>
              <span className="flex items-center justify-between gap-3 bg-white px-4 py-3">
                <span>
                  <span className="block text-[13px] font-semibold text-brand-950">
                    {item.caption}
                  </span>
                  <span className="mt-0.5 block text-[11px] uppercase tracking-wide text-ink-soft">
                    {item.category}
                  </span>
                </span>
                <Icon name="search" size={18} className="shrink-0 text-brand-600" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${active.caption}`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-950/85 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white">
            <div className="relative aspect-[16/10] w-full bg-mist">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-brand-950">{active.caption}</p>
                <p className="mt-0.5 text-xs text-ink-soft">{active.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((index) =>
                      index === null ? null : (index - 1 + filtered.length) % filtered.length,
                    )
                  }
                  className="grid h-10 w-10 place-items-center rounded-lg border border-mist-dark text-brand-800 hover:bg-mist"
                  aria-label="Imagem anterior"
                >
                  <Icon name="arrowLeft" size={18} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((index) =>
                      index === null ? null : (index + 1) % filtered.length,
                    )
                  }
                  className="grid h-10 w-10 place-items-center rounded-lg border border-mist-dark text-brand-800 hover:bg-mist"
                  aria-label="Próxima imagem"
                >
                  <Icon name="arrow" size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="grid h-10 w-10 place-items-center rounded-lg bg-brand-700 text-white hover:bg-brand-800"
                  aria-label="Fechar imagem"
                  autoFocus
                >
                  <Icon name="close" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
