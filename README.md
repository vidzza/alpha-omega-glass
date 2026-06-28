# Alpha and Omega Glass Company, Website

Bilingual (English / Español) marketing site for **Alpha and Omega Glass Company LLC**,
launching in Indianapolis, IN. Clean, modern, single-page design with EN/ES toggle,
dark mode, services, gallery lightbox, and a Request-a-Quote form.

## Tech

Static single-page site (all CSS + JS inlined in `index.html`) served and built with
[Vite](https://vitejs.dev). No framework, no runtime dependencies, just fast static output.

## Getting started

```bash
npm install      # install dev dependencies (Vite)
npm run dev      # start local dev server at http://localhost:5173
```

## Build for production

```bash
npm run build    # outputs a static site to dist/
npm run preview  # locally preview the production build
```

The contents of `dist/` are fully static and can be deployed to any static host
(Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3, etc.).

## Project structure

```
alpha-omega-glass/
├── index.html        # the entire site (markup, inline styles, inline scripts, i18n strings)
├── public/
│   └── logo.png      # client logo, served at /logo.png
├── vite.config.js
├── package.json
└── README.md
```

## Editing content

- **Text / translations:** all copy lives in the `I18N = { en: {...}, es: {...} }`
  object inside the `<script>` block in `index.html`. Edit both languages together.
- **Logo:** replace `public/logo.png`.
- **Photos:** images are currently high-quality stock placeholders pulled from Unsplash
  and are marked in the HTML with `<!-- REEMPLAZAR con foto real del cliente -->`.
  Swap the `src` values with the client's real project photos (drop them in `assets/`
  and reference them as e.g. `./assets/work-1.jpg` so Vite bundles them).

## Still to confirm with the client

Search the HTML for `REEMPLAZAR` and `CONFIRMAR` comments:

- Real project photos (hero, about, services, gallery), Sergio is gathering these
- Exact business address (map currently centers on Indianapolis generally)
- Social media handles (Facebook / Instagram links are placeholders)
- WhatsApp number (the float button currently uses the listed phone number)

## Contact

Sergio, alphaomeglass@gmail.com, +1 (463) 332-0992
(Account / billing contact: Gabriela Uribe)
