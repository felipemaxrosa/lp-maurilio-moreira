"use client";

import { NextStudio } from "next-sanity/studio";

import config from "@/sanity.config";

// Studio é um SPA client-side — 'use client' mantém o pacote `sanity`
// fora do grafo RSC (evita o erro do swr/react-server no build).
export default function StudioPage() {
  return <NextStudio config={config} />;
}
