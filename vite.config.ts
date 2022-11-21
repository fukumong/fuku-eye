import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths({ loose: true }),
    react(),
    eslint({ fix: true }),
  ],
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
  },
})
