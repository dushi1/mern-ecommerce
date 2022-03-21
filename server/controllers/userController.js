const User = require('../models/userModel')
const asynchandler = require('express-async-handler')
const { generateWebToken, hashPassword, comparePassword } = require('../utils/jwtbcrypt')
const { ReasonPhrases, StatusCodes } = require('http-status-codes')
const { body, validationResult } = require('express-validator')

const registerValidation = [
    body('name').not().isEmpty().withMessage('Please enter a name'),
    body('email').not().isEmpty().withMessage('Please enter an email')
        .isEmail().withMessage('Please enter a valid email'),
    body('password').not().isEmpty().withMessage('Please enter a valid password'),
]
const userRegisterController = asynchandler(async (req, res) => {
    const error = validationResult(req)
    const { name, email, password } = req.body

    if (!error.isEmpty()) {
        return res.status(422).json({
            message: 'Errors',
            errors: error.mapped()
        })
    } else {

        const emailExist = await User.findOne({ email })

        if (emailExist) {
            return res.status(404).json({
                message: 'Email already exist',
                errors: {
                    email: {
                        msg: "Email already exist"
                    }
                }
            })
        }

        const user = await User.create({
            name: name,
            email: email,
            password: hashPassword(password)
        })

        if (user) {
            res.status(200).json({
                status: ReasonPhrases.OK,
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateWebToken(user._id),
                isAdmin: user.isAdmin
            })
        }
        else {
            res.status(StatusCodes.NOT_FOUND)
            throw new Error('Invalid user data')
        }

    }
}
)


const userValidation = [
    body('email').not().isEmpty().withMessage('Please enter an email')
        .isEmail().withMessage('Please enter a valid email'),
    body('password').not().isEmpty().withMessage('Please enter a valid password'),
]


const userController = asynchandler(async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(422).json({
            message: 'Please enter a valid input',
            errors: error.mapped()
        })
    } else {
        const data = await User.findOne({ email: req.body.email })
        if (data && (await comparePassword(req.body.password, data.password))) {
            res.status(StatusCodes.OK).json({
                status: ReasonPhrases.OK,
                _id: data._id,
                name: data.name,
                email: data.email,
                token: generateWebToken(data._id),
                isAdmin: data.isAdmin
            })
        } else {
            res.status(StatusCodes.UNAUTHORIZED).send({
                message: "Invalid email or password",
                status: ReasonPhrases.UNAUTHORIZED
            })
        }
    }
})





const userProfileController = asynchandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateWebToken(user._id),
            isAdmin: user.isAdmin
        })
    } else {
        res.status(401)
        throw new Error('User not found')
    }
})


const userProfileUpdateController = asynchandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = req.body.password
        }
        const newUser = await user.save()
        res.json({
            status: ReasonPhrases.OK,
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            token: generateWebToken(newUser._id),
            isAdmin: newUser.isAdmin
        })
    } else {
        res.status(401)
        throw new Error('User not found')
    }
})

module.exports = {
    userController, userProfileController,
    userRegisterController, userProfileUpdateController,
    registerValidation, userValidation
}