import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
  },
  // to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  resolve: {
    alias: {
      "@pages": "./src/pages",
      "@images": "./src/assets/images",
      "@icons": "./src/assets/images/icons",
      "@audio": "./src/assets/audio",
      "@services": "./src/common/services/index.ts",
      "@components": "./src/components/index.ts",
      "@context": "./src/context/index.ts",
      "@hooks": "./src/hooks/index.ts",
      "@stylesPages": "./src/styles/pages",
    }
  },
  //     "@pages": path.resolve(__dirname, "./src/pages"),
  //     "@images": path.resolve(__dirname, "./src/assets/images"),
  //     "@icons": path.resolve(__dirname, "./src/assets/images/icons"),
  //     "@videos": path.resolve(__dirname, "./src/assets/videos"),
  //     "@audio": path.resolve(__dirname, "./src/assets/audio"),
  //     "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
  //     "@utils": path.resolve(__dirname, "./src/common/utils.ts"),
  //     "@config": path.resolve(__dirname, "./src/common/config.ts"),
  //     "@schemas": path.resolve(__dirname, "./src/common/schemas/index.ts"),
  //     "@services": path.resolve(__dirname, "./src/common/services/index.ts"),
  //     "@components": path.resolve(__dirname, "./src/components/index.ts"),
  //     "@containers": path.resolve(__dirname, "./src/containers/index.ts"),
  //     "@context": path.resolve(__dirname, "./src/context/index.ts"),
  //     "@hooks": path.resolve(__dirname, "./src/hooks/index.ts"),
  //     "@hoc": path.resolve(__dirname, "./src/hoc/index.ts"),
  //     "@stylesComponents": path.resolve(__dirname, "./src/styles/compnents"),
  //     "@stylesPages": path.resolve(__dirname, "./src/styles/pages")
  //   }
  // },
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    // Tauri supports es2021
    target: ["es2021", "chrome100", "safari13"],
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
    
  },
});
