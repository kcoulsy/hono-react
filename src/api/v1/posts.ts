import { Hono } from "hono";

const app = new Hono();

const getRoute = app.get("/", (c) => {
  return c.json({
    posts: [],
  });
});

export default app;

type x = typeof getRoute;
