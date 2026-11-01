"use client";

import { useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

type Props = { children: ReactNode; className?: string; max?: number };

/** Leve inclinação 3D seguindo o cursor (desligada em prefers-reduced-motion / toque). */
export function TiltCard({ children, className, max = 6 }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const ry = (px - 0.5) * max * 2;
    const rx = (0.5 - py) * max * 2;
    setTransform(`perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTransform("")}
      className={className}
      style={{ transform: transform || undefined, transition: "transform 0.25s ease-out", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
