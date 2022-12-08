const axios=require("axios")
const coinModel = require("../Models/coinModel.js")
// const { findOneAndUpdate } = require("../Models/coinModel");


let getCryptoCurrency = async function (req, res) {

    try {
        let options = {
            method: "get",
            url: "https://api.coincap.io/v2/assets",
            // headers: { Authorization: "28c9d2a2-4fbc-47ad-a27d-7b589133ca48" }
        }
        const result = await axios(options)
        await coinModel.deleteMany()
        let data = result.data.data  //result obect se data 
        const value = await coinModel.create(data)
     let sortedCoins = data.sort((a, b) => b['changePercent24Hr'] - a['changePercent24Hr'])
      
        return res.status(200).send({ status: true, data: sortedCoins })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}


module.exports = { getCryptoCurrency }