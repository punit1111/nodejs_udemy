const express = require("express");

const router = express.Router();

const productController = require("../controllers/products_controller");

router.get("/products", productController.getProducts);
router.get("/product-categories", productController.getProductCategories);

router.delete("/delete-product/:id", productController.deleteProduct);

router.post("/add-product", productController.addProduct);
router.post("/add-product-categories", productController.addProductCategory);

router.all("*", (req, res, next) => {
  res.status(404).json({ message: "URL NOT FOUND" });
});

module.exports = router;
