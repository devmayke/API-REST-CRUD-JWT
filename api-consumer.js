const fetch = require("node-fetch");



let getToken = async function(){
    let response= await fetch("http://127.0.0.1:3000/token",{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                name:"eu mesmo",
                email:"incognator",
                passowrd: "12345"
            })
        })
    
    let data = await response.json();
    console.log(data)

}

// getToken()

let listar= async function(url){
    let response= await fetch(url, {
            headers: { 
               "Content-Type": 'application/json',
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluY29nbmF0b3IiLCJpYXQiOjE2MTc3NDI3MjQsImV4cCI6MTYxNzc0NjMyNH0.CpEvoSjVbqBHEm8fK-MM_ul9z1_wp0DxPj5s5QhAXzo"
            }
    });
    let data = await response.json();
    console.log(data)

}
// listar("http://127.0.0.1:3000/clients")


