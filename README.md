# Professional-E-Commerce-Backend-Project

progress is progress no matter how small.

first clone the repo
then install packages with the  help of  npm 
Express - Mongoose - dotenv - morgan - jsonwebtoken - cors 

Day 1 - Setup Project and install dependencies and create MVC folder structure for 
        Professional E-Commerce Project via (Controllers / Config / Models / Routes).

Day 2 - Connecting Mongo db with the project and also use mongoose package and dotenv
        to configure it. also hit the /api end point check it works or not 

Day 3 - Create User Model (name , email , password , role) and learning about schema
        . Schema in mongo db or mongoose defines the structure of a document within a 
          mongo db Collection. it specfies fields their data types and optional rules.

Day 4 -  User CRUD APIS - Create user , read users and single user by id  , update user 
          and delete user. try - catch : purpose to catch error and handle app effciently from crashing and prevent blockage of syncronous code.
          use of app.use : handling middlewares and functionalites like 
          authentication and parsing.
          => Create Controllers and routes for users to handle organised code.
           // User Crud apis
           // Route to create a new user
                 router.post('/create' , userController.createUser);
           // Route to get all users
                 router.get('/' , userController.getAllUsers);
           // Route to get a user by ID
                 router.get('/:id' , userController.getUserById);
           // Route to update a user by ID
                 router.put('/:id' , userController.updateUserById);    
           // Route to delete a user by ID
                 router.delete('/:id' , userController.deleteUserById);


 

