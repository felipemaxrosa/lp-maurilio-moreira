import type { SchemaTypeDefinition } from "sanity";

import { mandateCard } from "./mandateCard";
import { comunidadeFoto } from "./comunidadeFoto";
import { depoimento } from "./depoimento";
import { episode } from "./episode";
import { bandeira } from "./bandeira";
import { siteSettings } from "./siteSettings";
import { contactInfo } from "./contactInfo";
import { heroSettings } from "./heroSettings";
import { seoSettings } from "./seoSettings";

// Singletons editados como documento único (ver sanity/structure.ts).
export const singletonTypes = new Set([
  "siteSettings",
  "contactInfo",
  "heroSettings",
  "seoSettings",
]);

export const schemaTypes: SchemaTypeDefinition[] = [
  // Coleções
  mandateCard,
  bandeira,
  comunidadeFoto,
  depoimento,
  episode,
  // Singletons
  siteSettings,
  contactInfo,
  heroSettings,
  seoSettings,
];
