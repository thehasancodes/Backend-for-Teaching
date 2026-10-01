const apikey = (req, res, next) => {
  const key = req.header("x-api-key");

  if (key !== "12345") {
    return res.status(401).json({
      success: false,
      message: "Invalid API Key",
    });
  }
  next();
};
module.exports = apikey;
