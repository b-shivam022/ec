const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const useRouter = require("./server/routes/router");
const path = require("path");

const PORT = 8080 || process.env.PORT;

dotenv.config({path:"./config.env"});

const DB = process.env.DATABASE;

app.use(cors());  

app.use("/api/v1/users", useRouter);

app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*', (req, res) => {
  res.send(path.join(__dirname,"./client/build/index.html"));
});

mongoose.connect(DB).then(() => {
  console.log("connection sucessfully");
  app.listen(PORT, () => {
    console.log("server is running on port 8080");
  });
})
.catch((error) => {
  console.log("no connection");
});

mongoose.set("strictQuery", false);
