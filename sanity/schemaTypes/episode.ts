import { defineField, defineType } from "sanity";

export const episode = defineType({
  name: "episode",
  title: "Episódio (Podcast)",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Ordem",
      type: "number",
      description: "Menor aparece primeiro.",
    }),
    defineField({
      name: "youtubeId",
      title: "ID do YouTube",
      type: "string",
      description: 'O trecho após "v=" ou "youtu.be/". A capa é derivada dele.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "guest",
      title: "Convidado / descrição",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "guest" },
  },
});
