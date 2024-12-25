import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Social-Media-App-Design_241216",
  css: {
    preprocessorOptions: {
      scss: {
        sassOptions: {
          api: "modern", // or "modern-compiler".
        },
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
});
