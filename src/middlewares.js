import routes from "./routes";
import multer from "multer";

const fileMulter = multer({ dest: "uploads/files/" });

export const Locals = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "FTP Server";
  next();
};

export const upload = fileMulter.single("file");
