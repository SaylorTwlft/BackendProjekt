const express = require('express')
const router = express.Router()
const {
    getItems,
    setItems,
    updateItems,
    deleteItems,
} = require('../controllers/ItemController')

router.route('/').get(getItems).post(setItems)
router.route('/:id').delete(deleteItems).put(updateItems)

module.exports = router

