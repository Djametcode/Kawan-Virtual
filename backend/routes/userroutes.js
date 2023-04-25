const express = require("express");
const route = express.Router();
const {
  BuatProfile,
  updateProfile,
  getAllUser,
} = require("../controller/profilecontroller.js");
const upload = require("../utils/multer.js");

route.post("/buat-profil", BuatProfile);
route.patch("/update-profile/:Id", upload, updateProfile);
route.get("/all-user", getAllUser);

module.exports = route;
