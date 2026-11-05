import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes, singletonTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

// Ações permitidas nos singletons (sem create/delete/duplicate).
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  name: "default",
  title: "Maurílio Moreira — Conteúdo",
  projectId,
  dataset,
  basePath: "/studio",
  schema: {
    types: schemaTypes,
    // Remove os singletons do menu "novo documento".
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // Nos singletons, só publicar/descartar/restaurar (sem criar/apagar).
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(
            ({ action }) => action && singletonActions.has(action),
          )
        : input,
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
