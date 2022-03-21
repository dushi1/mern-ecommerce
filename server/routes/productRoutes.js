const express = require('express')
const router = express.Router()
const Product = require('../models/productsModel')
const asynchandler = require('express-async-handler')
const { getProducts, getProductsById } = require('../controllers/productController')
//@desc     Fetch all products
//@route    /api/products route
//@access   Public


router.get('/', getProducts)


//@desc     Fetch single products
//@route    /api/products/id route
//@access   Public


router.get('/:id', getProductsById)

module.exports = router