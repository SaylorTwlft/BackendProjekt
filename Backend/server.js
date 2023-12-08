const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./Middleware/ErrorMiddleware')
const { connectDB } = require('./Config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/items', require('./Routes/itemRoutes'))
app.use('/api/users', require('./Routes/userRoutes'))
app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))


