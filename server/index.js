const mongoose = require("mongoose");
const express = require("express");
const app = express();
const useRouter = require("./routes/router");

const DB = "mongodb+srv://shivamB:26i8KJA58wAGwmP2@cluster0.gxjbelh.mongodb.net/ecomDB?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);

mongoose.connect(DB).then(() => {
    console.log("connection sucessfull");
  }).catch((error) => {
    console.log(error);
  });

app.use("/api", useRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
