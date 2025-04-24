const jwt = require("jsonwebtoken");

exports.authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (token) {
    const decrypt = jwt.verify(token, process.env.jWT);
    req.user = decrypt;
    next();
  } else {
    res.status(400).send({ message: "Unauthorized issues" });
  }
};
