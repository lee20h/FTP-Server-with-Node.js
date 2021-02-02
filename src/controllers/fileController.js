export const fileUpload = async (req, res) => {
  const {
    body: { filename },
  } = req;
  console.log(filename);
  console.log(req.file);
  res.redirect("/");
};
