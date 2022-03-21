const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')


const protect = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
        try {
            const decoded = jwt.verify(token, process.env.JWT_TOKEN)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        }
        catch (err) {
            res.status(401)
            throw new Error('Not auth. Token expired')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not auth. Get lost')
    }
})

module.exports = { protect }