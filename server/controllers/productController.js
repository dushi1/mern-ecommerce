const Product = require('../models/productsModel')
const asynchandler = require('express-async-handler')

const getProducts = asynchandler(async (req, res) => {
    const data = await Product.find({})
    res.json(data)
})

const getProductsById = asynchandler(async (req, res) => {
    const data = await Product.findById(req.params.id)
    if (data) {
        res.json(data)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

module.exports = { getProducts, getProductsById }