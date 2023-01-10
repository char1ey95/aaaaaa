const config = require('../config')
const mysql = require('../models')
const CommentRepository = require('./comment.repository')
const CommentService = require('./comment.service')
const CommentController = require('./comment.controller')

const repository = new CommentRepository({ mysql })
// repository.findAll().then((data) => console.log(data))

const service = new CommentService({ commentRepository: repository, config })
// service.list().then((data) => console.log(data))

const controller = new CommentController({ commentService: service })
// controller.getList().then((data) => console.log(data))

module.exports = {
    repository,
    service,
    controller,
}