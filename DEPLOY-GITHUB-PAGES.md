# Publicar no GitHub Pages

O site foi ajustado para funcionar como **site estático** (HTML + CSS + JS + imagens),
sem depender de servidor. Nada foi removido do funcionamento atual na Lovable.

## O que foi corrigido

- As imagens (retrato, foto clínica, antes/depois e a foto de dor) estavam sendo servidas
  por um caminho interno da Lovable (`/__l5e/assets-v1/...`), que **não existe** no GitHub
  Pages — era a principal causa do site em branco. Agora os arquivos ficam dentro do
  projeto (`src/assets/photos/`) e são empacotados no build.
- O favicon usava caminho absoluto `/favicon.ico`, que quebra quando o site fica em
  `usuario.github.io/nome-do-repositorio/`. Agora respeita o caminho base.
- Foi criado um build estático dedicado (`vite.config.ghpages.ts`) que gera o `index.html`
  já renderizado, mais `.nojekyll` e `404.html`.
- Foi criado o workflow `.github/workflows/deploy-github-pages.yml`, que publica
  automaticamente a cada push na branch `main`.

## Passo a passo

1. Conecte o projeto ao GitHub (botão **GitHub** no topo do editor da Lovable) ou envie
   o código para o seu repositório.
2. No GitHub, abra **Settings → Pages** e em **Source** escolha **GitHub Actions**.
3. Faça um push na branch `main` (ou rode o workflow manualmente em **Actions →
   Deploy no GitHub Pages → Run workflow**).
4. Em ~2 minutos o site estará em:
   - `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`
   - ou `https://SEU-USUARIO.github.io/` se o repositório se chamar `SEU-USUARIO.github.io`.

O caminho base é detectado automaticamente pelo workflow, então não é preciso configurar nada.

## Testar localmente

```sh
GH_PAGES_BASE="/nome-do-repositorio/" npm run build:static
npx serve dist/client
```

Os arquivos publicáveis ficam em `dist/client`.

## Observações

- Formulários/backend: o site não usa nenhum, tudo é feito via WhatsApp e Google Maps,
  por isso a versão estática é 100% equivalente.
- O mapa do Google e as fontes carregam de URLs externas e continuam funcionando.
