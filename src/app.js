import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import logger from "morgan";
import routes from "./routes";
import path from "path";
import globalRouter from "./routers/globalRouter";
import { Locals } from "./middlewares";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use(Locals);

app.use("/", globalRouter);

export default app;
