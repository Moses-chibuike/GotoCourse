const express = require("express");
const {
  register,
  login
} = require("../controllers/Usercontrollers");
const { protect, authorize } = require("../middleware/protected");

const router = express.Router();

router.post("/register", register);
router.post("/login", protect, login);


module.exports = router;
