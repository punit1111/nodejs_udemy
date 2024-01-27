

const express = require('express');

const router = express.Router();

const productController = require('../controllers/products_controller');


router.get('/products', productController.getProducts);

router.post('/add-product', productController.addProducts);

module.exports = router;
