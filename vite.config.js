import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: https://ashumarie.github.io/food-test/ 에 맞춘 base 경로
export default defineConfig({
  base: "/food-test/",
  plugins: [react()],
});
