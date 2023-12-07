const asyncHandler = require('express-async-handler')

// @desc    Get Items
// @route   GET /api/items
// @access  Private
const getItems = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get item' })
})

// @desc    Set Items
// @route   POST /api/items
// @access  Private
const setItems = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('No text field in request body!')
    }

    res.status(200).json({ message: 'Set items' })
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