import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@component': '/src/components',
      '@sidebar': '/src/components/Sidebar',
      // Add more aliases as needed
    },
  },
})
