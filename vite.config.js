import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
