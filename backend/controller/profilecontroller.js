const profileModel = require("../model/user.js");
const cloudinary = require("../utils/cloudinary.js");

const BuatProfile = async (req, res) => {
  try {
    const data = await profileModel.create({ ...req.body });
    return res.status(200).json({ msg: "Berhasil Membuat Profile", data });
  } catch (error) {
    console.log(error);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { Id: userId } = req.params;
    let fotos = req.file.path;
    if (!fotos) {
      return res.status(401).json({ msg: "No file" });
    }
    const result = await cloudinary.uploader.upload(fotos, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "Testing",
      width: 300,
    });

    req.body.foto = result.secure_url;

    const user = await profileModel.findOneAndUpdate(
      { _id: userId },
      { ...req.body },
      { new: true }
    );

    return res.status(200).json({
      msg: "Berhasil Update Profil",
      user: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = async (req, res) => {
  try {
    const data = await profileModel.find({});
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { BuatProfile, updateProfile, getAllUser };
