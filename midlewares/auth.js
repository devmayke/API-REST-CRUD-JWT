const JWT = require("jsonwebtoken");
const JWTSecret = "lhgpGKJhb%!=H";
const UserAPI = require("../models/UserAPI")



module.exports = (req, res, next)=>{
    if(req.path !== "/token"){
        const authToken = req.headers['authorization'];
        if(!authToken){
            res.json({
                msg:"Not authorized",
                linkAuthorization:"http://127.0.0.1:3000/token"
            })
        }
        const token = authToken.split(" ")[1];
        console.log(token)
        JWT.verify(token, JWTSecret, (err, data)=>{
            if(err){
                res.json({
                    msg:"Not authorized"
                })
            }else{
                console.log(data)
                var {email} = data;
                UserAPI.findOne({where:{email:email}})
                .then(()=>{
                    next()
                })
                .catch(()=>{
                    res.json({
                        msg:"Not registered"
                    })
                })
            }
        });    
    }else{
        next()
    }
}