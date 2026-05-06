# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # avvia dev server su localhost:3000
npm run build    # build produzione in /dist
npm run preview  # anteprima della build
```

Deploy: automatico su push a `main` via GitHub Actions → GitHub Pages (caffealex.it).

## Architettura

SPA React + TypeScript su Vite. Nessun backend, nessun test runner.

**Routing** — `BrowserRouter` in `index.tsx`. Le rotte sono `/`, `/prodotti`, `/servizi`, `/contatti`, `/privacy`. Il routing su GitHub Pages funziona grazie a `public/404.html` (tecnica rafgraph/spa-github-pages) che intercetta i 404 e `index.html` che decodifica il redirect. **Non tornare a HashRouter.**

**`App.tsx`** è il punto centrale: gestisce la navigazione tra home e pagine di dettaglio, calcola `activeView` per la Navbar, e definisce `scrollToSection` che — se si è già in home — fa scroll all'ancora, altrimenti naviga a `/` e poi scrolla.

**Tailwind** è caricato via CDN in `index.html` (non installato come plugin). La config con la palette `coffee-50…950` e i font (Playfair Display / Lato) è definita inline nello stesso `index.html`. Non esiste un `tailwind.config.js` separato.

**Immagini** — tutte in `public/assets/`. I path usano sempre `${import.meta.env.BASE_URL}assets/...` per compatibilità con Vite.

## Componenti principali

- **Navbar** — fixed, `z-50`, `pointer-events-none` sul `<nav>` con `pointer-events-auto` sul div interno. Critico: senza questo, la navbar trasparente blocca i click sugli elementi sottostanti. Il logo cambia dimensione (200px → 120px) e colore (bianco → standard) allo scroll.

- **Hero** — fullscreen con animazioni `fadeIn` CSS. Contiene i pulsanti WhatsApp ghost (`border-2 border-white/60`).

- **ProductList** — sezione homepage con le 3 miscele. Click su una card naviga a `/prodotti` passando `{ state: { anchor } }` per scorrere al prodotto corretto.

- **ProductDetail** — legge `location.state.anchor` in un `useEffect` per fare scroll al prodotto. I div dei prodotti caffè hanno id `miscela-gold`, `miscela-black`, `miscela-white`.

- **CraftDetail** — pagina personalizzazione. Contiene un carosello infinito JS (requestAnimationFrame) con swipe touch.

- **Footer** — nasconde i pulsanti WhatsApp quando `location.pathname === '/contatti'`.

## Convenzioni stilistiche

- Testo uppercase con `tracking-[0.3em] font-bold text-xs` per label e pulsanti secondari.
- Pulsanti CTA dark/filled: `bg-coffee-950 text-white hover:bg-red-700`.
- Pulsanti ghost su sfondo scuro: `border-2 border-white/60 text-white/90`.
- Pulsanti footer: colori inline (`#d6c3a3` / `#c4ae8a`) con hover via `onMouseEnter`/`onMouseLeave`.
- Sezioni con sfondo alternato: `bg-coffee-950` (scuro) e `bg-white` o `bg-coffee-50` (chiaro).

## SEO e analytics

- Google Analytics: G-SN9DLRLFVN (script in `index.html`)
- Sitemap: `public/sitemap.xml` — URL senza `#`, inviata a Google Search Console
- Metatag, Open Graph, Twitter Card e structured data (LocalBusiness) tutti in `index.html`
