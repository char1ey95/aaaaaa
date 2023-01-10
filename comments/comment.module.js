const mysql = require('../models')
const repository = require('./comment.repository')(mysql)
const service = require('./comment.service')(repository)
const controller = require('./comment.service')(service)

repository.findAll().then((data) => console.log(data))
service.list().then((data) => console.log(data))