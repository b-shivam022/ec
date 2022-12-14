const bcrypt = require("bcrypt");
const { generate } = require("otp-generator");
const User = require("../schemas/userSchema");

const registerByMail = async (req, res) => {
  let user = new User({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  user.fName = req.body.fName;
  user.lName = req.body.lName;
  user.email = req.body.email;
  user.password = await bcrypt.hash(req.body.password, 3);

  const userExist = await User.findOne({ email: user.email });
  if (userExist) {
    return res.json({ staus: 404, message: "Email already exist!" });
  }
  if(req.body.password.length<8){
    return res.json({ staus: 404, message: "Your password must be 8 characters!" });
  }

  user.save(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send("Sucessfully Registered!");
    }
  });
};

const registerByMobile = (req,res) =>{
    res.send(generate(4,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false}))
}

const login = async (req, res) => {
  const em = req.body.email;
  const ps = req.body.password;
  User.findOne({ email: em }, (err, docs) => {
    if (docs) {
      bcrypt.compare(ps, docs.password, (error, result) => {
        if (result === true) {
          res.json({ staus: 205, message: "sucessfully login!" });
        } else {
          res.json({ staus: 201, message: "wrong password!" });
        }
      });
    } else {
      res.json({ status: 404, message: "check your mail!" });
    }
  });
};

module.exports = { registerByMail, login,registerByMobile };
