"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type CountUpProps = {
  to: number;
  duration?: number;
  className?: string;
  format?: (n: number) => string;
};

/** Conta de 0 até `to` quando entra na tela. */
export function CountUp({ to, duration = 1.6, className, format }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setAnimated(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  // Com movimento reduzido, mostra o valor final direto (sem setState no efeito).
  const value = reduce ? to : animated;

  return (
    <span ref={ref} className={className}>
      {format ? format(value) : value.toLocaleString("pt-BR")}
    </span>
  );
}
