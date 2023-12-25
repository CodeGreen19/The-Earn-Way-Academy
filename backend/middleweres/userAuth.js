const { User } = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const tryCatchHandler = require("./tryCatchHandler.js");
const ErrorHandler = require("./error.js");

exports.isUserExists = tryCatchHandler(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token || token === null) {
    return res.status(401).json({ success: false });
  }

  const { _id } = await jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(_id);

  next();
});
