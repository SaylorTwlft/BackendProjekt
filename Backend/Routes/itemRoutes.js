const express = require('express')
const router = express.Router()
const {
    getItems,
    setItems,
    updateItems,
    deleteItems,
} = require('../controllers/ItemController')

const { protect } = require('../Middleware/AuthMiddleware')

router.route('/').get(protect, getItems).post(protect, setItems)
router.route('/:id').delete(protect, deleteItems).put(protect, updateItems)

module.exports = router

