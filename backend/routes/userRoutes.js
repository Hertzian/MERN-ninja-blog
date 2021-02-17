const express = require('express')
const usersController = require('../controllers/usersController')
const router = express.Router()
const { protect, isAdmin } = require('../utils/protectRoutes')

// general routes
router.post('/register', usersController.register)
router.post('/login', usersController.login)

router.get('/profile', protect, usersController.getUserProfile)
router.put('/profile', protect, usersController.updateUserProfile)

// admin routes
router.get('/', protect, isAdmin, usersController.getUsers)
router.get('/:userId',protect, isAdmin, usersController.getUserById)
router.put('/:userId',protect, isAdmin, usersController.updateUser)
router.delete('/:userId',protect, isAdmin, usersController.deleteUsers)

module.exports = router
