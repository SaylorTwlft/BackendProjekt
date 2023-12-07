//@desc get items
//@route GET /api/items
//@access Private
const getItems = (req, res) => {
    res.status(200).json({ message: 'Get items'})
}

//@desc set items
//@route POST /api/items
//@access Private
const setItems = (req, res) => {
    res.status(200).json({message: 'Set items'})
}

//@desc UPDATE items
//@route GET /api/items/:id
//@access Private
const updateItems = (req, res) => {
    res.status(200).json({message: `Update item ${req.params.id}`})
}

//@desc delete items
//@route DELETE /api/items/:id
//@access Private
const deleteItems = (req, res) => {
    res.status(200).json({message: `Delete item ${req.params.id}`})
}

module.exports = {
    getItems,
    setItems,
    updateItems,
    deleteItems,
}