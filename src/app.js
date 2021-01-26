import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import logger from "morgan";

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send(hello);
});

export default app;
