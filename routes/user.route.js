const express = require("express");
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);

router.use(authController.protect);

router.patch("/updateMe", userController.updateMe);
router.delete(
  "/deleteMe",
  authController.restrictTo("admin"),
  userController.deleteMe
);

module.exports = router;
