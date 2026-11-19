"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

// Layout effect no cliente (roda antes do paint); no servidor vira no-op.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Revela o conteúdo com fade + leve subida ao entrar na viewport — **apenas no
 * desktop (≥1024px)**. No mobile e com prefers-reduced-motion o conteúdo é
 * renderizado direto (visível), pra nunca aparecer vão em branco no scroll.
 */
export function Reveal({ children, className, delay = 0, y = 26, once = true }: RevealProps) {
  const reduce = useReducedMotion();
  const [desktop, setDesktop] = useState(false);

  useIsoLayoutEffect(() => {
    setDesktop(window.matchMedia("(min-width: 1024px)").matches);
  }, []);

  // SSR + 1º paint + mobile + reduced-motion: sem animação, conteúdo visível.
  if (reduce || !desktop) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
