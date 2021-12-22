const express = require('express')
const router = express.Router()
const blogController = require('./../controller/blogController')

router.route('/')
.get(blogController.findAllBlog)
.post(blogController.createBlog)

router.route('/:id')
.get(blogController.findABlog)
.put(blogController.replaceBlog)


module.exports = router