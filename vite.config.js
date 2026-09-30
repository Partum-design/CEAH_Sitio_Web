import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        inicio: resolve(import.meta.dirname, 'index.html'),
        nosotros: resolve(import.meta.dirname, 'quienes-somos/index.html'),
        productos: resolve(import.meta.dirname, 'productos/index.html'),
        contacto: resolve(import.meta.dirname, 'contacto/index.html'),
      },
    },
  },
});
