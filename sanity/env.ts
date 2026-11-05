// projectId/dataset/apiVersion são públicos (aparecem nas URLs do CDN de imagens).
// O fallback embutido garante o Studio HOSPEDADO (build Vite, que não injeta
// `NEXT_PUBLIC_*` no bundle) e qualquer ambiente sem as envs. No app Next, as
// envs de `.env.local` / Vercel têm prioridade.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "h8swgg30";
