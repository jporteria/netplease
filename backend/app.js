const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./userRouter')
const cors = require('cors')
require('dotenv').config()
const connectToDatabase = require('./db')

connectToDatabase()
    .then(result => {
        app.listen(5000, () => {
            console.log('listening on port 5000')
        })
    })
    .catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(router)