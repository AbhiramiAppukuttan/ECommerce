const jwt = require("jsonwebtoken");

const userAuth = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Please login"
    });
  }

  const token = authHeader.split(" ")[1];

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET
  );

  req.user = {
    userId: decoded.userId,
    name: decoded.name,
    email: decoded.email,
    role: decoded.role
  };

  next();

};

module.exports = userAuth;