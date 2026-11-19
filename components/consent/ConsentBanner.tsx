"use client";

import Link from "next/link";
import { useConsent } from "@/lib/consent";

/**
 * Banner de consentimento de cookies (LGPD). Aparece só enquanto a pessoa não decidiu.
 * Escolha real: "Aceitar" liga o Google Analytics; "Recusar" mantém tudo desligado.
 * Faixa inferior de largura total (z-[60], acima do header e do botão flutuante do WhatsApp).
 */
export function ConsentBanner() {
  const { status, ready, accept, reject } = useConsent();

  if (!ready || status !== null) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies e privacidade"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-petroleo-900/98 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <p className="text-sm leading-relaxed text-white/80">
          Usamos cookies para entender como o site é usado e melhorar a sua experiência.
          Os dados de navegação só são coletados com a sua autorização.{" "}
          <Link
            href="/privacidade"
            className="font-semibold text-ciano underline underline-offset-2 hover:text-ciano-bright"
          >
            Saiba mais na Política de Privacidade e Cookies
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={reject}
            className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/60"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-md bg-ciano px-5 py-2.5 text-sm font-bold text-petroleo-900 shadow-md transition-transform hover:-translate-y-0.5"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
