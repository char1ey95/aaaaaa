require('dotenv').config()
const HttpException = require('./exceptions/HTTPException')

const host = process.env.DB_HOST || 'localhost'
const port = process.env.DB_PORT || '3306'
const user = process.env.DB_USER || 'char1ey'
const password = process.env.DB_PASSWORD || 'Abcd1234!'
const database = process.env.DB_DATABASE || 'workspace'

const config = {
    exception: {
        HttpException,
    },
    port: process.env.PORT || 3000,
    db: {
        host,
        port,
        user,
        password,
        database,
    },

}

module.exports = config