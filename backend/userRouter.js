const express = require('express')
const router = express.Router()
const user = require('./userModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const connectToDatabase = require('./db')

const JWT_SECRET = 'HELLO'

router.get('/', (req, res) => {
    res.send('myMovieApp is live')
})
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const findEmail = await user.findOne({email: email})
    const findPassword = await user.findOne({password: password, email: email})
    // const findFirstname = await user.findOne({email: email}, (error, data))
    

    if(findEmail){
        if(findPassword){
            res.status(200).send(findEmail)
        }else{
            res.status(400).send('Incorrect Password')
        }
    }else{
        res.status(400).send('Email does not exist')
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

        const authtoken = jwt.sign(payload, JWT_SECRET, {expiresIn: '1h'});
        console.log('new user added')
        return res.json({ authtoken,email});
    } catch (e) {
        console.log(e)
        return res.status(500).send('Internal server error');
    }


    // if(!exist){
    //     User.save()
    //     res.status(200).send(User)
    // }else{
    //     res.statusMessage = 'Email already exist'
    //     res.status(400).end()
    // }

    
    // if(req.body.firstName && req.body.lastName && req.body.email && req.body.password !== ''){



    //     await User.save()
    //     console.log(req.body)
    // }else{
    //     console.log("error")
    // }
})

module.exports = router