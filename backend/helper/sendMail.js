const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GENERATED_PASS,
  },
});

exports.generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000);
};
