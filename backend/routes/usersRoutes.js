const express = require("express");
const router = express.Router();
const users = require("../controllers/usersControllers");

router.post("/register", users.registerController);
router.post("/login", users.loginController);

module.exports = router;
