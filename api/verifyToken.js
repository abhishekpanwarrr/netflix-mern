const jwt = require("jsonwebtoken")


function verify(req, res, next) {
    const authHeader = req.headers.token
    
    if(authHeader) {
        const token = authHeader.split(" ")[1]

        jwt.verify(token,process.env.SECRET_KEY,(err,user) =>{
            if(err) {
                console.log("Error: " + err);
                return res.status(304).json({message:"Invalid token"})
            }
            req.user = user
            next()
        })
    }else{
        res.status(401).json({message:"You are not authorized"})
    }
}
module.exports = verify