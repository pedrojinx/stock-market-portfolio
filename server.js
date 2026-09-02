const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors);

require("dotenv").config();

app.listen(process.env.PORT, function(err) {
    if(err) console.log("Error in server setup");
    console.log("Server listening on Port from " + process.env.PORT);
})