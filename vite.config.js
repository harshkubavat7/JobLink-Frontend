import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Add these sections to exclude problematic deps and allow parent fs access
  optimizeDeps: {
    exclude: [
      "react-icons",
      "recharts",
      // add any other packages reported in the error list (e.g. specific subpackages)
    ],
  },
  server: {
    fs: {
      // allow Vite to read files outside the project root (for local file:.. deps)
      allow: [".."],
    },
    // Proxy API requests to the backend during development
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
    // Improve HMR behavior on some Windows / firewall setups
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
})