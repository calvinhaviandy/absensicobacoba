// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Terima semua host eksternal
    port: 5173,
    strictPort: true,
    cors: true, // Izinkan semua asal (origin)
    https: false, // Tetap http karena HTTPS akan ditangani oleh ngrok
    hmr: {
      clientPort: 443, // Ini penting agar Hot Module Reload tidak error di HTTPS/ngrok
    },
  },
});
