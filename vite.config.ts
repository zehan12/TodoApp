/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { qrcode } from "vite-plugin-qrcode";
import manifest from "./manifest";
import workbox from "./workbox.config";
import basicSsl from "@vitejs/plugin-basic-ssl";

const isDevHost = process.env.npm_lifecycle_event === "dev:host";

const DEV_ENABLE_HTTPS = isDevHost; // Enable HTTPS with npm run dev:host
const DEV_ENABLE_PWA = false; // Enable to test PWA functionality in dev, but it may slow down HMR.

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    DEV_ENABLE_HTTPS && basicSsl(),
    // Generate QR code for npm run dev:host
    qrcode({
      filter: (url) => url.startsWith("http://192.168.0.") || url.startsWith("https://192.168.0."),
    }),
    // https://vite-pwa-org.netlify.app/
    VitePWA({
      manifest, // manifest.ts
      devOptions: {
        enabled: DEV_ENABLE_PWA,
        type: "module",
      },
      registerType: "prompt",
      workbox, // workbox.config.ts
      includeAssets: ["**/*", "sw.js", "!splash-screens/**/*"],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".mjs", ".mts"],
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === "SOURCEMAP_ERROR" ||
          warning.message.includes("PURE") // ignore PURE comment warning
        ) {
          return;
        }
        warn(warning);
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@mui") || id.includes("@emotion")) {
              return "ui-lib";
            }
            if (id.includes("emoji-picker-react")) {
              return "emoji";
            }
            if (id.includes("ntc-ts")) {
              return "ntc";
            }
            return "vendor"; // other node_modules
          }

          if (id.includes("src/components/tasks")) {
            return "tasks";
          }
          if (id.includes("src/components/settings")) {
            return "settings";
          }
        },
      },
    },
  },
});
