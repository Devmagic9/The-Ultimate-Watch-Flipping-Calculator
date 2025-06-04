import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/The-Ultimate-Watch-Flipping-Calculator/', // 👈 required for GitHub Pages
  plugins: [react()],
})
