const express = require('express')
const router = express.Router()
const {getItems, setItems, updateItems, deleteItems} = require('../controllers/itemController')

router.route('/').get(getItems).post(setItems)

router.route('/:id').put(updateItems).delete(deleteItems)

module.exports = router