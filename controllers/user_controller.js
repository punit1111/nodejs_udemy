const User = require("../models/user");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { error } = require("console");
const uuid = require("uuid");
const AppError = require("../utils/error_handler");
const jwt = require("../jsonwebtoken");

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // const error = new Error("Validation failed:::");
    // error.statusCode = 422;
    // error.data = errors.array();
    // console.log(`error ${error}`);
    // throw error;
    next(error);
  }
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  bcrypt
    .hash(password, 12)
    .then((hashedPw) => {
      const user = User.create({
        id: uuid.v4(),
        email: email,
        password: hashedPw,
        name: name,
      });
      return user;
    })
    .then((result) => {
      console.log(`header result ${result}`);
      res.status(201).send({ message: "User created!", userId: result.id });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      console.log(`header result ${err}`);
      next(err);
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        next(AppError("User not found", 401));
      }
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        next(AppError('Wrong password', 401)); 
      } 
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      } 
    });
};
