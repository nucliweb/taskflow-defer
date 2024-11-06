import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "performance",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["idlefy"],
      output: {
        globals: {
          idlefy: "idlefy",
        },
      },
    },
  },
  plugins: [dts()],
  test: {
    environment: "happy-dom",
    // Alternatively: environment: 'jsdom',
    setupFiles: ["./test/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
    globals: true,
  },
});
