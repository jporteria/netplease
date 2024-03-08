const express = require('express')
const router = express.Router()
const user = require('./userModel')


router.get('/login', (req, res) => {
    res.send('succesfully login')
})
router.post('/signup', async (req,res) => {
    const {email} = req.body
    const User = new user(req.body)
    try{
        User.save()
        .then(() => res.status(200))        
    }catch(err){
        res.status(400).json(err)
    }
    // const exist = await user.findOne({email: email})
    // if(exist){
    //     console.log('email already taken')
    // }else{
    //     User.save()
    // }

    
    // if(req.body.firstName && req.body.lastName && req.body.email && req.body.password !== ''){



    //     await User.save()
    //     console.log(req.body)
    // }else{
    //     console.log("error")
    // }
})

module.exports = router