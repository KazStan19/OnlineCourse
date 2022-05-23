const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getUserData, getAllUserData } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')
const roleCheck = require('../middleware/roleMiddleware')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me', protect ,getUserData)
router.get('/all' ,roleCheck(['admin']),getAllUserData)

module.exports = router