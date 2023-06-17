const express = require("express");
const { authentication } = require("../middlewares/authentication");
const Auth = require("../controllers/auth");
const router = express();

router.post("/register", Auth.register);
router.post("/login", Auth.login);

router.use("/admin", authentication, require("./admin"));
router.use("/public", require("./public"));

module.exports = router;
