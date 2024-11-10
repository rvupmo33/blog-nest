const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require("uuid");

let DUMMY_USERS = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    country: "USA",
    password: "password123",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    country: "Canada",
    password: "password456",
  },
  {
    id: 3,
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily.johnson@example.com",
    country: "UK",
    password: "password789",
  },
  {
    id: 4,
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@example.com",
    country: "Australia",
    password: "password101",
  },
  {
    id: 5,
    firstName: "Sarah",
    lastName: "Davis",
    email: "sarah.davis@example.com",
    country: "New Zealand",
    password: "password102",
  },
];

const createUser = (req, res, next) => {
  const { firstName, lastName, email, country, password } = req.body;

  const newUser = {
    id: uuidv4(),
    firstName,
    lastName,
    email,
    country,
    password,
  };

  DUMMY_USERS.push(newUser);

  res.status(201).json({ user: newUser });
};

exports.createUser = createUser;
