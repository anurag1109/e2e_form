const express = require("express");
const userrouter = express.Router();
userrouter.use(express.json());

const { register, login, userData } = require("../controller/authcontroller");

// handelling all routes
userrouter.post("/register", register);
userrouter.post("/login", login);
userrouter.get("/data", userData);

module.exports = { userrouter };
