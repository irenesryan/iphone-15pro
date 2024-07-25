import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "vision-hub",
    project: "javascript-react",
    release: {
      name: 'v1.0.0'
    },
    // telemetry: false
  })],

  build: {
    sourcemap: true
  }
})