const express = require("express");
const mongoose = require("mongoose");
//cors is allowed the frontend to read data fromt the server
const cors = require("cors");

const app = express();
app.use(cors);

//for env
require("dotenv").config();

//current ip address added in mongodb
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

//connect mongodb
const Url = "mongodb+srv://storemarket:password1234@cluster0.uqzzfba.mongodb.net/?appName=Cluster0";
mongoose
.connect(Url)
.then(()=> {
console.log("mongo db connected");
app.listen(process.env.PORT, function(err) {
    if(err) console.log("Error in server setup");
    console.log("Server listening on Port from " + process.env.PORT);
})

});


