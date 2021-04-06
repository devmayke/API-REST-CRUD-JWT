const Client = require("../models/Client")
const UserAPI = require("../models/UserAPI");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const JWTSecret = "lhgpGKJhb%!=H";


module.exports = {

    postToken:(req, res)=>{
        var {name, email, password} = req.body;

        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(email, salt)

        UserAPI.create({
            name,
            email,
            password: hash
        }).then(()=>{
            JWT.sign({email:email}, JWTSecret, {
                expiresIn:"60s"
            }, (err, token)=>{
                if(err){
                    res.status(500).json({
                        msg:"Failed to generate token"
                    })
                }else{
                    res.status(200).json({
                        msg:"Registered user",
                        token:token                        
                    })
                }
            })
        })    
    },

    post:async (req, res)=>{       
        var {name, age} = await req.body;        
        await Client.create({
            name,
            age
        }).then(()=>{
            console.log("Created client...");
            res.sendStatus(200)
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
            res.sendStatus(200)

        })
    }
};