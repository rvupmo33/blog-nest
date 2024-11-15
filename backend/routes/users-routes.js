const express = require("express");
const { check } = require("express-validator");
const usersControllers = require("../controllers/users-controller");
const router = express.Router();

//router.post("/signup", usersControllers.createUser);
router.post(
  "/signup",
  [
    check("username").not().isEmpty().withMessage("Username is required"),
    check("email").isEmail().withMessage("Please provide a valid email"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  usersControllers.createUser
);

//router.post("/login", usersControllers.loginUser);

router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Please provide a valid email"),
    check("password").not().isEmpty().withMessage("Password is required"),
  ],
  usersControllers.loginUser
);

module.exports = router;
