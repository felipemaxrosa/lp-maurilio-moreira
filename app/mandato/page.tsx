import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Scoreboard } from "@/components/Scoreboard";

export const metadata: Metadata = {
  title: "Placar do Mandato — Maurílio Moreira",
  description:
    "Todas as conquistas e ações do mandato do vereador Maurílio Moreira por Caraguatatuba: leis, obras, mobilidade, esporte e cultura.",
};

export default function MandatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Placar do Mandato"
        title="O trabalho não para no gabinete. Ele acontece nas ruas."
        subtitle="Todas as conquistas e ações recentes do nosso mandato por Caraguatatuba — do problema à solução."
      />
      <Scoreboard showIntro={false} />
    </>
  );
}
