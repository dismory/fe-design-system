import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import pages from 'vite-plugin-pages';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pages({
      dirs: 'src/pages',
      extensions: ['jsx', 'js', 'tsx', 'ts'],
    }),
    tailwindcss(),
  ],

  build: {
    outDir: 'dist',

    emptyOutDir: true,
    sourcemap: true,
  },
});
