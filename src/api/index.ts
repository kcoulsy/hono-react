import { Hono } from "hono";
import v1Router from "./v1";

const app = new Hono();

app.route("/v1", v1Router);

export default app;
