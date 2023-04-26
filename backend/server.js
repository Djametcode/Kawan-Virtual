require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

//method import
const connectDB = require("./db/connectDB.js");
const auth = require("./middleware/autentication.js");
const authroute = require("./routes/authroute.js");
const userRoute = require("./routes/userroutes.js");
//app use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v8/kawan-virtual/", authroute);
app.use("/api/v8/kawan-virtual/", auth, userRoute);

const startServer = async () => {
  try {
    await connectDB(MONGO_URL);
    app.listen(port, console.log(`server running ....`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
