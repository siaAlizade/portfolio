import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { qrcode } from "vite-plugin-qrcode";
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), tailwindcss(), qrcode(), svgr()],
  server: {
    host: true, // ← VERY important
  },
});
