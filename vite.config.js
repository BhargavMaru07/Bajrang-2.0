import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv"; // Import dotenv

// Load environment variables from .env file
config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5001",
    },
  },
  define: {
    "process.env": process.env,
  },
});
