const verifyToken = require("../middlewares/Authenticate");
const {requestOtp , resetPassword} = require("../controllers/auth") 

const express = require("express");
const router  = express.Router();

router.post('/request-otp' , verifyToken, requestOtp);
router.post('/reset-password' ,verifyToken, resetPassword);

module.exports = router;