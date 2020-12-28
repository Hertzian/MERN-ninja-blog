const express = require('express')
const usersController = require('../controllers/usersController')
const router = express.Router()

router.get('/', usersController.getUsers)
router.put('/:userId', usersController.updateUser)
router.delete('/:userId', usersController.deleteUsers)
router.post('/register', usersController.register)

module.exports = router