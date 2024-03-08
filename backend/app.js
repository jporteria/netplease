const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./userRouter')
const cors = require('cors')

const URIdb = 'mongodb+srv://wagako:wagako@cluster0.yeyyahe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(URIdb)
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