const userModel = require('../models/user.model');
const otpModel = require('../models/otp.model');
const sendEMail = require('../middlewares/mailer');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

// step 1 request OTP
const requestOtp = async (req , res) =>{
    const { email} = req.body;

    const user  = await userModel.findOne({email});

    if(!user){
        return res.status(400).json({message : 'User not found'});
    }

    // generate 6 digit opt
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // save otp to database with 5 min expiry
    const newOtp = await otpModel.create({email , otp , 
        expiresAt: new Date(Date.now() + 5 * 60 * 1000),});

        // send email
    await sendEMail(email , 'Your OTP Code' , `Your OTP code is ${newOtp}. It will expire in 5 minutes.`);

    res.status(200).json({message : 'OTP sent to your email'});

}


// step 2  reset password
const resetPassword = async (req , res) =>{
    const { email , otp , newPassword} = req.body;
    console.log(req.body);

    // find OTP in DB
    const record = await otpModel.findOne({email , otp});
    if(!record){
        return res.status(400).json({message : 'Invalid OTP'});
    }

    // check if OTP is expired
    if(record.expiresAt < Date.now()){
        return res.status(400).json({message : 'OTP expired'});
    }

    // otp valid -> update password
    const hashedPassword = await bcrypt.hash(newPassword , 10);
    await userModel.findOneAndUpdate({email} , {password : hashedPassword});
    // delete otp record
    await otpModel.deleteOne({_id: record._id});
    res.status(200).json({message : 'Password reset successful'});

}


module.exports = { requestOtp , resetPassword};
