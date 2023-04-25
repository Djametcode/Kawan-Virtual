const UserModel = require("../model/auth");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ msg: "Perlu Login Dahulu" });
  }
  console.log(authHeader);
  const token = authHeader.split(" ")[1];
  try {
    const data = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  next();
};

module.exports = auth;
