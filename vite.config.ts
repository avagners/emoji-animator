import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: false,
    allowedHosts: [
      'localhost', 
      '.ngrok-free.dev' // Разрешаем все поддомены ngrok
    ]
  }
})