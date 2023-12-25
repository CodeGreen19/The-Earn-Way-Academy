const { generateOTP, transporter } = require("../helper/sendMail");
const tryCatchHandler = require("../middleweres/tryCatchHandler");
const ErrorHandler = require("../middleweres/error.js");
const { User } = require("../models/userModel");
const request = require("request");

// login handler
exports.userSignUp = tryCatchHandler(async (req, res) => {
  const { info, forgetReq } = req.body;

  const otp = generateOTP();
  if (info.length === 11) {
    // send sms function
  } else {
    const mailOptions = {
      from: process.env.GMAIL_ADDRESS, // sender address
      to: info, // list of receivers
      subject: "The Earn Way Academy OTP",
      html: `<h2>Your TEWacademy Varification Code Is : <span style={{color:"green"}}> ${otp} </span></h2> </br> <p>NOTE: your vrification code will expire in 4 min </p>
      `,
    };
    let user = await User.findOne({ email: info });
    if (user && forgetReq === false) {
      return res.json({ exists: true, email: info });
    } else {
      // to send mail
      await transporter.sendMail(mailOptions);
      if (forgetReq === false) {
        await User.create({ email: info, otp });
      } else {
        user.otp = otp;
        await user.save();
      }

      res.status(201).json({
        sucess: true,
        message: "User Created Successfully",
        email: info,
        mailSent: true,
      });
    }
  }
});
// login handler
exports.login = tryCatchHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  const passwordCompare = await user.passwordCompare(password);
  if (!passwordCompare) {
    return next(new ErrorHandler("Invalid password", 404));
  }

  const token = await user.generateToken();

  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  // save the token in the cookie store
  res.status(201).cookie("token", token, options).json({
    message: "login successfully",
    success: true,
    user,
    token,
  });
});

// getting user info after login
exports.optVarify = tryCatchHandler(async (req, res, next) => {
  const { otp, email } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return next(new ErrorHandler("user not found", 404));
  }

  if (user.otp !== otp) {
    return next(new ErrorHandler("OTP does not match", 404));
  }

  user.otp = null;
  user.varified = true;
  user.save();
  res.status(201).json({
    sucess: true,
    message: "User Created Successfully",
    user: user,
  });
});
// getting user info after login
exports.userInfo = tryCatchHandler(async (req, res) => {
  const { name, password, email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  user.name = name;
  user.password = password;
  await user.save();

  // generate token
  const token = await user.generateToken();

  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(201).cookie("token", token, options).json({
    success: true,
    message: "user created successfully",
    user,
    token,
  });
});
// getting user info after login
exports.loadUser = tryCatchHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    message: "User created",
    user,
  });
});
// getting user info after login
exports.logoutUser = tryCatchHandler(async (req, res) => {
  res
    .status(200)
    .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
    .json({
      success: true,
      message: "Logged out successfully",
    });
});
// getting user info after login
exports.changePassword = tryCatchHandler(async (req, res, next) => {
  const { oldPassword: password, newPassword } = req.body;

  const user = await User.findById(req.user._id).select("+password");

  const passwordCompare = await user.passwordCompare(password);
  if (!passwordCompare) {
    return next(new ErrorHandler("Invalid password", 404));
  }

  user.password = newPassword;
  user.save();

  res.status(200).json({
    success: true,
    message: "password changed successfully",
  });
});

// getting user info after login
exports.sendSms = tryCatchHandler(async (req, res) => {
  var options = {
    method: "POST",
    url: "https://api.sms.net.bd/sendsms",
    formData: {
      api_key: "9JElfgWcUMjkNP5qY122RfA6yrEqC5W0wZS3IbpI",
      msg: "Dear shobuj , one time password is 01223",
      to: "8801954921359",
    },
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });

  res.json({ message: "send sms successfully" });
});
// -----------------for admin -----------------------------------
exports.allUsers = tryCatchHandler(async (req, res) => {
  const users = await User.find();
  res.json({ success: true, adminUsers: users });
});
exports.updateRole = tryCatchHandler(async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { role: req.body.role });
  res.json({ success: true, message: "role updated" });
});
exports.deleteUser = tryCatchHandler(async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: "user deleted successfully" });
});
