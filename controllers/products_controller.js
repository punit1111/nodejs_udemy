const Product = require("../models/product_model");
const ProductCategory = require("../models/product_category_model");
const uuid = require("uuid");
const AppError = require("../error_handler/app_error");
const StatusCodes = require("../error_handler/status_codes");

exports.getProducts = (req, res, next) => {
  try {
    Product.findAll().then((result) => {
      console.log(`all products ${result}`); 
      res.send(result);
    });
  } catch (error) {
    next(error);
  }
};

exports.addProduct = async (req, res, next) => {
  console.log(`Adding Products ${req.body.title}`);
  try {
    await new Product(
      //id: uuid.v4(),
      (seller_id = req.userId),
      (title = req.body.title),
      (description = req.body.description),
      (image_url = req.body.image_url),
      (cover_url = req.body.cover_url),
      (price = 0.5)
    ).save();
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  console.log(`Delete Products ${req.params.id}`);
  try {
    await Product.findOne({ where: { id: req.params.id } }).then(
      async (result) => {
        console.log(`find by id ${result}`);
        if (result !== null) {
          await Product.destroy({ where: { id: req.params.id } }).then(
            (num) => {
              if (num == 1) {
                res.send({
                  message: `Product was deleted successfully`,
                });
              } else {
                res.send({
                  message: `Cannot delete Product`,
                });
              }
            }
          );
        } else {
          console.log("catch error 1");
          //throw AppError(`Product was not found!`, 400);
          next(new AppError(`Product was not found!`, 400));
        }
      }
    );
  } catch (error) {
    console.log("catch error 2");
    //throw AppError(`Product was not found!`, 400);
    next(AppError(`Product was not found!`, StatusCodes.NOT_FOUND));
  }
};

exports.updateProduct = async (req, res, next) => {
  console.log(`Update Products ${req.params.id}`);
  try {
    await Product.findOne({ where: { id: req.params.id } }).then(
      async (result) => {
        console.log(`find by id ${result}`);
        if (result !== null) {
          await Product.update({ where: { id: req.params.id } }).then((num) => {
            if (num == 1) {
              res.send({
                message: `Product was deleted successfully`,
              });
            } else {
              res.send({
                message: `Cannot delete Product`,
              });
            }
          });
        } else {
          res.send({
            message: `Product was not found!`,
          });
        }
      }
    );
  } catch (error) {
    throw error;
  }
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
