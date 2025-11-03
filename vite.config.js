import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: 'all', // facultatif
    origin: 'https://3f595f43fbcb.ngrok-free.app', // 👈 lien ngrok complet ici
  },
})
