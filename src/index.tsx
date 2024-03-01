import { Hono } from "hono";
import handler from "./handler";

const app = new Hono();

app.route("/", handler);

app.get("/test", (c) => {
  return c.json({
    message: "Hello World",
  });
});

export default app;
