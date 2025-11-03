import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mon-portfolio/", // obligatoire pour GitHub Pages
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: 'all', // facultatif
    origin: 'https://3f595f43fbcb.ngrok-free.app', // pour lien ngrok
  },
})
