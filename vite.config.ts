import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Divide o bundle em chunks menores para carregamento mais rápido
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor'
          }
          if (id.includes('framer-motion')) {
            return 'motion'
          }
          if (id.includes('@tabler/icons-react') || id.includes('lucide-react')) {
            return 'icons'
          }
          if (id.includes('lenis')) {
            return 'lenis'
          }
        },
      },
    },
    // Reporta chunks grandes
    chunkSizeWarningLimit: 400,
  },
})