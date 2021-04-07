const JWT = require("jsonwebtoken");
const JWTSecret = "lhgpGKJhb%!=H";
const UserAPI = require("../models/UserAPI")



module.exports = (req, res, next)=>{
    if(req.path !== "/auth" && req.path !== "/register"){
        const authToken = req.headers['authorization'];
        if(!authToken){
            res.status(401).json({
                msg:"NOT AUTHORIZED!",
                miniDocAPI:{
                    InfoRegister:{
                        linkAuthorization:"http://127.0.0.1:3000/register",
                        formatRegister:{
                            name: "xxxxxxxxxxx",
                            email: "xxxxxxxxxx",
                            password: "xxxxxxx"
                        }
                    },
                    InfoAuth:{
                        linkAuth:"http://127.0.0.1:3000/auth",
                        formatAuth:{
                            email: "xxxxxxxxxx",
                            password: "xxxxxxx"
                        }
                    }
                }
            })
        }
        const token = authToken.split(" ")[1];   
        JWT.verify(token, JWTSecret, (err, data)=>{
            if(err){
                res.status(401).json({
                    msg:"NOT AUTHORIZED!",
                    miniDocAPI:{
                        InfoRegister:{
                            linkAuthorization:"http://127.0.0.1:3000/register",
                            formatRegister:{
                                name: "xxxxxxxxxxx",
                                email: "xxxxxxxxxx",
                                password: "xxxxxxx"
                            }
                        },
                        InfoAuth:{
                            linkAuth:"http://127.0.0.1:3000/auth",
                            formatAuth:{
                                email: "xxxxxxxxxx",
                                password: "xxxxxxx"
                            }
                        }
                    }
                })
            }else{
                console.log(data)
                var {email} = data;
                UserAPI.findOne({where:{email:email}})
                then(()=>{
                    next()
                })
                .catch(()=>{
                    res.status(404).json({
                        msg:"Not registered"
                    })
                })
            }
        });    
    }else{
        next()
    }
}