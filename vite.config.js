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
        rejillas: resolve(import.meta.dirname, 'productos/rejillas/index.html'),
        pasoDeGato: resolve(import.meta.dirname, 'productos/paso-de-gato/index.html'),
        laminaPvc: resolve(import.meta.dirname, 'productos/lamina-pvc/index.html'),
        perfiles: resolve(import.meta.dirname, 'productos/perfiles/index.html'),
      },
    },
  },
});
