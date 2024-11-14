const express = require("express");
const { check } = require("express-validator");
const usersControllers = require("../controllers/users-controller");
const router = express.Router();

//router.post("/signup", usersControllers.createUser);
router.post(
    "/signup",
    [
      check("firstName").not().isEmpty().withMessage("First name is required"),
      check("lastName").not().isEmpty().withMessage("Last name is required"),
      check("email").isEmail().withMessage("Please provide a valid email"),
      check("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long")
    ],
    usersControllers.createUser
  );

  //router.post("/login", usersControllers.loginUser);

  router.post(
    "/login",
    [
      check("email").isEmail().withMessage("Please provide a valid email"),
      check("password").not().isEmpty().withMessage("Password is required")
    ],
    usersControllers.loginUser
  );

module.exports = router;
