const express = require('express')
const router = express.Router()


router.post('/', (req, res) => {
    res.status(200).json({message: 'Set items'})
})

router.get('/', (req, res) => {
    res.status(200).json({message: 'Get items'})
})
router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update item ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete item ${req.params.id}`})
})

module.exports = router