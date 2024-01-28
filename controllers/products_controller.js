const Product = require("../models/product_model");
const ProductCategory = require("../models/product_category_model");
const uuid = require("uuid");

exports.getProducts = (req, res, next) => {
  Product.findAll().then((result) => {
    console.log(`all products ${result}`);
    res.send(result);
  });
};

exports.addProduct = (req, res, next) => {
  console.log(`Adding Products`);
  Product.create({
    id: uuid.v4(),
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    cover_url: req.body.cover_url,
    price: 0.5,
  });
  console.log(`Add Products }`);
  res.send(req.body);
};

exports.getProductCategories = (req, res, next) => {};

exports.addProductCategory = (req, res, next) => {
  console.log(`Adding Products Categories`);
  ProductCategory.create({
    id: uuid.v4(),
    name: req.body.name,
    description: req.body.description,
    image_url: req.body.image_url,
  });
  console.log(`Add Products }`);
  res.send(req.body);
};
