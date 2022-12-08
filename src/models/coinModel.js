const { default: mongoose } = require("mongoose");


const CoinSchema = new mongoose.Schema({
    symbol: {
        type: String,
        unique: true
    },                                
    name: {
        type: String,
        unique: true
    },                               
    marketCapUsd: {
        type: String
    },                               
    priceUsd: {
        type: String
    }                               

}, 

)

module.exports = mongoose.model("coin", CoinSchema)
