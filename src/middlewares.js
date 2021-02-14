import routes from "./routes";
import multer from "multer";

export const Locals = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "FTP Server";
  next();
};

export const fileUpload = (req, res, next) => {
  const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      cb(null, `${file.originalname}`);
    },
  });

  multer({ storage: storage }).single("file");
  next();
};
