const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

// userSchema.methods.matchPassword=async(password)=>{
//     return await bcrypt.compare(password,this.password)
// }

const User = mongoose.model('User', userSchema)

module.exports = User