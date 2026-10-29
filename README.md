<!-- markdownlint-disable MD033 -->
<div align="center">

# Portfólio — Thiago Dutra

**Backend & Mobile Developer: Flutter, React e Node.js.**

[![Site](https://img.shields.io/badge/site-online-FFFFFF?style=for-the-badge&labelColor=0B0B0B)](https://dutrathiagodev.netlify.app)

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-deploy-00C7B7?logo=netlify&logoColor=white)

![Tela principal do portfólio](docs/images/tela-principal.jpg)

</div>

## Sobre

Portfólio pessoal em tema escuro com as páginas Sobre, Experiência, Projetos, Skills e Contato. Começou como um site estático em HTML, CSS e JavaScript e foi migrado para Next.js, mantendo o mesmo conteúdo e o mesmo design.

## Links

| | |
|---|---|
| Site publicado | https://dutrathiagodev.netlify.app (atualizado a cada mudança na `main`) |
| Repositório | https://github.com/dutrathiagodev/Portifolio-dutra |
| LinkedIn | [dutrathiagodev](https://www.linkedin.com/in/dutrathiagodev/) |
| GitHub | [dutrathiagodev](https://github.com/dutrathiagodev) |

## O que tem no site

- **Home** com apresentação, botões de navegação e links para as redes
- **Sobre**, com o que eu faço e a formação
- **Experiência**, em linha do tempo
- **Projetos**, em lista com tecnologias e links
- **Skills**, agrupadas por área
- **Contato**, com um formulário no estilo "mad-lib" que monta um e-mail pronto (`mailto:`), sem backend
- Menu com destaque automático da página atual
- Layout responsivo (desktop, tablet e celular)

## Projetos em destaque

| Projeto | Descrição | Tecnologias |
|---|---|---|
| [Face a Face](https://github.com/dutrathiagodev/landing-page-face-a-face) | Guia cívico do 2º turno de 2026, com comparativo equilibrado e fontes | Next.js, Tailwind, Figma |
| [To-Do List Detetive](https://github.com/dutrathiagodev/to-do-list-detetive) | Lista de tarefas com tema de investigação | Next.js, TypeScript, localStorage |
| [OneTick](https://github.com/dutrathiagodev/onetick) | Um foco essencial por dia, com histórico e sequência | Flutter, Firebase, Cubit |
| [FAP Books](https://github.com/dutrathiagodev/fap-books) | Gestão e empréstimo de livros da biblioteca da FAP | Next.js, Supabase, PostgreSQL |

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router) e [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- ESLint
- [Netlify](https://www.netlify.com) para o deploy

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
  app/                  layout, páginas (uma pasta por rota) e estilos globais
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
