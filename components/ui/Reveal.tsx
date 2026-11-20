import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Atraso da transição, em segundos (para escalonar itens de uma grade). */
  delay?: number;
  /** Deslocamento vertical inicial, em px (default 26). */
  y?: number;
};

/**
 * Revela o conteúdo com fade + leve subida ao entrar na viewport — em **CSS**.
 *
 * O conteúdo é renderizado **visível por padrão** (server component, sem JS no
 * caminho). O estado escondido/animado só é aplicado quando o script inline
 * (`RevealScript`) confirma suporte e adiciona `.is-visible` via observer. Por
 * isso nunca aparece vão em branco no primeiro load/hard reload — mobile ou
 * desktop. Ver regras `.reveal` em `app/globals.css`.
 */
export function Reveal({ children, className, delay = 0, y }: RevealProps) {
  const style: Record<string, string> = {};
  if (delay) style["--reveal-delay"] = `${delay}s`;
  if (y != null) style["--reveal-y"] = `${y}px`;
  const hasStyle = Object.keys(style).length > 0;

  return (
    <div
      className={className ? `reveal ${className}` : "reveal"}
      style={hasStyle ? (style as CSSProperties) : undefined}
      // O observer inline (RevealScript) adiciona `is-visible` antes da hidratação
      // nos elementos já na viewport — mutação intencional pré-paint.
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}
