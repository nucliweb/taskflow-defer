import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  root: "./demo",
  build: {
    outDir: "../dist",
    sourcemap: true,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "taskflow-defer": "/src",
    },
  },
  test: {
    environment: "happy-dom",
    setupFiles: ["./test/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
    globals: true,
  },
});
