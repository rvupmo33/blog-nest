const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");

// let DUMMY_USERS = [
//   {
//     id: 1,
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@example.com",
//     country: "USA",
//     password: "password123",
//   },
//   {
//     id: 2,
//     firstName: "Jane",
//     lastName: "Smith",
//     email: "jane.smith@example.com",
//     country: "Canada",
//     password: "password456",
//   },
//   {
//     id: 3,
//     firstName: "Emily",
//     lastName: "Johnson",
//     email: "emily.johnson@example.com",
//     country: "UK",
//     password: "password789",
//   },
//   {
//     id: 4,
//     firstName: "Michael",
//     lastName: "Brown",
//     email: "michael.brown@example.com",
//     country: "Australia",
//     password: "password101",
//   },
//   {
//     id: 5,
//     firstName: "Sarah",
//     lastName: "Davis",
//     email: "sarah.davis@example.com",
//     country: "New Zealand",
//     password: "password102",
//   },
// ];

//create user with validation
const createUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs, please check your data.", 422));
  }
  const { username, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "User creation failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "User exists already, please login instead.",
      422
    );
    return next(error);
  }

  const newUser = new User({
    username,
    email,
    password,
  });

  try {
    await newUser.save();
  } catch (err) {
    const error = new HttpError("Creating user failed, please try again.", 500);
    return next(error);
  }

  res.status(201).json({ message: "Signup successful", user: newUser });
};

//login user with valdiation
const loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs, please check your data.", 422));
  }

  const { email, password } = req.body;

  let foundUser;
  try {
    foundUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Login failed, please try again later.", 500);
    return next(error);
  }

  if (!foundUser || foundUser.password !== password) {
    const error = new HttpError(
      "Invalid email or password, please try again.",
      401
    );
    return next(error);
  }

  res.status(200).json({ message: "Login successful", user: foundUser });
};

exports.createUser = createUser;
exports.loginUser = loginUser;
