function errorHandler(error, req, res, next) {
  let status;
  let message;

  switch (error.name) {
    case "SequelizeValidationError":
      status = 400;
      message = error.errors[0].message;
      break;
    case "AlreadyExist":
      status = 400;
      message = "Data already exist";
      break;
    case "Unauthenticated":
    case "JsonWebTokenError":
      status = 401;
      message = "Unauthenticated";
      break;
    case "InvalidUser":
      status = 401;
      message = "Invalid username or email or password";
      break;
    case "Forbidden":
      status = 403;
      message = "Forbidden";
      break;
    case "DataNotFound":
      status = 404;
      message = "Data Not Found";
      break;
    case "SequelizeUniqueConstraintError":
      status = 409;
      message = error.errors[0].message;
      break;
    default:
      status = 500;
      message = "Internal Server Error";
      break;
  }
  res.status(status).json({ message });
}

module.exports = errorHandler;
