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

const createUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

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
    firstName,
    lastName,
    email,
    password,
  });

  try {
    await newUser.save();
  } catch (err) {
    const error = new HttpError("Creating user failed, please try again.", 500);
    return next(error);
  }

  res.status(201).json({ user: newUser.toObject({ getters: true }) });
};

const loginUser = (req, res, next) => {
  const { email, password } = req.body;

  const foundUser = DUMMY_USERS.find(
    (user) => user.email === email && user.password === password
  );

  if (foundUser) {
    const error = new HttpError(
      "Wrong Username or Password, please enter correct username and password! Try again.",
      401
    );
    return next(error);
  }

  res.status(200).json({ message: "Login successful", user: foundUser });
};

exports.createUser = createUser;
exports.loginUser = loginUser;
