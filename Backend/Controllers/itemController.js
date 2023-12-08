const asyncHandler = require('express-async-handler')

const Item = require('../models/ItemModel')

// @desc    Get Items
// @route   GET /api/items
// @access  Private
const getItems = asyncHandler(async (req, res) => {
    const items = await Item.find()

    res.status(200).json(items)
})

// @desc    Set Items
// @route   POST /api/items
// @access  Private
const setItems = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('No text field in request body!')
    }

    const item = await Item.create({
        text: req.body.text
    })

    res.status(200).json(item)
})

// @desc    Update Items
// @route   PUT /api/items/:id
// @access  Private
const updateItems = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update item ${req.params.id}` })
})

// @desc    Delete Items
// @route   DELETE /api/items/:id
// @access  Private
const deleteItems = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete item ${req.params.id}` })
})

module.exports = {
    getItems,
    setItems,
    updateItems,
    deleteItems,
}