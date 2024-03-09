/** @jsxImportSource hono/jsx */
/** @jsxFrag  */

import { Hono } from "hono";

const app = new Hono();

// match everything but /src/client/*
app.get("*", async (c) => {
  // @ts-ignore
  return c.html(<Template />);
});

// create middleware so /src/client/routes.gen.ts?t=1709975919245 returns the same as /src/client/routes.gen.ts

export const Template = () => {
  return (
    <>
      <html>
        <head>
          <link href="/static/style.css" rel="stylesheet" />
          <title>My App</title>
          <script
            type="module"
            src={
              import.meta.env.PROD
                ? "/static/client.js"
                : "/src/client/index.tsx"
            }
          ></script>
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
    </>
  );
};

export default app;
