import build from "@hono/vite-cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import postCssPresetMantine from "postcss-preset-mantine";
import postCssSimpleVars from "postcss-simple-vars";

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
      css: {
        postcss: {
          plugins: [
            postCssPresetMantine(),
            postCssSimpleVars({
              variables: {
                "mantine-breakpoint-xs": "36em",
                "mantine-breakpoint-sm": "48em",
                "mantine-breakpoint-md": "62em",
                "mantine-breakpoint-lg": "75em",
                "mantine-breakpoint-xl": "88em",
              },
            }),
          ],
        },
      },
      plugins: [
        TanStackRouterVite({
          routesDirectory: "src/client/routes",
          generatedRouteTree: "src/client/routes.gen.ts",
        }),
        build(),
        devServer({
          entry: "src/index.tsx",
          exclude: [
            /.*\.css$/,
            /.*\.ts$/,
            /.*\.tsx$/,
            /^\/@.+$/,
            /\?t\=\d+$/,
            /^\/favicon\.ico$/,
            /^\/static\/.+/,
            /^\/node_modules\/.*/,
            // This is a hack to exclude the client code from the server build
            // TanstackRouter refreshes it's routes gen file with a timestamp query param
            // to bust the cache. The dev server default exclude doesn't work with query params
            // and it doesn't extend default so I've added the defaults above too.
            /\/src\/client\/.*\.ts.*/,
          ],
        }),
      ],
    };
  }
});
