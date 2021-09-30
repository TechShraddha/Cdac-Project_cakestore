//SOC
const express = require('express');
var path=require('path');
var cors=require('cors');
var app = express();
app.use(cors());

//configure Express Middleware
//HTTP middlware configuration
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(request, response){
    response.sendFile("index.html");
});

//Router configuration
var routes=require("./router");
routes(app);  // going invoke module Router from router.js



//Listen Mode
app.listen(9796);
console.log("Express CakeStore App is liestening on port 9796");