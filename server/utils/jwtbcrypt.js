const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const generateWebToken = (id) => {
    return jsonwebtoken.sign({ id }, process.env.JWT_TOKEN, {
        expiresIn: '30d'
    })
}

const verifyWebToken = (token) => {
    return jsonwebtoken.verify(token, process.env.JWT_TOKEN)
}

const hashPassword = (token) => {
    return bcrypt.hashSync(token, 10)
}

const comparePassword = (enteredPassword, originalPassword) => {
    return bcrypt.compare(enteredPassword, originalPassword)
}

module.exports = { generateWebToken, verifyWebToken, hashPassword, comparePassword }