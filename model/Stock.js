const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
    company:{
        type:  String,
        required: true
    },
    description:{
        type:  String,
        required: true
    },
    intital_price: {
        type: Number,
        required: true
    },
    price_2002: {
        type: Number,
        required: true
    },
    price_2007: {
        type: Number,
        required: true
    },
    symbol:{
        type:  String,
        required: true
    }

}, {timestamps: true});



module.exports = mongoose.model("Stock",stockSchema);

