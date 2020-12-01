const mongoose = require("mongoose");
module.exports = () => {
  mongoose
    .connect(
      " mongodb+srv://jagangir:1234567890@cluster0-dcs5k.mongodb.net/Applinklist?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    )
    .then(() => {
      console.log("DB is Connected");
    });
};
