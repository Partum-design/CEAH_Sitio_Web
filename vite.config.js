import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        inicio: resolve(import.meta.dirname, 'index.html'),
        nosotros: resolve(import.meta.dirname, 'quienes-somos/index.html'),
        soluciones: resolve(import.meta.dirname, 'soluciones/index.html'),
        ventajas: resolve(import.meta.dirname, 'ventajas/index.html'),
        contacto: resolve(import.meta.dirname, 'contacto/index.html'),
      },
    },
  },
});
