const express = require("express");
const router = express.Router();

const controller = require("../controllers/product.controller");

router.get("/", controller.product);

router.get("/create", controller.formCreate);
router.post("/create", controller.store);

router.get("/delete/:id", controller.delete);

module.exports = router;
