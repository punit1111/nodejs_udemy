const jwt = require("jsonwebtoken");
const AppError = require("../utils/error_handler");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    next(new AppError("Not authenticated."));
  }
  const token = req.get("Authorization").split(" ")[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, "somesecretkey");
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
  if (!decodedToken) {
    next(new AppError("Not authenticated."));
  }
  console.log(`auth token ${req.userId}  ${decodedToken.userId}`); 
  req.userId = decodedToken.userId;
  next();
};
