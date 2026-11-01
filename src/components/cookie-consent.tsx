"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonClass } from "@/components/ui";

const STORAGE_KEY = "sorrir-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(false);
    }
  }, []);

  function choose(value: "accepted" | "essential") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* armazenamento indisponível: mantém apenas a sessão atual */
    }
    window.dispatchEvent(new Event("sorrir:consent"));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
      className="fixed bottom-4 left-4 right-4 z-50 max-w-md rounded-2xl border border-mist-dark bg-white p-5 shadow-[0_20px_48px_-18px_rgba(11,27,51,0.45)] sm:right-auto sm:bottom-6 sm:left-6"
    >
      <h2 id="cookie-title" className="text-base font-extrabold text-brand-950">
        Cookies e privacidade
      </h2>
      <p id="cookie-description" className="mt-2 text-[13px] leading-relaxed text-ink-soft">
        Usamos cookies essenciais para o site funcionar e, com sua autorização, cookies de
        análise para entender como as pessoas chegam até a clínica. Saiba mais na{" "}
        <Link href="/privacidade" className="font-semibold text-brand-700 underline">
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => choose("accepted")}
          className={`${buttonClass("primary", "sm")} sm:flex-1`}
        >
          Aceitar todos
        </button>
        <button
          type="button"
          onClick={() => choose("essential")}
          className={`${buttonClass("secondary", "sm")} sm:flex-1`}
        >
          Somente essenciais
        </button>
      </div>
    </div>
  );
}
