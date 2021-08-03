exports.create = (req, res) => {
  const category = new Category(req.body);
};
