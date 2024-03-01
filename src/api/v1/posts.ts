import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    posts: [],
  });
});

export default app;
