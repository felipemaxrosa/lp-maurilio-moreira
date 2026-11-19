"use client";

import { useEffect, useState } from "react";

// Estado de consentimento de cookies (LGPD). Fonte da verdade: localStorage.
// `null` = a pessoa ainda não decidiu (mostra o banner).
export type ConsentStatus = "granted" | "denied" | null;

const STORAGE_KEY = "mm-consent";
const EVENT = "mm-consent-change";

function read(): ConsentStatus {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null; // localStorage indisponível (modo privado/bloqueado)
  }
}

function write(status: ConsentStatus) {
  try {
    if (status === null) window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, status);
  } catch {
    /* segue só em memória nesta sessão se o storage estiver bloqueado */
  }
  // Notifica consumidores na MESMA aba — o evento nativo "storage" só dispara em OUTRAS abas.
  window.dispatchEvent(new CustomEvent(EVENT, { detail: status }));
}

export function setConsent(status: Exclude<ConsentStatus, null>) {
  write(status);
}

export function resetConsent() {
  write(null);
}

/**
 * Hook de consentimento.
 * `status` começa `null` (no servidor e na 1ª renderização do cliente, evitando mismatch
 * de hidratação) e recebe o valor real do localStorage no efeito. `ready` indica que já lemos.
 */
export function useConsent() {
  const [status, setStatus] = useState<ConsentStatus>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setStatus(read());
    setReady(true);

    const onChange = () => setStatus(read());
    window.addEventListener(EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  return {
    status,
    ready,
    accept: () => setConsent("granted"),
    reject: () => setConsent("denied"),
    reset: () => resetConsent(),
  };
}
