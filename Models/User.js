const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  profile: String,
});

module.exports = mongoose.model("user", User);
