const express = require("express");
const {
  userSignUp,
  userInfo,
  optVarify,
  sendSms,
  loadUser,
  logoutUser,
  login,
  changePassword,
  allUsers,
  updateRole,
  deleteUser,
} = require("../controllers/userControl");
const { isUserExists } = require("../middleweres/userAuth");
const router = express.Router();

router.post("/user/signup", userSignUp);
router.post("/user/login", login);
router.post("/user/otp/varify", optVarify);
router.post("/user/info", userInfo);
router.get("/user/me", isUserExists, loadUser);
router.get("/user/logout", isUserExists, logoutUser);
router.post("/user/send/sms", sendSms);
router.put("/user/change/password", isUserExists, changePassword);
router.get("/admin/user/all", isUserExists, allUsers);
router.put("/admin/user/update/:id", isUserExists, updateRole);
router.delete("/admin/user/delete/:id", isUserExists, deleteUser);

module.exports = router;
