const mongoose = require('mongoose')
const schema = mongoose.Schema
// const bcrypt = require('bcrypt')

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

// userSchema.pre('save', async function(){
//     try{
//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(this.password, salt)
//         this.password = hashedPassword
        
//     }catch(err){
//         console.log(err)
//     }
// })

const user = mongoose.model('userinfo', userSchema)

module.exports = user