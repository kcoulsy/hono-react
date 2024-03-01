import build from "@hono/vite-cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

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
        TanStackRouterVite({
          routesDirectory: "src/client/routes",
          generatedRouteTree: "src/client/routes.gen.ts",
        }),
        build(),
        devServer({
          entry: "src/index.tsx",
        }),
      ],
    };
  }
});
