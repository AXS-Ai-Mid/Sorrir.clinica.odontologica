import type { ContentFaq } from "@/lib/services";
import { Icon } from "@/components/icons";

export function Accordion({
  items,
  idPrefix = "faq",
}: {
  items: ContentFaq[];
  idPrefix?: string;
}) {
  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <details
          key={`${idPrefix}-${index}`}
          id={`${idPrefix}-${index}`}
          className="group rounded-xl border border-mist-dark bg-white px-5 py-1 open:border-brand-200 open:bg-brand-50/40"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left text-[15.5px] font-semibold text-brand-950 marker:hidden">
            <span>{item.q}</span>
            <span
              aria-hidden="true"
              className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brand-200 text-brand-700 transition-transform duration-200 group-open:rotate-45 group-open:bg-brand-700 group-open:text-white"
            >
              <Icon name="plus" size={16} />
            </span>
          </summary>
          <div className="pb-4 pr-8 text-[14.5px] leading-relaxed text-ink-soft">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
