// Ajustes finais para o GitHub Pages: desliga o Jekyll e cria o fallback 404.
import { copyFileSync, writeFileSync, existsSync } from "node:fs";

const out = "dist/client";
if (!existsSync(`${out}/index.html`)) {
  console.error(`[static] ${out}/index.html não encontrado — o build falhou?`);
  process.exit(1);
}
writeFileSync(`${out}/.nojekyll`, "");
copyFileSync(`${out}/index.html`, `${out}/404.html`);
console.log("[static] .nojekyll e 404.html criados em dist/client");
