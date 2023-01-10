require("dotenv").config()
const mysql = require('mysql2')

const host = process.env.DB_HOST || 'localhost'
const port = process.env.DB_PORT || '3306'
const user = process.env.DB_USER || 'char1ey'
const password = process.env.DB_PASSWORD || 'Abcd1234!'
const database = process.env.DB_DATABASE || 'workspace'

const pool = mysql.createPool({
    host,
    port,
    user,
    password,
    database,
}).promise()

module.exports = pool