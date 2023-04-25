const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  NamaDepan: {
    type: String,
    required: [true, "Please isi NamaDepan"],
  },
  NamaBelakang: {
    type: String,
    required: [true, "Please isi name belakang"],
  },
  kotaAsal: {
    type: String,
    required: [true, "Please isi kota asal"],
  },
  jenisKelamin: {
    type: String,
    required: [true, "Please fill jenis kelamin"],
  },
  usia: {
    type: Number,
    required: [true, "Please isi Usia"],
  },
  foto: {
    type: String,
    default: "",
  },
});

const profileModel = mongoose.model("Profile", profileSchema);
module.exports = profileModel;
