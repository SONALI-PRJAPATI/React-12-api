const express = require("express");
const router = express.Router();


const { createuser, home } = require("../controller/userControllers");
router.get("/", home);

router.post("/create", createuser);

module.exports = router;