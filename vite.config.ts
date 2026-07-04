 import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import path from 'path'

  export default defineConfig({
    plugins: [react()],
    base: '/me/',
    server: {
      host: true,
      allowedHosts: ['ch3did.com.br', 'www.ch3did.com.br', 'me.ch3did.com.br'],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  })
