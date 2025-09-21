import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // ← Need to import path

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this resolve section to fix path aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ← This makes '@' point to /src
    },
  },
})