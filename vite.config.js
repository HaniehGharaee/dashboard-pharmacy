import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import ViteJsconfigPaths from "vite-jsconfig-paths";
import path from "path";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
  build: {
    outDir: "build",
    rollupOptions: {
      plugins: [
        terser({
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
        }),
      ],
    },
  },
  plugins: [react(), , ViteJsconfigPaths(), svgrPlugin()],
  server: {
    port: 3001,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: "@root-entry-name: default;",
      },
    },
  },
  optimizeDeps: {
    exclude: ["swiper"],
  },
});
