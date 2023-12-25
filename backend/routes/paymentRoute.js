const express = require("express");
const { payment } = require("../controllers/paymentControler");
const router = express.Router();

router.post("/payment", payment);
router.post("/payment/success", (req, res) => {
  res.redirect("http://localhost:3000/");
});
router.post("/payment/fail", (req, res) => {
  res.redirect("http://localhost:3000/");
});
router.post("/payment/cancel", (req, res) => {
  res.redirect("http://localhost:3000/");
});
router.post("/payment/ipn", (req, res) => {
  res.redirect("http://localhost:3000/");
});

module.exports = router;
