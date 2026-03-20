import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Copies index.html to 404.html so GitHub Pages serves the SPA for all routes
function spaFallbackPlugin(): Plugin {
  return {
    name: "spa-fallback-404",
    closeBundle() {
      const fs = require("fs");
      const outDir = path.resolve(__dirname, "dist");
      const index = path.join(outDir, "index.html");
      const fallback = path.join(outDir, "404.html");
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, fallback);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    spaFallbackPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },
}));
