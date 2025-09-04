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

Day 5 : Create a Model for products and also create it schema to perfectly manage their
        document structure.
        what is a model in Mongoose? - Model in mongoose act as a high-level abstraction and Interface for interacting with your mongo db database.
        Purpose of Model in Mongo Db: 
           . Data Interaction: it provides methods for performing CRUD operations
                               on your mongo db collection.
           . Data Validation : it enforces the schema's validation rules , ensuring 
                               data integrity.
           . Convenience :     it simplifies interaction with mongo db by providing
                               a more object - oriented approach compared to directly 
                               using mongo db drivers.
           . Abstarction :     it hides the underlying complexities of your database,
                               allowing you to simply focus on your application logic.



Day 6:  Create Product creation APIs to create products in database.
        Multer is a node js middleware for handling multipart / form data, which is used
        for uploading files.
        diskStorage in multer defines where the file was stored and what is its name
        it contains destination : fn(req , file , cb) and filename : fn(req , file , cb)
          where cb is a callback function 

Day 7: Product Crud Apis and SIgn up Api using bcrypt package.
       using hashpasswords to store encrpted passwords.
       req.params.id is used to access a dynamic value extracted from url path on a defined route.
       bcrypt is a password hashing library. it converts text-plain password to irreversible hash to tore safe password in database.
       its algorithm is based on bluefish cipher.
Day 8: Login Api with jwt (jsonwebtokens).  JWT is secure , self-contained digital token
       that carries information called claims between two parties,typically a server and a client. They are used in Authentication and authorization.
Day 9 and 10 : Applied OTP and Nodemailer to send email and reset your passwords

Day 11 : Applied Pagination to products through skip and limit in mongo db 
         page = 3
         limit = 10
         skip = (page - 1) * limit this is calculation to get desired search and also use query params in api to get the desired results 

Day 12 : Filtering on products (category , price) applied in the app.
         Filtering means select data on the basis of some conditions.
         for example ypu can filter on the basis of category , maxPrice and minimum price in products. so you get filter products accroding to your range price.

Day 13 : Sorting on products (price , createdAt) applied in the app.
         Sorting means Arrange data in specific order ( large to small or small to large)
         for example you can sort data by descending order like higher price to lower price.
         Products will be sorted on highest price.

         
         
       

 

