import express from "express";
import { fileUpload } from "../controllers/fileController";
import { upload } from "../middlewares";
import routes from "../routes";

const fileRouter = express.Router();

fileRouter.post(routes.fileUpload, upload, fileUpload);

export default fileRouter;
