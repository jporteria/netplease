const express = require('express')
const router = express.Router()
const user = require('./userModel')


router.get('/', (req, res) => {
    res.send('myMovieApp is live')
})
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const findEmail = await user.findOne({email: email})
    const findPassword = await user.findOne({password: password, email: email})

    if(findEmail){
        if(findPassword){
            res.status(200).send('ok')
        }else{
            res.status(400).send('wrong password')
        }
    }else{
        res.status(400).send('email does not exist')
    }
})
router.post('/signup', async (req,res) => {
    const {email} = req.body
    const User = new user(req.body)

    const exist = await user.findOne({email: email})
    
    if(!exist){
        User.save()
        res.status(200).send(User)
    }else{
        res.statusMessage = 'email already exist'
        res.status(400).end()
    }

    
    // if(req.body.firstName && req.body.lastName && req.body.email && req.body.password !== ''){



    //     await User.save()
    //     console.log(req.body)
    // }else{
    //     console.log("error")
    // }
})

module.exports = router