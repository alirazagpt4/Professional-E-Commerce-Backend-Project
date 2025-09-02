const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = 'AliRaza12345'
// Create a new user  and also signup a user

const createUser = async (req , res) =>{
    const { name , email , password , role} = req.body;
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = await userModel.create({
            name,
            email,
            password:hashedPassword,
            role
        });

        if(!newUser) {
            return res.status(400).json({
                message: 'User creation failed'
            });
        }



        return res.status(201).json({
            message: 'User Sign up  successfully',
            user:newUser
        })
    }
    catch(error){
        return res.status(500).json({
            message: 'Error creating user',
            error: error.message
        });
    }
}



// login api with token genaration with jwt


const getAllUsers = async (req , res) =>{
    try {
         const users = await userModel.find();
        if(!users || users.length === 0) {
            return res.status(404).json({
                message: 'No users found'
            });
        }
        return res.status(200).json({
            message: 'Users fetched successfully',
            users: users
        });


    }
    catch(error){
        return res.status(500).json({
            message: 'Error fetching users',
            error: error.message
        });
    }
}


// const getUserById = async (req, res) => {
//     const { id } = req.params
//     try {
//         const user = await userModel.findById(id);
//         if(!user){
//             return res.status(404).json({
//                 message: 'User not found'
//             });
//         }
//         return res.status(200).json({
//             message: 'User fetched successfully',
//             user: user
//         })
//     }
//     catch(error){
//         return res.status(500).json({
//             message: 'Error fetching user',
//             error: error.message
//         });
//     }
// }


const updateUserById = async (req, res) => {
    const id = req.params.id;
    const { name, email, password, role } = req.body;
    try{
          const updateUser = await userModel.findByIdAndUpdate(id, {
            name,
            email,
            password,
            role
          });

          return res.status(201).json({
            message: 'User updated successfully',
            user: updateUser
          })
    }
    catch(err){
                return res.status(500).json({
            message: 'Error updating user',
                })
    }
}

const deleteUserById = async (req , res)=>{

    const  id = req.params.id;
    
    try{
        const deletedUser = await userModel.findByIdAndDelete(id);
        if(!deletedUser){
            return res.status(404).json({
                message: 'User not found'
            });
        }
        return res.status(200).json({
            message: 'User deleted successfully',
            user: deletedUser
        });

    }
    catch(err){
        return res.status(500).json({
            message: 'Error deleting user',
            error: err.message
        });
    }

}


// login api 
const login = async (req , res) =>{
    console.log("login works ")

    const { email , password} = req.body;
    try{
          const user = await userModel.findOne({ email});
            if(!user || user.length === 0){
                return res.status(404).json({
                    message: 'User not found'
                });
            }

            const isMatch = await bcrypt.compare(password , user.password);
            if(!isMatch){
                return res.status(400).json({
                    message: 'Invalid credentials'
                });
            }

            // Generate JWT token
            const token = jwt.sign({ id: user._id , role: user.role} , jwtSecret);
            return res.status(200).json({
                message: 'User logged in successfully',
                user: user,
                token: token
            });


    }
    catch(error){
        return res.status(500).json({
            message: 'Error logging in',
            error: error.message
        });
    }
}


// user profile
 const userProfile = async (req , res) =>{
    console.log("Hello from user profile");
    console.log(req);
    const userId = req.user.id; // Assuming user ID is available in req.user
    console.log("userId" , userId);
    try{
        const user = await userModel.findById(userId).select('-password'); // Exclude password
        if(!user){
            return res.status(404).json({
                message: 'User not found'
            });
        }
        return res.status(200).json({
            message: 'User profile fetched successfully',
            user: user
        });
    }
    catch(error){
        return res.status(500).json({
            message: 'Error fetching user profile',
            error: error.message
        });
    }
 }
// Export functions
module.exports = {createUser , login , getAllUsers , updateUserById , deleteUserById, userProfile};