import routes from "./routes";

export const Locals = (req, res, next) => {
  res.locals.routes = routes;
  next();
};
