const express = require("express");
const Public = require("../controllers/public");
const router = express();

router.get("/menus", Public.fetchMenu);

module.exports = router;
