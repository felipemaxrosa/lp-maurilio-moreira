import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    // Artefatos do Sanity Studio (sanity build/deploy) — bundle minificado.
    "dist/**",
    ".sanity/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
