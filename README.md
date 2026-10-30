<!-- markdownlint-disable MD033 -->
<div align="center">

# Portfólio — Thiago Dutra

**Backend & Mobile Developer: Flutter, React e Node.js.**

[![Site](https://img.shields.io/badge/site-online-FFFFFF?style=for-the-badge&labelColor=0B0B0B)](https://portifolio-dutra.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-deploy-000000?logo=vercel&logoColor=white)

![Tela principal do portfólio](docs/images/tela-principal.jpg)

</div>

## Sobre

Portfólio pessoal em tema escuro e minimalista, com as páginas Sobre, Experiência, Projetos, Skills e Contato. Começou como um site estático em HTML, CSS e JavaScript e foi migrado para Next.js e redesenhado: hero em estilo cartaz (papel quadriculado, bordas rasgadas, faixa preta com a frase passando e retrato recortado com contorno), pipeline de entrega animado e lista de projetos com status e camadas.

## Links

| | |
|---|---|
| Site publicado | https://portifolio-dutra.vercel.app (atualizado a cada mudança na `main`) |
| Repositório | https://github.com/dutrathiagodev/Portifolio-dutra |
| LinkedIn | [dutrathiagodev](https://www.linkedin.com/in/dutrathiagodev/) |
| GitHub | [dutrathiagodev](https://github.com/dutrathiagodev) |

## O que tem no site

- **Home** com hero em estilo cartaz, seção Olá (bio, skills, formação e experiência), pipeline de entrega animado (Build, Teste, Deploy e Produção) e projetos em destaque
- **Logo** em wordmark `TD.` na fonte do site (Satoshi Black) e favicon com o monograma TD
- **SEO**: título e descrição por página, Open Graph e Twitter Card, imagem de compartilhamento gerada, `sitemap.xml`, `robots.txt` e dados estruturados (JSON-LD)
- **Sobre**, com o que eu faço e a formação
- **Experiência**, em linha do tempo
- **Projetos**, em lista com status (em produção ou em desenvolvimento), camadas (Mobile, Web, API e Banco) e a equipe RiseMov
- **Skills**, agrupadas por área, incluindo IA no desenvolvimento (Claude Code e Codex)
- **Contato**, com um formulário no estilo "mad-lib" que monta um e-mail pronto (`mailto:`), sem backend
- Animações de entrada e ao rolar, com parallax no hero (mouse e rolagem) e suporte a `prefers-reduced-motion`
- Menu com destaque automático da página atual
- Todas as páginas seguem o mesmo estilo cartaz: título gigante no papel quadriculado, borda rasgada e faixa preta com a frase passando
- Layout responsivo (desktop, tablet e celular)

## Projetos em destaque

| Projeto | Descrição | Tecnologias |
|---|---|---|
| [Face a Face](https://github.com/dutrathiagodev/landing-page-face-a-face) | Guia cívico do 2º turno de 2026, com comparativo equilibrado e fontes | Next.js, Tailwind, Figma |
| [To-Do List Detetive](https://github.com/dutrathiagodev/to-do-list-detetive) | Lista de tarefas com tema de investigação | Next.js, TypeScript, localStorage |
| [OneTick](https://github.com/dutrathiagodev/onetick) | Um foco essencial por dia, com histórico e sequência | Flutter, Firebase, Cubit |
| [FAP Books](https://github.com/dutrathiagodev/fap-books) | Gestão e empréstimo de livros da biblioteca da FAP (equipe de 6, Tech Lead, Dev e QA) | Next.js, Supabase, PostgreSQL, Git Flow |

Outros projetos: MRNT, FutiFC, Weloz, Elos e o Big-Z (em equipe, na [RiseMov](https://github.com/RiseMov)).

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router) e [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- Fontes [Satoshi](https://www.fontshare.com/fonts/satoshi) (Fontshare), [Anton](https://fonts.google.com/specimen/Anton) e [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- ESLint
- [Vercel](https://vercel.com) para o deploy

## Como rodar

Pré-requisito: Node.js 20 ou superior.

```bash
npm install
npm run dev     # desenvolvimento em http://localhost:3000
npm run lint    # lint
npm run build   # build de produção
npm run start   # serve o build
```

## Estrutura

```text
src/
  app/                  layout, páginas (uma pasta por rota), estilos globais, ícone, sitemap, robots e imagem de compartilhamento
  components/
    layout/             header
    sections/<secao>/   uma pasta por seção do site
    ui/                 componentes visuais reutilizáveis
  content/              textos e dados de cada página
  lib/                  utilitários
  types/                tipos compartilhados
public/
  images/               fotos e logos dos projetos
  icons/                ícones das redes e das tecnologias
docs/
  architecture/         regras de arquitetura do projeto
  images/               imagens usadas na documentação
```

Cada página em `src/app` só compõe uma seção. Os textos ficam em `src/content` e os componentes só cuidam da apresentação. As regras completas estão em [`docs/architecture`](docs/architecture).

## Publicação

O site é publicado na Vercel a cada push na `main`. O endereço usado no SEO fica em `src/content/site.ts` (ou na variável `NEXT_PUBLIC_SITE_URL`); ao trocar para um domínio próprio, é só mudar ali. A configuração fica em [`netlify.toml`](netlify.toml): roda `npm run build` e usa o plugin do Next.js.

## Contato

- 📧 [thiagodutrasap@gmail.com](mailto:thiagodutrasap@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/dutrathiagodev/)
- 🐙 [GitHub](https://github.com/dutrathiagodev)
- 📸 [Instagram](https://www.instagram.com/dutrathiago.dev/)
