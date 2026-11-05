import { defineField, defineType } from "sanity";

export const heroSettings = defineType({
  name: "heroSettings",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "portrait",
      title: "Retrato do vereador",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Texto alternativo", type: "string" }),
      ],
    }),
    defineField({
      name: "seloBadge",
      title: "Selo — etiqueta",
      type: "string",
      description: 'Ex.: "Aprovada por unanimidade".',
    }),
    defineField({
      name: "seloTitle",
      title: "Selo — título",
      type: "string",
    }),
    defineField({
      name: "seloMeta",
      title: "Selo — linha de apoio",
      type: "string",
      description: 'Ex.: "Lei nº 32/26 · 19/05/2026".',
    }),
  ],
  preview: {
    prepare: () => ({ title: "Hero" }),
  },
});
