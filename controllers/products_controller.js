
const Product = require('../models/product_model');
const ProductCategory = require("../models/product_category_model");



exports.getProducts = (req, res, next)  =>{
    var data = req.query.name;
    res.send(`<h1>Products List ${data}</h1>`);
}

exports.addProducts = (req, res, next)  =>{
    var name = req.body.name;
    console.log(`Add Products ${name}`);
    res.send(req.body);
}
