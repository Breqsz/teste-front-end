/// <reference types="vitest/config" />
// Vite + React; proxy em dev para o JSON sem CORS; Vitest com jsdom
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Repassa /teste-front-end/* para app.econverse.com.br (usado com .env.development)
    proxy: {
      '/teste-front-end': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        secure: true,
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    globals: false,
  },
})
