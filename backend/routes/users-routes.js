const express = require("express");
const usersControllers = require("../controllers/users-controller");
const router = express.Router();

router.post("/signup", usersControllers.createUser);

module.exports = router;
