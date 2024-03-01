import { Hono } from "hono";
import postsRouter from "./posts";

const app = new Hono();

app.route("/posts", postsRouter);

export default app;
