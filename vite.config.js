import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Crucial! Adjust if your components are in different paths
  ],
  plugins: [tailwindcss(), react()],
  base: '/', 
})
