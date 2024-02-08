module.exports = function AppError(message, httpStatus) {
  //Error.captureStackTrace(this);
  this.message = message;
  this.status = httpStatus; 
};
 