const dotenv = require('dotenv')
const express = require('express')
dotenv.config()
const connectDb = require('./config/connectDb')

connectDb()

// route mounting
const userRoutes = require('./routes/userRoutes')

const app = express()
app.use(express.json())

// route list
app.use('/api/users', userRoutes)

const PORT = process.env.PORT

console.log(PORT)

app.listen(PORT, console.log(`Server running on port: ${PORT}`))