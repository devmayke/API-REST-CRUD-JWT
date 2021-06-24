const fetch = require("node-fetch");



let getToken = async function(){
    let response= await fetch("http://127.0.0.1:6000/auth",{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name:"eu mesmo",
                age: "32",
                email:"Mayke",
                password: "12345"
            })
        })
    
    let data = await response.json();
    console.log(data)

}

// getToken()

let listar= async function(url){
    let response= await fetch(url, {
            method:"GET",
            headers: { 
               "Content-Type": 'application/json',
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik1heWtlIiwiaWF0IjoxNjI0NTY5NzU0LCJleHAiOjE2MjQ1NzMzNTR9.5LweyU27WLyduKVePRdlNxe7lZ2fyoB3C6M6_C3_THA"
            },
            body: JSON.stringify({
                name:"eu mesmo",
                age: "32",
                // email:"Mayke",
                // password: "12345"
            })
    });
    let data = await response.json();
    console.log(data)

}
listar("http://127.0.0.1:6000/client")


