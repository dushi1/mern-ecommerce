const dotenv = require('dotenv')
const express = require('express')
const app = express()
const path = require('path')
dotenv.config()
const PORT = process.env.PORTSERVER || 5000
const mongoose = require('mongoose')
const { errorHandler, notFound } = require('./middleware/errorMiddleware')
const productRoute = require('./routes/productRoutes')
const userRoute = require('./routes/userRoutes')

app.use(express.json())

// app.use(express.static(path.join(__dirname, '../', 'build')))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../', 'build', 'index.html'))
// })

app.use('/api/user', userRoute)
app.use('/api/product', productRoute)

app.use(notFound)

app.use(errorHandler)

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(resp => {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`)
    })
}).catch(er => {
    console.log(er);
})
