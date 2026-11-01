import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/** Cabeçalho de seção: eyebrow em caixa-alta + título display + subtítulo. */
export function SectionIntro({ eyebrow, title, subtitle, align = "left", tone = "light", className }: Props) {
  const isDark = tone === "dark";
  return (
    <Reveal
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start"} ${
        className ?? ""
      }`}
    >
      <span
        className={`u-eyebrow inline-flex items-center gap-2 ${isDark ? "text-ciano" : "text-teal"}`}
      >
        <span className={`h-[3px] w-6 ${isDark ? "bg-ciano" : "bg-teal"}`} aria-hidden />
        {eyebrow}
      </span>
      <h2
        className={`max-w-2xl text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem] ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-lg leading-relaxed ${isDark ? "text-white/70" : "text-ink-soft"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
