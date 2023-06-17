const express = require("express");
const Public = require("../controllers/public");
const router = express();

router.get("/menu", Public.fetchMenu);
router.get("/menu/:slug", Public.fetchMenuDetail);

module.exports = router;
