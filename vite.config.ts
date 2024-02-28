import build from "@hono/vite-cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    viteReact(),
    build(),
    devServer({
      entry: "src/index.tsx",
    }),
  ],
});
