import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // '/api': {
      //   target: 'https://json-server-tau-pink.vercel.app/',
      //   // target: 'http://localhost:8000',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      //   secure: false,
      //   ws: true
      // },
      '/api': 'https://json-server-tau-pink.vercel.app/'
    },
  },
});