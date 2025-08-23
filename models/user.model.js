const mongoose = require('mongoose');

// user schema
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum:['admin', 'user'],
        default: 'user',
    }
});

// user model

const userModel = mongoose.model('User' , userSchema);

module.exports = userModel;

