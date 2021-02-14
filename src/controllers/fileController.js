import routes from "../routes";

export const fileUploadFunc = async (req, res) => {
  const {
    body: { file },
  } = req;
  try {
    console.log(req.file);
  } catch (error) {
    console.log(error);
  }
  // res.redirect(routes.home);
};
