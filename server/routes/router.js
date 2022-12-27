const express = require("express");
const bodyParser = require("body-parser");
const { register, login} = require("../controllers/usercontroller");
const router = express.Router();

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/register", register);
router.post("/login", login);

module.exports = router;
