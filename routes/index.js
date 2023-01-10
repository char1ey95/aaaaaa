const express = require('express')
const router = express.Router()
const commentRouter = require('../comments/comment.router')

router.use('/comments', commentRouter)

module.exports = router