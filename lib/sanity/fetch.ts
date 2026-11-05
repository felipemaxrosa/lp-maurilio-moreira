import { cacheLife, cacheTag } from "next/cache";

import { client } from "@/sanity/lib/client";

// Leitura cacheComponents-safe: o resultado entra na shell estática
// (cacheLife 'max') e só é invalidado pelo webhook via revalidateTag.
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  tags: string[] = [],
): Promise<T> {
  "use cache";
  cacheLife("max");
  cacheTag("sanity");
  for (const tag of tags) {
    cacheTag(tag);
  }
  return client.fetch<T>(query, params);
}
