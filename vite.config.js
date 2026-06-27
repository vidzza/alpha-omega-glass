import { defineConfig } from "vite";

// Static, single-page marketing site. The whole site lives in index.html
// (inline CSS + JS); assets in /public are served from the web root.
export default defineConfig(({ command }) => ({
  // GitHub Pages serves a project repo from https://<user>.github.io/<repo>/,
  // so production assets must be prefixed with /<repo>/. Local dev stays at "/".
  // If you later add a custom domain or rename the repo, update this value.
  base: command === "build" ? "/alpha-omega-glass/" : "/",
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
