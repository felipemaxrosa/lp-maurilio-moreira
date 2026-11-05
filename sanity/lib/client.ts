import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// Cliente de leitura público (dataset público + CDN). As leituras são
// envolvidas por `use cache` + `cacheTag` em lib/sanity/fetch.ts.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
