const asyncHandler = require('express-async-handler')

const Item = require('../models/ItemModel')
const User = require('../models/UserModel')

// @desc    Get Items
// @route   GET /api/items
// @access  Private
const getItems = asyncHandler(async (req, res) => {
    const items = await Item.find({ user: req.user.id })

    res.status(200).json(items)
})

// @desc    Set Items
// @route   POST /api/items
// @access  Private
const setItems = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Pusta nazwa prezentu!')
    }

    const item = await Item.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(item)
})

// @desc    Update Items
// @route   PUT /api/items/:id
// @access  Private
const updateItems = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)

    if (!item) {
        res.status(400)
        throw new Error('Nie znaleziono prezentu')
    }
    if (!req.user) {
        res.status(401)
        throw new Error('Nie znaleziono użytkownika')
    }

    if (item.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Brak uprawnień')
    }

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedItem)
})

// @desc    Delete Items
// @route   DELETE /api/items/:id
// @access  Private
const deleteItems = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)

    if (!item) {
        res.status(400)
        throw new Error('Nie znaleziono prezentu')
    }

    if (!req.user) {
        res.status(401)
        throw new Error('Nie znaleziono użytkownika')
    }

    if (item.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Brak uprawnień')
    }

    await item.deleteOne()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getItems,
    setItems,
    updateItems,
    deleteItems,
}