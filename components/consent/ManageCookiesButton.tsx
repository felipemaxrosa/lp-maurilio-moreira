"use client";

import { resetConsent } from "@/lib/consent";

/** Reabre o banner de cookies para a pessoa rever ou revogar a escolha (direito da LGPD). */
export function ManageCookiesButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => resetConsent()}
      className={className ?? "transition-colors hover:text-ciano"}
    >
      Gerenciar cookies
    </button>
  );
}
