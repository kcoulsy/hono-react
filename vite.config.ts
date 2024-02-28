import build from "@hono/vite-cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: "./src/client/index.tsx",
          output: {
            entryFileNames: "static/client.js",
          },
        },
      },
    };
  } else {
    return {
      plugins: [
        build(),
        devServer({
          entry: "src/index.tsx",
        }),
      ],
    };
  }
});
