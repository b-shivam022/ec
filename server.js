const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const useRouter = require("./routes/router");
const path = require("path");

dotenv.config({path:"./config.env"});

const DB = process.env.DATABASE;

mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("database connected sucessfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

// mongoose.connect(DB).then(() => {
//   console.log("connection sucessfully");
// })
// .catch((error) => {
//   console.log("no connection");
// }) 

app.use("/", useRouter);

app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'./client/build/index.html'));
});

const PORT = 5000 || process.env.PORT;

// app.listen(PORT, () => {
//   console.log("server is running on port 5000");
// });

connectDB().then(() => {
  app.listen(PORT, () => {
      console.log("server is running on port 5000");
  })
})
