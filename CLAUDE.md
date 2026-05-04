# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Design Comb (蜂巢設計) portfolio/services website built with Nuxt 3, using static site generation (SSG). Content is pulled dynamically from a Notion database via the Notion API.

## Commands

```bash
npm run dev        # Dev server at http://localhost:3000
npm run generate   # Static site generation (SSG output)
npm run preview    # Preview the generated static site
npm run build      # Production build (SSR)
```

No lint or test commands are configured.

## Architecture

- **Nuxt 3** with file-based routing (`pages/`)
- **UnoCSS** (Tailwind-like utility classes) configured in `unocss.config.ts` — includes extensive custom shortcuts (btn, icon-btn, notion-bg-*, etc.) and custom breakpoints (xs:320, sm:425, md:768, lg:1024, xl:1440)
- **Pinia** store (`store/index.ts`) — single `useMainStore` handles all Notion API fetching, caching, and state (mobile header, current page data, tag filtering)
- **Notion API integration** — project data fetched from Notion DB, transformed via `utils/notionJSON2HTML.ts` and `utils/notionTransformData.ts`. Types in `utils/types/notionTypes.ts`
- **@nuxt/image** with S3 domain whitelist (`dcomb-web.s3.ap-northeast-1.amazonaws.com`)

## Key Patterns

- Animation-heavy components live in `components/animate/` — these use `<ClientOnly>` wrappers due to SSG
- Reusable layout components (header, footer, cards) are in `components/commonUsed/`
- Dynamic project pages use `pages/Projects/[id].vue` with Notion page data
- VueUse composables used extensively (useAnimate, useSwipe, useScrollLock, useWindowScroll)
- Global router plugin (`plugins/router.global.ts`) handles scroll-to-top on navigation
- Site is primarily Traditional Chinese with English labels

## Configuration

- Site URL: `https://web.dco.tw`
- Google Analytics: configured via nuxt-gtag
- `.npmrc`: `shamefully-hoist=true` and `strict-peer-dependencies=false`
