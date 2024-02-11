const User = require("../models/user");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { error } = require("console");
const uuid = require("uuid");
const { AppError } = require("../error_handler/app_error");
const jwt = require("jsonwebtoken");
const StatusCodes = require("../error_handler/status_codes");

exports.signup = (req, res, next) => {
  console.log(`signup called`);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new AppError("Validation failed:::", StatusCodes.BAD_REQUEST);
    //error.statusCode = StatusCodes.BAD_REQUEST;
    //error.data = errors.array();
    console.log(`error ${error}`);
    //throw error;
    next(error);
  }
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  User.findOne({ where: { email: email } }).then((userDoc) => {
    if (userDoc) {
      res.status(409).json({ message: "E-mail address already exists!" });
      //next(new AppError("E-mail address already exists!"));
      //return Error("E-mail address already exists!");
      //throw new AppError("E-mail address already exists!");
    } else {
      bcrypt
        .hash(password, 12)
        .then((hashedPw) => {
          const user = User.create({
            // id: uuid.v4(),
            email: email,
            password: hashedPw,
            name: name,
          });
          return user;
        })
        .then((result) => {
          res.status(201).send({ message: "User created!", userId: result.id });
        })
        .catch((err) => {
          if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
        });
    }
  });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  User.findOne({
    where: { email: email },
    // attributes: { exclude: ["password"] },
  })
    .then((user) => {
      loadedUser = user;
      if (user !== null) {
        return bcrypt.compare(password, loadedUser.password);
      } else {
        throw new AppError("user not found", 401);
      }
    })
    .then((isEqual) => {
      if (isEqual) {
        const token = jwt.sign(
          {
            email: loadedUser.email,
            userId: loadedUser.id.toString(),
          },
          "somesecretkey",
          { expiresIn: "1h" }
        );
        const resUser = loadedUser.get({ plain: true });
        delete resUser["password"];
        res.status(200).json({
          token: token,
          user: resUser,
        });
      } else {
        res.status(401).json({ message: "Wrong Password" });
      }
    })
    .catch((error) => {
      //throw error;
      next(error);
    });
};
