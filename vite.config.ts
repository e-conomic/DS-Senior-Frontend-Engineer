import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const MOCK_PROJECTS = [
  { id: '1', name: 'Alpha Project', createdOn: '2024-01-15T10:00:00Z', updatedOn: '2025-02-20T14:30:00Z' },
  { id: '2', name: 'Beta Initiative', createdOn: '2024-03-01T09:00:00Z', updatedOn: '2025-02-18T11:00:00Z' },
  { id: '3', name: 'Gamma Dashboard', createdOn: '2024-06-10T08:00:00Z', updatedOn: '2025-02-25T09:15:00Z' },
]

function mockApiPlugin(): Plugin {
  return {
    name: 'mock-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/projects/get-all' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(MOCK_PROJECTS))
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), mockApiPlugin()],
})
