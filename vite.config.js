// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  base: '/smart-todo-manager/', // <-- this must match your repo name
  plugins: [react(), tailwindcss()],
})
