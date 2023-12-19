const express = require('express')
const { getBlogs, createBlog, getBlogById, updateOwnerBlog, deleteBlog, getBlogsByUserId } = require('../controllers/blogsController')
const router = express.Router()
const { protect } = require('../utils/protectRoutes')

router.get('/', getBlogs)
router.post('/', protect, createBlog)
router.get('/:blogId', getBlogById)
router.put('/:blogId', protect, updateOwnerBlog)
router.delete('/:blogId', protect, deleteBlog)
router.get('/users/:userId', protect, getBlogsByUserId)

module.exports = router
