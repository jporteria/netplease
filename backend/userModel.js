const mongoose = require('mongoose')
const schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true })

userSchema.pre('save', async function(){
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        
    }catch(err){
        console.log(err)
    }
})

// userSchema.static.signup = async (email, password) => {
//     const exist = await this.findOne({email})

//     if(exist){
//         throw error('email already exist')
//     }

//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(password, salt)
//     const user = await this.create({ email, password: hash })
//     return user
// }

const user = mongoose.model('userinfo', userSchema)

module.exports = user