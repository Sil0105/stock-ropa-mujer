const errorMiddleware = (err, req, res, next) => {
  res.status(statusCode).json({
    message: err.message || "Error interno del servidor",
  });
};

module.exports = errorMiddleware;