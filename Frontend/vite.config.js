import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  build: {
    commonjsOptions: {
        include: ['node_modules/buffer/index.js']
    }
},
  plugins: [react()],
  server: {
    port: 3000,
    proxy:{
      '/api':{
        target:'http://localhost:8000',
     }
    }
  },
})
