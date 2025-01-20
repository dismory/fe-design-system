import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      input: {
        badgeDemo: resolve(__dirname, "demos/badge.html"),
      },
    },

    outDir: "dist",

    emptyOutDir: true,
  },
});
