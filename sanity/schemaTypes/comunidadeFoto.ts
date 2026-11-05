import { defineField, defineType } from "sanity";

export const comunidadeFoto = defineType({
  name: "comunidadeFoto",
  title: "Comunidade (galeria)",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Ordem",
      type: "number",
      description: "Menor aparece primeiro.",
    }),
    defineField({
      name: "image",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
      fields: [
        defineField({ name: "alt", title: "Texto alternativo", type: "string" }),
      ],
    }),
    defineField({
      name: "caption",
      title: "Legenda",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "href",
      title: "Link (Instagram)",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "caption", media: "image" },
  },
});
