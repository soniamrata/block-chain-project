const express = require('express')
const router= express.Router()
const coinController = require("../controllers/coinController.js")


router.get("/criptoCoin",coinController.getCryptoCurrency )


//Your key: 293dbc69-4c12-493c-968f-662e4b612111
//Expires on 12/7/2033




module.exports = router