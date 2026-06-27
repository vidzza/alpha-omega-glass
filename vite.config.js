import { defineConfig } from "vite";

// Static, single-page marketing site. The whole site lives in index.html
// (inline CSS + JS); assets in /public are served from the web root.
export default defineConfig(() => ({
  // Served at the root of the custom domain alpha-glass-omega.fronterawebdesign.com,
  // so assets are root-relative. (If you ever drop the custom domain and serve from
  // https://<user>.github.io/<repo>/, change this back to "/alpha-omega-glass/".)
  base: "/",
  root: ".",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
}));
