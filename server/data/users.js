const bcrypt = require('bcryptjs')

const users = [
    {

        name: 'Admin User',
        email: 'admin@test.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {

        name: 'Dj',
        email: 'dj@test.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {

        name: 'DjDj',
        email: 'djdj@test.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

module.exports = users
