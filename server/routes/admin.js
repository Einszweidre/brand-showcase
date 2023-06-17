const express = require("express");
const Admin = require("../controllers/admin");
const authorization = require("../middlewares/authorization");
const router = express();

router.get("/menu", Admin.fetchMenu);
router.get("/menu/:id", Admin.fetchMenuDetail);
router.post("/menu", Admin.createMenu);
router.put("/menu/:id", Admin.updateMenu);
router.delete("/menu/:id", authorization, Admin.deleteMenu);

router.get("/category", Admin.fetchCategory);
router.post("/category", Admin.createCategory);
router.put("/category/:id", Admin.updateCategory);
router.delete("/category/:id", Admin.deleteCategory);

router.get("/image/:id", Admin.fetchMenuImage);
router.post("/image/:id", Admin.addImage);
router.delete("/image/:id", Admin.deleteImage);

module.exports = router;
