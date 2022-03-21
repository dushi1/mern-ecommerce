const mongoose = require('mongoose')
const dotenv = require('dotenv')
const users = require('./data/users')
const products = require('./data/products')
const User = require('./models/userModel')
const Product = require('./models/productsModel')
const Order = require('./models/orderModel')

dotenv.config()

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },).then(resp => {
    console.log('Connected in seeder');

})

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUser = await User.insertMany(users)

        const adminUser = createdUser[0]._id

        const sampleProducts = products.map(data => {
            return { ...data, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported');
        process.exit(1)

    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}


const deleteData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Deleted');
        process.exit(1)

    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}
if (process.argv[2] === '-d') {
    deleteData()
} else {
    importData()
}