/** @jsxImportSource hono/jsx */
/** @jsxFrag  */

import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  // @ts-ignore
  return c.html(<Template />);
});

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
