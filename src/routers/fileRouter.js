import express from "express";
import { fileUploadFunc } from "../controllers/fileController";
import { fileUpload } from "../middlewares";
import routes from "../routes";

const fileRouter = express.Router();

fileRouter.post(routes.fileUpload, fileUpload, fileUploadFunc);

export default fileRouter;
