import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// Cliente de leitura (dataset público). `useCdn: false` garante leitura sempre
// fresca na build e nas revalidações do webhook — evita a corrida em que o CDN
// (~60s) devolve conteúdo stale logo após um publish. Não afeta o usuário: as
// páginas são servidas do cache estático do Next (`use cache` + `cacheTag` em
// lib/sanity/fetch.ts), que só refetch no publish via revalidateTag.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
