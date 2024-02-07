const express = require("express");

const router = express.Router();

const productController = require("../controllers/products_controller");

router.get("/products", productController.getProducts);
router.get("/product-categories", productController.getProductCategories);

router.delete("/delete-product/:id", productController.deleteProduct);

router.post("/add-product", productController.addProduct);
router.post("/add-product-categories", productController.addProductCategory);
  

module.exports = router;
