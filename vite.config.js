import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // Multi-page application — all 10 HTML entry points
  build: {
    rollupOptions: {
      input: {
        // Slovak pages
        main:         resolve(__dirname, 'index.html'),
        bratislava:   resolve(__dirname, 'fotovoltaika-bratislava/index.html'),
        kosice:       resolve(__dirname, 'fotovoltaika-kosice/index.html'),
        zilina:       resolve(__dirname, 'fotovoltaika-zilina/index.html'),
        nitra:        resolve(__dirname, 'fotovoltaika-nitra/index.html'),
        // English pages
        en:           resolve(__dirname, 'en/index.html'),
        enBratislava: resolve(__dirname, 'en/fotovoltaika-bratislava/index.html'),
        enKosice:     resolve(__dirname, 'en/fotovoltaika-kosice/index.html'),
        enZilina:     resolve(__dirname, 'en/fotovoltaika-zilina/index.html'),
        enNitra:      resolve(__dirname, 'en/fotovoltaika-nitra/index.html'),
      }
    }
  }
})
