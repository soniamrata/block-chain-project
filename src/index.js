const express = require('express')
const app = express()
const { default : mongoose } = require('mongoose')
const route = require('./routes/route')
// const multer = require('multer')

app.use(express.json())
// app.use(multer().any())

 mongoose.connect('mongodb+srv://Amrata:Y99l58O8175g88R8@cluster0.xictrjh.mongodb.net/Coin-DB' ,{ useNewUrlParser: true })
.then( () => console.log("MongoDb is connected"))
.catch( (error) => console.log(error.message))

app.use('/',route)

// app.use(function (req, res) {
//     res.status(404).send({ status: false, msg: "Url not found !!!" })  //yha url nhi h isliye next nhi likha
// })

app.listen(process.env.PORT || 3000 , function(){
    console.log("Express app is running on port " + (process.env.PORT || 3000))
})