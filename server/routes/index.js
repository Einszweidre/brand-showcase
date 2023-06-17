const express = require("express");
const { authentication } = require("../middlewares/authentication");
const Auth = require("../controllers/auth");
const router = express();

router.post("/login", Auth.login);
router.post("/register", authentication, Auth.register);

router.use("/admin", authentication, require("./admin"));
router.use("/public", require("./public"));

module.exports = router;
