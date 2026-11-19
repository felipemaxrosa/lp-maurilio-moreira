"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

/** Revela o conteúdo com fade + leve subida ao entrar na viewport. Respeita prefers-reduced-motion. */
export function Reveal({ children, className, delay = 0, y = 16, once = true }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      // margin positivo embaixo = dispara ~220px ANTES de entrar na viewport,
      // então o conteúdo já está visível quando o usuário rola até ele.
      viewport={{ once, margin: "0px 0px 220px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
