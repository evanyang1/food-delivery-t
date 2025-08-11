const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token =
    req.cookies?.token ||
    (req.headers.authorization && req.headers.authorization?.split(" ")[1]);

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Token missing: Unauthorized access" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { _id: decoded.id, email: decoded.email };
    next();
  } catch (error) {
    const message =
      error.name === "TokenExpiredError" ? "Token expired" : "Invalid token";
    return res.status(403).json({ message, success: false });
  }
};

module.exports = authMiddleware;
