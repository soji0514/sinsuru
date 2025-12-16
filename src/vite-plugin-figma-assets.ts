import { Plugin } from 'vite'

/**
 * Vite plugin to handle Figma Make's special import schemes
 * - figma:asset/* imports (virtual module for Figma assets)
 * - Versioned npm imports (e.g., package@version)
 */
export function figmaAssetsPlugin(): Plugin {
  return {
    name: 'vite-plugin-figma-assets',
    
    resolveId(source: string) {
      // Handle figma:asset imports
      if (source.startsWith('figma:asset/')) {
        return source
      }
      
      // Handle versioned imports (e.g., lucide-react@0.487.0)
      const versionMatch = source.match(/^(.+)@[\d.]+$/)
      if (versionMatch) {
        // Return the package name without version
        return versionMatch[1]
      }
      
      return null
    },
    
    load(id: string) {
      // Handle figma:asset imports
      if (id.startsWith('figma:asset/')) {
        const assetHash = id.replace('figma:asset/', '')
        // Return a placeholder image or empty module
        // In production, these would be replaced with actual CDN URLs
        return `export default "https://placehold.co/400x400?text=Asset+${assetHash.substring(0, 8)}"`
      }
      
      return null
    },
  }
}
