"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const HEADER_OFFSET = 80; // header fixo (lg:h-20) — compensa o scroll da âncora

/** Smooth-scroll leve (Lenis) + navegação por âncora (#secao) + reset ao topo na troca de rota. Desliga para quem prefere menos movimento. */
export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenisRef.current = lenis;
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const scrollToHash = (hash: string, immediate = false): boolean => {
      if (!hash || hash === "#") return false;
      let el: Element | null = null;
      try {
        el = document.querySelector(hash);
      } catch {
        return false;
      }
      if (!el) return false;
      lenis.scrollTo(el as HTMLElement, { offset: -HEADER_OFFSET, immediate });
      return true;
    };

    let pendingHash: string | null = null;
    let pendingTimer = 0;

    // Lenis controla o scroll, então o salto nativo de âncora não funciona.
    // Não damos preventDefault: deixamos o Next atualizar a URL e o menu fechar,
    // e logo depois forçamos o scroll pelo Lenis.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const anchor = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      let url: URL;
      try {
        url = new URL(anchor.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin || !url.hash) return;

      if (url.pathname === window.location.pathname) {
        // Mesma página: rola no próximo frame (após o handler do Next).
        requestAnimationFrame(() => scrollToHash(url.hash));
      } else {
        // Outra página: deixa o Next navegar e rola assim que o alvo existir.
        pendingHash = url.hash;
        window.clearTimeout(pendingTimer);
        let tries = 0;
        const tick = () => {
          if (!pendingHash) return;
          if (window.location.pathname === url.pathname && scrollToHash(pendingHash)) {
            pendingHash = null;
            return;
          }
          if (tries++ < 40) pendingTimer = window.setTimeout(tick, 50);
        };
        pendingTimer = window.setTimeout(tick, 100);
      }
    };

    document.addEventListener("click", onClick);

    // Hash no carregamento direto (ex.: colar /#gabinete na barra).
    if (window.location.hash) {
      const initial = window.location.hash;
      window.setTimeout(() => scrollToHash(initial, true), 300);
    }

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      window.clearTimeout(pendingTimer);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  // Troca de rota: o Next reseta o scroll ao topo, mas o Lenis ignora isso.
  // Forçamos o topo aqui — exceto quando a navegação aponta para uma âncora.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (window.location.hash) return; // âncora: o handler de clique cuida do scroll
    lenis.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
