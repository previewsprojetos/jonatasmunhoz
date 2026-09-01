// Configuração exclusiva para gerar a versão ESTÁTICA do site (GitHub Pages).
// O build normal da Lovable continua usando vite.config.ts e não é afetado.
//
// Uso:
//   GH_PAGES_BASE="/nome-do-repositorio/" bun run build:static
// (para um repositório usuario.github.io, deixe GH_PAGES_BASE como "/")
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const base = process.env["GH_PAGES_BASE"] ?? "/";

export default defineConfig({
  vite: { base },
  nitro: { preset: "static" },
  tanstackStart: {
    // Mesma entrada de SSR do build normal: sem ela, o bundler pode tentar
    // usar o index.html como entrada de SSR e o build falha.
    server: { entry: "server" },
    prerender: { enabled: true, crawlLinks: true },
    pages: [{ path: "/" }],
  },
});

