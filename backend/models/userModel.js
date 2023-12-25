// quizModel.js (or wherever you define your models)
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String, select: false },
  varified: { type: Boolean },
  role: { type: String, default: "user" },
  date: { type: Date, default: Date.now() },
  otp: { type: Number },
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

// to generate token
userSchema.methods.generateToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};
userSchema.methods.passwordCompare = function (password) {
  return bcrypt.compareSync(password, this.password);
};

exports.User = mongoose.model("User", userSchema);
