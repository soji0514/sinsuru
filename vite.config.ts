import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Figma asset virtual module plugin
function figmaAssetPlugin() {
  return {
    name: 'figma-asset-plugin',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        return id
      }
    },
    load(id: string) {
      if (id.startsWith('figma:asset/')) {
        // Return empty string for build - images will come from Supabase Storage
        return 'export default ""'
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), figmaAssetPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
