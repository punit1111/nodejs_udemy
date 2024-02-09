const express = require("express");
const isAuth = require("../middelware/is-auth");
const router = express.Router();

const productController = require("../controllers/products_controller");
 
router.get("/get-products",  productController.getProducts); 

router.get("/get-product-categories", productController.getProductCategories);

router.delete("/delete-product/:id", productController.deleteProduct);
 
router.post("/add-product", productController.addProduct);

router.post("/add-product-categories", productController.addProductCategory);

module.exports = router;
