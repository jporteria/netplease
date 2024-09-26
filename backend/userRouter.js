const express = require('express')
const router = express.Router()
const user = require('./userModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const connectToDatabase = require('./db')
require('dotenv').config()

const SECRET = process.env.JWT_SECRET

router.get('/', (req, res) => {
    res.send('myMovieApp is live')
})
router.post('/login', async (req, res) => {
    const { email, password } = req.body

    const db = await connectToDatabase();
    const collection = db.collection("users");

    const loginUser = await collection.findOne({email: email})

    if(loginUser){
        let result = await bcryptjs.compare(req.body.password, loginUser.password)

        if(!result){
            return res.status(404).json({ error: 'Wrong pasword' });
        }
        let payload = {
            user: {
                id: loginUser._id.toString(),
            },
        };

        // const userName = loginUser.firstName;
        // const userEmail = loginUser.email;

        const authtoken = jwt.sign(payload, SECRET, {expiresIn: '1h'});
        const firstName = loginUser.firstName
        const lastName = loginUser.lastName
        console.log('successfully logged in')
        return res.status(200).json({ authtoken, firstName, lastName });

    }else{
        res.status(400).json({ error: 'Email does not exist' });
    }
})
router.post('/signup', async (req,res) => {
    try{
        const {email} = req.body

        const db = await connectToDatabase();
        const collection = db.collection("users");

        const existingEmail = await collection.findOne({ email: req.body.email });
        
        if(existingEmail){
            return res.status(400).json({ error: 'Email already exists' });
        }

        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(req.body.password, salt);
        const newUser = await collection.insertOne({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hash
        });

        const payload = {
            user: {
                id: newUser.insertedId,
            },
        };

        const authtoken = jwt.sign(payload, SECRET, {expiresIn: '1h'});
        console.log('new user added')
        return res.json({ authtoken,email});
    } catch (e) {
        console.log(e)
        return res.status(500).send('Internal server error');
    }
})

module.exports = router