"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  duration?: number;
  className?: string;
  format?: (n: number) => string;
};

/**
 * Mostra o valor final `to` por padrão (SSR e antes de hidratar — nunca pisca
 * "0" na primeira carga). Quando o elemento entra na tela vindo de fora da
 * viewport, faz a contagem 0 → `to` como realce. Se já estiver visível no load
 * (acima da dobra) ou com prefers-reduced-motion, mantém o valor final direto.
 */
export function CountUp({ to, duration = 1.6, className, format }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done.current) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const run = () => {
      if (done.current) return;
      done.current = true;
      const start = performance.now();
      setValue(0);
      const tick = (now: number) => {
        const p = Math.min((now - start) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setValue(Math.round(eased * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // Já visível no load (acima da dobra): mantém o valor final, sem contar
    // (evita o flash de voltar a 0). Conta só quando rolado para dentro da tela.
    const rect = el.getBoundingClientRect();
    const inViewAtMount = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewAtMount) return;

    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            run();
            io.disconnect();
          }
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {format ? format(value) : value.toLocaleString("pt-BR")}
    </span>
  );
}
