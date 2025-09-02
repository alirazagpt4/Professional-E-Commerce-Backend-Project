const jwt = require('jsonwebtoken');
const jwtSecret = 'AliRaza12345';

const verifyToken = async (req , res , next) =>{
    console.log("verify called");
    // console.log(token);
    const auth = req.headers['authorization'];
    const token = auth && auth.split(' ')[1];
    
    if(!token){
        return res.status(403).json({message : 'No token provided'});
    }

     jwt.verify(token , jwtSecret , (err , decoded) =>{
        if(err){
            return res.status(401).json({message : 'Unauthorized Access'});
        }
        req.user = decoded;
        next();
    })
};

module.exports = verifyToken;