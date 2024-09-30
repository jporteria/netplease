const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./userRouter')
const cors = require('cors')
require('dotenv').config()
const connectToDatabase = require('./db')

const port = process.env.PORT
connectToDatabase()
    .then(result => {
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })
    .catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(router)