import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import pages from "vite-plugin-pages";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pages({
      dirs: "src/pages",
      extensions: ["jsx", "js"],
    }),
  ],

  build: {
    outDir: "dist",

    emptyOutDir: true,
  },
});
