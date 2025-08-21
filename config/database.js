const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
            await mongoose.connect(process.env.MONGO_URI).then(()=>{
                console.log('Database connected successfully');
            }).catch((err) => {
                console.error('Database connection error:', err);
                process.exit(1); // Exit the process with failure
            });
    }
    catch(err){
        console.error('Database connection error:', err);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDB
