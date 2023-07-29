const express = require("express");
const productController = require("../controllers/product.controller");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.use(authController.protect);

router.post("/create", productController.createProduct);
router.get("/", productController.getAllProducts);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(authController.restrictTo("admin"), productController.deleteProduct);

module.exports = router;
