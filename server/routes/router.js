const express = require("express");
const bodyParser = require("body-parser");
const { registerByMail, login,registerByMobile } = require("../controllers/usercontroller");
const router = express.Router();

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/accounts/signup", registerByMail);
router.post("/accounts/login", login);
router.get("/otp",registerByMobile);

module.exports = router;
