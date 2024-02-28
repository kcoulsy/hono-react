import { Hono } from "hono";
import { html } from "hono/html";

const app = new Hono();

//
app.get("/", (c) => {
  return c.html(html` <html>
    <head>
      <link href="/static/style.css" rel="stylesheet" />
      <script
        type="module"
        src="${import.meta.env.PROD
          ? "/static/client.js"
          : "/src/client/index.tsx"}"
      ></script>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>`);
});

export default app;
