const bcrypt = require("bcrypt");
const User = require("../schemas/userSchema");

const register = async (req, res) => {
  let user = new User({
    fullName: "",
    email: "",
    password: "",
    cpassword:""
  });

  user.fullName = req.body.fullName;
  user.email = req.body.email;
  user.password = await bcrypt.hash(req.body.password, 3);
  user.cpassword = await bcrypt.hash(req.body.password, 3);

  if((req.body.fullName || req.body.email || req.body.password || req.body.cpassword) === "" ){
    return res.json({
      staus: 406,
      message: "The field cannot be Empty.",
    });
  }

  if (req.body.password.length < 8) {
    return res.json({
      staus: 404,
      message: "Your password must be 8 characters.",
    });
  }

  if(req.body.password != req.body.cpassword){
    return res.json({
      status:205,
      message:"Password and Confirm Password must be match.",
    })
  }

  // const userExist = User.findOne({ email: user.email });
  // if (userExist) {
  //   return res.json({ staus: 402, message: "Email already Exist." });
  // }

  user.save(function (err, data) {
    if (err) {
      res.json({staus:401,message:"Invalid Registration"});
    } else {
      res.json({status:201,message:"Sucessfully Registered!"});
    }
  });
};




const login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if((email || password) === "" ){
    return res.json({
      staus: 406,
      message: "The field cannot be Empty.",
    });
  }

  User.findOne({ email: email }, (err, docs) => {
    if (docs) {
      bcrypt.compare(password, docs.password, (error, result) => {
        if (result === true) {
          res.json({ staus: 205, message: "Sucessfully Login!" });
        } else {
          res.json({ staus: 201, message: "Please check your password." });
        }
      });
    } else {
      res.json({ status: 404, message: "Please check your gmail." });
    }
  });
};


module.exports = { register, login };
