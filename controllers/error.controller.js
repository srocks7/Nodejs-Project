module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (err.code === 11000) {
    res.status(400).json({
      status: err.status,
      message: err.message,
    });
  } else if (err.name === "ValidationError") {
    res.status(400).json({
      status: err.status,
      message: err.message,
    });
  } else if (err.name === "CastError") {
    res.status(400).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
    });
  }
};
