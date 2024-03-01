import { Hono } from "hono";
import handler from "./handler";
import apiRouter from "./api";

const app = new Hono();

app.route("/", handler);
app.route("/api", apiRouter);

export default app;
