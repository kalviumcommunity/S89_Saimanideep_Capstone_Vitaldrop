import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  server: {
    port: 3001,
    host: true,
    strictPort: false
  },
  logLevel: 'info',
  clearScreen: false
})
