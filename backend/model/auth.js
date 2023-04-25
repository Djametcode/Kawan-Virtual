const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please fill username"],
  },
  email: {
    type: String,
    required: [true, "Please Provide Email"],
    match: [/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm],
  },
  password: {
    type: String,
    required: [true, "Please fill password"],
  },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
  return jwt.sign(
    {
      userId: this._id,
      username: this.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.EXPIRES }
  );
};

userSchema.methods.checkPass = async function (userPass) {
  try {
    const isMatch = await bcrypt.compare(userPass, this.password);
    return isMatch;
  } catch (error) {
    console.log(error);
  }
};

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
