const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require("../middlewares/Authenticate");


// Route to create a new user
router.post('/create' , userController.createUser);

// Route to get all users
router.get('/' , userController.getAllUsers);

// Route to get a user by ID
// router.get('/:id' , userController.getUserById);

router.get('/profile'  ,verifyToken, userController.userProfile);
// Route to update a user by ID
router.put('/:id' , userController.updateUserById);    

// Route to delete a user by ID
router.delete('/:id' , userController.deleteUserById);

// login api route 
router.post('/login' , userController.login);


// export the router
module.exports = router;

