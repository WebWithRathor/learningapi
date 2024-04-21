const express = require("express");
const router = express.Router();

const User = require("../models/userModel");
const {home , register, readall} = require('../controller/indexcontroller.js')
router.get("/",home );

router.post("/register", register);

router.get("/readall",readall);
module.exports = router;
