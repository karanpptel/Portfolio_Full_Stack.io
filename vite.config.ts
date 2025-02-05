import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_Full_Stack.io/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
