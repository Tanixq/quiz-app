//importing modules
require('dotenv').config()
const express = require("express")
const app = express()
const ejs = require("ejs")
const mongoose = require("mongoose")
const expressEjsLayouts = require("express-ejs-layouts")
const config = require("./config/config")
const homeRoutes = require('./routes/homeRoutes')


// db connection 
mongoose.connect(config.MONGO_URL, { useNewUrlParser: true,  useUnifiedTopology: true }, (err) => {
    if (!err) {
        console.log("DB connected successfully")
    }else{
        console.log("Problem with connecting DB")
    }
})

//setting templating engine to ejs
app.set("view engine", 'ejs')
app.use(expressEjsLayouts)

//importing routes
app.use('/', homeRoutes)

//app listening
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})