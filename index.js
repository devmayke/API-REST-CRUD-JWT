const express= require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const connection = require("./models/database");
const client = require("./routes/routes");
const cors = require("cors");
const UserAPI = require("./models/UserAPI");
const auth = require("./midlewares/auth")


app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



connection.authenticate()
.then(()=>{
    console.log("Connected database...")
}).catch(err=>{
    console.log(err)
});





app.use("/", auth, client);




app.listen(PORT, ()=>{
    console.log("Running server...")
});