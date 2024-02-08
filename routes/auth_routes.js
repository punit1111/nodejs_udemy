const express = require("express");
const User = require("../models/user");
const productController = require("../controllers/products_controller");
const jwt = require("jsonwebtoken");
const isAuth = require("../middelware/is-auth");

const router = express.Router();

router.get('/product/get-products', isAuth, productController.getProducts ); 

module.exports = router;  

