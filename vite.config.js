// vite.config.js
import { defineConfig } from 'vite';
import { createAngularPlugin } from 'vite-plugin-angular';

export default defineConfig({
  plugins: [createAngularPlugin()],
  resolve: {
    alias: {
      '/article/': '/src/core/article/'  // Ajusta la ruta según la estructura de tu proyecto
    }
  },
  server: {
    proxy: {
      '/article/': {
        target: 'http://localhost:4200', // Cambia la URL base según tu configuración de Angular
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/article\//, '/'),
      }
    }
  }
});
