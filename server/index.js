const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const useRouter = require("./routes/router");

dotenv.config({path:"./config.env"});
const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);

mongoose.connect(DB).then(() => {
    console.log("connection sucessfully");
  })
  .catch((error) => {
    console.log("no connection");
  });

app.use("/", useRouter),
app.get("/", (req, res) => {
  res.send("hello ");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
