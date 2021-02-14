import express from "express";
import helmet from "helmet";
import logger from "morgan";
import routes from "./routes";
import path from "path";
import globalRouter from "./routers/globalRouter";
import { Locals } from "./middlewares";
import fileRouter from "./routers/fileRouter";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use(Locals);

app.use("/", globalRouter);
app.use(routes.file, fileRouter);

export default app;
