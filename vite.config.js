import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Youtube",
  define:{
    'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY)
  }
  // server:{
  //   host: '0.0.0.0',
  //   allowedHosts: true
  // }
})
