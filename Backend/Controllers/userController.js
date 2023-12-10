const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')

// @desc    Register new user
// @route   POST /api/users
// @acces   Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Puste pola!')
    }

    const userExits = await User.findOne({ email })

    if (userExits) {
        res.status(400)
        throw new Error('Email w użyciu!')
    }

    // Password hashing
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Błędne dane!');
    }

    res.json({ message: 'Zarejestrowano użytkownika' })
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @acces   Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Błędne dane!')
    }



    res.json({ message: 'Login User!' })
})

// @desc    Get user data
// @route   GET /api/users/me
// @acces   Private
const getUserData = asyncHandler(async (req, res) => {

    res.status(200).json(req.user)
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = {
    registerUser,
    loginUser,
    getUserData
}