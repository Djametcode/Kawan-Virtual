const express = require("express");
const route = express.Router();
const { registUser, loginUser } = require("../controller/authcontroller");

route.post("/regist", registUser);
route.post("/login", loginUser);

module.exports = route;
