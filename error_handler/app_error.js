// errorHandler.js

const StatusCodes = require("./status_codes");

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const errorHandler = (err, req, res, next) => {
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let message = "Internal Server Error";

  if (err instanceof AppError) {
    statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    message = err.message || "Internal Server Error";
  }

  console.error(err.stack);

  res.status(statusCode).json({ error: message });
};

module.exports = { AppError, errorHandler };

// module.exports = function AppError(message, httpStatus) {
//   Error.captureStackTrace(this);
//   this.message = message;
//   this.status = httpStatus;
// };
