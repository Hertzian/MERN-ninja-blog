const express = require('express')
const usersController = require('../controllers/usersController')
const router = express.Router()

router.get('/', usersController.getUsers)
router.post('/register', usersController.register)

module.exports = router