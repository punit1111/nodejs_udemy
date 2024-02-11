const express = require("express");
const { body } = require("express-validator");
const User = require("../models/user");
const authController = require("../controllers/user_controller");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.put(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .normalizeEmail({ gmail_remove_dots: false }),
    body("password").trim().isLength({ min: 5 }),
    body("name").trim().not().isEmpty(),
  ],
  authController.signup
);

router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .normalizeEmail({ gmail_remove_dots: false }),
    body("password").trim().isLength({ min: 5 }),
  ],
  authController.login
);

module.exports = router;
