const userModel = require('../models/user.model');

// Create a new user 

const createUser = async (req , res) =>{
    const { name , email , password , role} = req.body;
    try {
        const newUser = await userModel.create({
            name,
            email,
            password,
            role
        });

        if(!newUser) {
            return res.status(400).json({
                message: 'User creation failed'
            });
        }



        return res.status(201).json({
            message: 'User created successfully',
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


const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await userModel.findById(id);
        if(!user){
            return res.status(404).json({
                message: 'User not found'
            });
        }
        return res.status(200).json({
            message: 'User fetched successfully',
            user: user
        })
    }
    catch(error){
        return res.status(500).json({
            message: 'Error fetching user',
            error: error.message
        });
    }
}


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



// Export functions
module.exports = {createUser , getAllUsers , getUserById , updateUserById , deleteUserById};