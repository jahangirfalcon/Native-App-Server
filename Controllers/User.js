const User = require("../Models/User");

exports.createUser = async (req, res, next) => {
  try {
    const name = req.body.name;
    const title = req.body.title;
    const description = req.body.description;
    const profile = req.file.path.replace(/\\/g, "/");
    const data = {
      name: name,
      title: title,
      description: description,
      profile: profile,
    };
    const user = await User.create(data);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
      .skip(parseInt(req.query.seed))
      .limit(parseInt(req.query.results));
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
