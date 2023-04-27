const UserModel = require("../model/auth");

const registUser = async (req, res) => {
  try {
    const data = await UserModel.create({ ...req.body });
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(501).json({ msg: "Please fill email and password" });
    }

    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ msg: "User Not Found" });
    }

    const isMatch = await user.checkPass(password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Password Wrong" });
    }

    const token = await user.createJWT();
    return res.status(200).json({
      msg: "Berhasil Login",
      data: {
        user,
      },
      token,
      id: user.id,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registUser, loginUser };
