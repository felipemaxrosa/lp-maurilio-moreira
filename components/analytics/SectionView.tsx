"use client";

import { useEffect, useRef } from "react";
import { trackSectionView } from "@/lib/analytics";

/**
 * Sentinela invisível: dispara `section_view` (uma única vez) quando entra na viewport.
 * Permite medir engajamento de uma seção sem transformá-la em Client Component.
 */
export function SectionView({ name }: { name: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            trackSectionView(name);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [name]);

  return <span ref={ref} aria-hidden className="sr-only" />;
}
