const express = require('express')
const router = express.Router()
const { userController, userProfileController,
    userRegisterController, userProfileUpdateController,
    userValidation, registerValidation } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

//@desc     Fetch all products
//@route    /api/products route
//@access   Public

router.post('/register', registerValidation, userRegisterController)

router.post('/login', userValidation, userController)

router.route('/profile').get(protect, userProfileController).put(protect, userProfileUpdateController)


//@desc     Fetch single products
//@route    /api/products/id route
//@access   Public


// router.get('/:id', getProductsById)

module.exports = router