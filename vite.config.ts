import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  base: "/llama-rider/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Replace 'my-local-module' with your actual module name
      '@mlc-ai/web-llm': path.resolve(__dirname, './thirdparty/web-llm/lib'),

    },
  },
});
