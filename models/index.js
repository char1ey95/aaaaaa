const config = require('../config')
const mysql = require('mysql2')

const pool = mysql.createPool( config.db ).promise()

module.exports = pool