const express = require('express')
const blogsController = require('../controllers/blogsController')
const router = express.Router()
const { protect } = require('../utils/protectRoutes')

router.get('/', blogsController.getBlogs)
router.post('/', protect, blogsController.createBlog)
router.get('/:blogId', blogsController.getBlogById)
router.put('/:blogId', protect, blogsController.updateOwnerBlog)
router.delete('/:blogId', protect, blogsController.deleteBlog)

module.exports = router
