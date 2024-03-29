const express = require('express')
const router = express.Router()
const {
    registerUser,
    loginUser,
    getUserData,
} = require('../Controllers/userController')
const { protect } = require('../Middleware/AuthMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getUserData)

module.exports = router