const express = require("express");
const app = express();
const CORS = require("cors");
const User = require("./Routes/User");
const mongoose = require("./Middlewares/Mongoose");
mongoose();
app.use(CORS());
app.use(express.json());
app.use("/views", express.static("views"));

app.use("/api/user", User);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running");
});
