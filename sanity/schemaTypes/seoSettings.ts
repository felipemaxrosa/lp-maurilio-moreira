import { defineField, defineType } from "sanity";

const routeSeo = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      defineField({ name: "title", title: "Título", type: "string" }),
      defineField({ name: "description", title: "Descrição", type: "text", rows: 3 }),
    ],
  });

export const seoSettings = defineType({
  name: "seoSettings",
  title: "SEO & Compartilhamento",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Nome do site (OpenGraph)",
      type: "string",
    }),
    defineField({
      name: "keywords",
      title: "Palavras-chave",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "ogImage",
      title: "Imagem de compartilhamento (Open Graph)",
      type: "image",
      description: "1200×630 recomendado.",
      fields: [
        defineField({ name: "alt", title: "Texto alternativo", type: "string" }),
      ],
    }),
    routeSeo("home", "Home (/)"),
    routeSeo("mandato", "Mandato (/mandato)"),
    routeSeo("podcast", "Podcast (/podcast)"),
  ],
  preview: {
    prepare: () => ({ title: "SEO & Compartilhamento" }),
  },
});
