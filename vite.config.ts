import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "FukuEye",
      fileName: (format) => `fuku-eye.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        }
      }
    }
  },
  server: {
    hmr: true,
    watch: {
      usePolling: true,
    }
  }
})
