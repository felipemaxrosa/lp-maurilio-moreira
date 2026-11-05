/**
 * Seed inicial — reaproveita as imagens de public/ e o conteúdo de lib/content.ts.
 * Rodar (logado no Sanity CLI):  npx sanity exec sanity/seed.ts --with-user-token
 * Idempotente: usa _id determinístico + createOrReplace.
 */
import { createReadStream } from "node:fs";
import { basename, join } from "node:path";

import { createClient } from "next-sanity";

import {
  bandeiras,
  comunidade,
  contact,
  depoimentos,
  episodes,
  mandateCards,
  socials,
} from "../lib/content";
import { DEFAULT_WA_MESSAGE, WHATSAPP_NUMBER } from "../lib/whatsapp";
import { apiVersion, dataset, projectId } from "./env";

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) {
  throw new Error(
    "Defina SANITY_API_WRITE_TOKEN no .env.local para rodar o seed.",
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});
const PUBLIC_DIR = join(process.cwd(), "public");
const assetCache = new Map<string, string>();

async function uploadImage(publicPath: string): Promise<string> {
  const cached = assetCache.get(publicPath);
  if (cached) return cached;
  const abs = join(PUBLIC_DIR, publicPath.replace(/^\//, ""));
  const asset = await client.assets.upload("image", createReadStream(abs), {
    filename: basename(publicPath),
  });
  assetCache.set(publicPath, asset._id);
  console.log(`  ↑ ${publicPath} → ${asset._id}`);
  return asset._id;
}

function imageRef(assetId: string, alt?: string) {
  return {
    _type: "image",
    asset: { _type: "reference", _ref: assetId },
    ...(alt ? { alt } : {}),
  };
}

async function run() {
  console.log("Enviando imagens e criando documentos…");
  const tx = client.transaction();

  const [heroId, logoId, ogId] = [
    await uploadImage("/maurilio-hero.png"),
    await uploadImage("/brasao-caraguatatuba.png"),
    await uploadImage("/og.png"),
  ];

  tx.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    brandName: "Maurílio Moreira",
    brandEyebrow: "Vereador · AGIR",
    themeColor: "#0c4a52",
    siteUrl: "https://mauriliomoreira.com.br",
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappDisplay: contact.whatsappDisplay,
    defaultWhatsappMessage: DEFAULT_WA_MESSAGE,
    socials: {
      instagram: socials.instagram,
      facebook: socials.facebook,
      youtube: socials.youtube,
      camara: socials.camara,
    },
    footerTagline:
      "Trabalho, Fé e Raízes Caiçaras por Caraguatatuba. Um mandato de resultado, pé no bairro e com respeito a quem confiou o voto.",
    footerCopyright: "© 2026 Maurílio Moreira. Todos os direitos reservados.",
    footerLegal:
      "Mandato Legislativo 2025–2028 — Câmara Municipal de Caraguatatuba/SP.",
    logo: imageRef(logoId, "Brasão de Caraguatatuba"),
  });

  tx.createOrReplace({
    _id: "contactInfo",
    _type: "contactInfo",
    address: contact.address,
    cep: contact.cep,
    email: contact.email,
    mapsQuery: contact.mapsQuery,
  });

  tx.createOrReplace({
    _id: "heroSettings",
    _type: "heroSettings",
    portrait: imageRef(
      heroId,
      "Vereador Maurílio Moreira, sorrindo, de terno azul e camisa branca",
    ),
    seloBadge: "Aprovada por unanimidade",
    seloTitle: "Independência para mulheres vítimas de violência",
    seloMeta: "Lei nº 32/26 · 19/05/2026",
  });

  tx.createOrReplace({
    _id: "seoSettings",
    _type: "seoSettings",
    siteName: "Maurílio Moreira — Vereador de Caraguatatuba",
    keywords: [
      "Maurílio Moreira",
      "vereador Caraguatatuba",
      "AGIR Caraguatatuba",
      "mandato 2025-2028",
      "Câmara de Caraguatatuba",
    ],
    ogImage: imageRef(ogId, "Maurílio Moreira — Vereador de Caraguatatuba"),
    home: {
      title: "Maurílio Moreira — Vereador de Caraguatatuba",
      description:
        "Trabalho, Fé e Raízes Caiçaras por Caraguatatuba. Um mandato de resultado: pé no bairro, fiscalização firme e respeito a quem confiou o voto.",
    },
    mandato: {
      title: "Placar do Mandato — Maurílio Moreira",
      description:
        "Todas as conquistas e ações do mandato do vereador Maurílio Moreira por Caraguatatuba: leis, obras, mobilidade, esporte e cultura.",
    },
    podcast: {
      title: "Maurílio Convida (Podcast) — Maurílio Moreira",
      description:
        "O podcast do vereador Maurílio Moreira: conversas francas sobre fé, comunidade, saúde e os desafios reais de Caraguatatuba.",
    },
  });

  for (const [i, c] of mandateCards.entries()) {
    const imgId = c.media.src ? await uploadImage(c.media.src) : null;
    tx.createOrReplace({
      _id: `mandateCard-${c.id}`,
      _type: "mandateCard",
      order: i,
      category: c.category,
      selo: c.selo,
      seloTone: c.seloTone,
      title: c.title,
      copy: c.copy,
      ctaLabel: c.ctaLabel,
      ctaHref: c.ctaHref,
      sourceUrl: c.sourceUrl,
      media: {
        type: c.media.type,
        ...(imgId ? { image: imageRef(imgId, c.media.alt) } : {}),
      },
    });
  }

  for (const [i, f] of comunidade.entries()) {
    const imgId = await uploadImage(f.src);
    const slug = basename(f.src).replace(/\.\w+$/, "");
    tx.createOrReplace({
      _id: `comunidade-${slug}`,
      _type: "comunidadeFoto",
      order: i,
      caption: f.caption,
      href: f.href,
      image: imageRef(imgId, f.alt),
    });
  }

  depoimentos.forEach((d, i) =>
    tx.createOrReplace({
      _id: `depoimento-${i + 1}`,
      _type: "depoimento",
      order: i,
      quote: d.quote,
      author: d.author,
      detail: d.detail,
    }),
  );

  episodes.forEach((e, i) =>
    tx.createOrReplace({
      _id: `episode-${e.id}`,
      _type: "episode",
      order: i,
      youtubeId: e.youtubeId,
      title: e.title,
      guest: e.guest,
    }),
  );

  bandeiras.forEach((b, i) =>
    tx.createOrReplace({
      _id: `bandeira-${b.id}`,
      _type: "bandeira",
      order: i,
      icon: b.icon,
      title: b.title,
      copy: b.copy,
      tags: b.tags,
      featured: b.featured,
    }),
  );

  await tx.commit();
  console.log("✓ Seed concluído.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
