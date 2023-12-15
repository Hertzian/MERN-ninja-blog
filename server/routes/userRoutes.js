const express = require('express')
const { register, login, getUserProfile, updateUserProfile, getUsers, getUserById, updateUser, deleteUsers } = require('../controllers/usersController')
const { getBlogsByUserId } = require('../controllers/blogsController')
const router = express.Router()
const { protect, isAdmin } = require('../utils/protectRoutes')

// general routes
router.post('/register', register)
router.post('/login', login)

router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile)

// admin routes
router.get('/', protect, isAdmin, getUsers)
router.get('/:userId', protect, isAdmin, getUserById)
router.put('/:userId', protect, isAdmin, updateUser)
router.delete('/:userId', protect, isAdmin, deleteUsers)

router.get('/:userId/blogs', getBlogsByUserId)

module.exports = router
