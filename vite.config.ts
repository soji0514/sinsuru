import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Figma asset virtual module plugin
function figmaAssetPlugin() {
  return {
    name: 'figma-asset-plugin',
    enforce: 'pre' as const,
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        return '\0' + id // Use null byte prefix for virtual modules
      }
    },
    load(id: string) {
      if (id.startsWith('\0figma:asset/')) {
        // Return empty string for build - images will come from Supabase Storage
        return 'export default ""'
      }
    },
  }
}

export default defineConfig({
  plugins: [figmaAssetPlugin(), react()],
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
