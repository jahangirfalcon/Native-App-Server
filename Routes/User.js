const router = require("express").Router();
const multer = require("multer");
const { createUser, getUsers } = require("../Controllers/User");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "views/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/create", upload.single("profile"), createUser);
router.get("/users", getUsers);

module.exports = router;
