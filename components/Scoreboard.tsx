"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { MandateCard } from "@/components/MandateCard";
import { Lightbox } from "@/components/ui/Lightbox";
import { mandateCards, categoryLabels, type MandateCategory } from "@/lib/content";

type Filter = "todas" | MandateCategory;

const filters: { key: Filter; label: string }[] = [
  { key: "todas", label: "Todas" },
  { key: "leis", label: categoryLabels.leis },
  { key: "asfalto", label: categoryLabels.asfalto },
  { key: "mobilidade", label: categoryLabels.mobilidade },
];

export function Scoreboard() {
  const [active, setActive] = useState<Filter>("todas");
  const [doc, setDoc] = useState<{ src: string; alt: string } | null>(null);

  const visible = useMemo(
    () => (active === "todas" ? mandateCards : mandateCards.filter((c) => c.category === active)),
    [active],
  );

  return (
    <section id="mandato" className="scroll-mt-20 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionIntro
          eyebrow="Placar do Mandato"
          title="O trabalho não para no gabinete. Ele acontece nas ruas."
          subtitle="Confira as conquistas e ações recentes do nosso mandato por Caraguatatuba — do problema à solução."
        />

        {/* Filtros */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {filters.map((f) => {
            const on = active === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActive(f.key)}
                aria-pressed={on}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  on
                    ? "bg-petroleo text-white"
                    : "border border-line bg-white text-ink-soft hover:border-teal hover:text-teal"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Grid de cards (fade de 300ms ao trocar filtro) */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((card) => (
            <MandateCard key={card.id} card={card} onOpenDoc={(src, alt) => setDoc({ src, alt })} />
          ))}
        </motion.div>
      </div>

      <Lightbox open={Boolean(doc)} onClose={() => setDoc(null)} src={doc?.src ?? ""} alt={doc?.alt ?? ""} />
    </section>
  );
}
