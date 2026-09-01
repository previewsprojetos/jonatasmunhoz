# Plano: Publicar as atualizações no GitHub Pages

## Situação atual (verificada)

- Todas as alterações (workflow do GitHub Pages, build estático, imagens locais) **já estão commitadas na branch `main`** do projeto.
  - Commit mais recente: `8fd9bae — Corrigiu deploy no GitHub Pages`
- Não há alterações não commitadas (working tree limpo).
- Você já conectou um repositório do GitHub a este projeto antes.

A Lovable sincroniza automaticamente a branch `main` com o seu repositório do GitHub. Ou seja, **as atualizações já devem ter chegado ao GitHub** (ou chegarão em segundos).

## O que você precisa fazer

### Passo 1 — Confirmar que o repositório GitHub recebeu as alterações

1. Abra seu repositório no GitHub (o que você conectou à Lovable).
2. Vá na aba **Code** e verifique se o commit mais recente é o
   `Corrigiu deploy no GitHub Pages`.
3. Se o commit não aparecer, a sincronização pode estar pausada —
   no editor da Lovable, abra o menu **GitHub** (topo) e use a opção de
   sincronizar/reconectar.

### Passo 2 — Configurar o GitHub Pages (uma única vez)

1. No repositório: **Settings → Pages**.
2. Em **Source**, escolha **GitHub Actions** (não "Branch").
   - O workflow `.github/workflows/deploy-github-pages.yml` já faz o deploy.
3. Salve.

### Passo 3 — Disparar o deploy

- Cada **push na `main`** aciona o workflow automaticamente.
- Para rodar manualmente: aba **Actions → "Deploy no GitHub Pages" → Run workflow**.
- Acompanhe o andamento na aba **Actions**; dura ~2 minutos.

### Passo 4 — Acessar o site

- Ao final, o site estará em:
  - `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`
  - ou `https://SEU-USUARIO.github.io/` se o repositório se chamar `SEU-USUARIO.github.io`
- O caminho base (`/nome-do-repositorio/`) é detectado automaticamente
  pelo workflow, não precisa configurar nada.

## Próximas atualizações (a partir de agora)

Como a Lovable sincroniza `main` → GitHub a cada mudança, sempre que você
fizer uma alteração no editor da Lovable:

1. A alteração é commitada em `main` automaticamente.
2. A Lovable envia para o GitHub.
3. O workflow roda e republica o site no GitHub Pages.

**Atenção:** isso só funciona se as alterações estiverem na branch `main`.
Se você estiver trabalhando em uma branch de edição (`edit/...`), é preciso
mesclá-la para `main` pelo editor da Lovable antes que o deploy aconteça.
Hoje, suas alterações já estão em `main`, então não há bloqueio.

## Observações

- O build estático (`bun run build:static` / `vite.config.ghpages.ts`) só
  roda no GitHub Actions — o preview da Lovable continua usando o build
  normal (SSR), sem mudanças.
- Se o workflow falhar, abra a execução na aba **Actions** e leia o log do
  passo "Gerar site estático"; me avise o erro e eu corrijo.
