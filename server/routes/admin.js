const express = require("express");
const { authentication } = require("../middlewares/authentication");
const Admin = require("../controllers/admin");
const router = express();

router.get("/menu", Admin.fetchMenu);
router.post("/menu", Admin.createMenu);

router.get("/menu/:slug", Admin.fetchMenuDetail);
router.get("/menu-image/:slug", Admin.fetchMenuImage);
router.post("/menu-image/:slug", Admin.fetchMenuImage);

router.get("/category", Admin.fetchCategory);
router.get("/category", Admin.createCategory);

module.exports = router;
