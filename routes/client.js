const Client = require("../models/Client")
const UserAPI = require("../models/UserAPI");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const JWTSecret = "lhgpGKJhb%!=H";


module.exports = {
    postAuth:(req, res)=>{
        let {email, password} = req.body;
        UserAPI.findOne({raw:true,where:{email:email}})
        .then((user)=>{
            let correctPassword = bcrypt.compareSync(password, user.password);
            if(correctPassword){
                JWT.sign({email:email}, JWTSecret, {
                    expiresIn:"1h"
                }, (err, token)=>{
                    if(err){
                        res.status(500).json({
                            msg:"Failed to generate token"
                        })
                    }else{
                        res.status(200).json({                               
                            token:token                        
                        })
                    }
                })                 
                }else{
                    res.json({msg:"Invalid password"})
                    
                }
            })
        
        .catch((err)=>{
            res.json({msg:"The email does not exist"})
        })        
    },

    postRegister:(req, res)=>{
        var {name, email, password} = req.body;
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt)

        UserAPI.findOne({where:{email:email}}).then((user)=>{

            if(user == undefined){
                UserAPI.create({
                    name,
                    email,
                    password: hash
                }).then(()=>{
                    res.json({msg: "Resgistered user"})
                   
                })  
            }else{
                res.json({msg: "The user already exists"})
            }
        })          
    },

    post:async (req, res)=>{       
        var {name, age} = await req.body;        
        await Client.create({
            name,
            age
        }).then(()=>{
            console.log("Created client...");
            res.sendStatus(201)
        }).catch(err=>{
            console.log(">>>>",err);
        });  
    },
    getAll:(req, res)=>{
        Client.findAll().then(success=>{
            res.json(success);            
        })   
    },
    getOne:(req, res)=>{
        var id = req.params.id;       
        Client.findOne({
            where:{
                id:id
            }
        }).then(client=>{
            res.json(client);            
        })   
    },
    delete:(req, res)=>{
        var id = req.params.id;
        Client.destroy({
            where:{
                id:id
            }
        }).then(()=>{
            res.sendStatus(200);
        })
    },
    put:(req, res)=>{
        var id = req.params.id;
        var {name, age} = req.body;    
     
        Client.update({name:name, age:age}, {where:{id:id}}).then(()=>{
            res.sendStatus(201)

        })
    }
};