const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`)
    res.send({ error: error.message })
    next()
}


const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stacktrace: process.env.NODE_ENV === 'prod' ? null : err.stack
    })
}

module.exports = { notFound, errorHandler }