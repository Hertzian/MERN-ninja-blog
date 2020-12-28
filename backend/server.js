const dotenv = require('dotenv')
const express = require('express')
dotenv.config()
const connectDb = require('./config/connectDb')

connectDb()

// route mounting

const app = express()
app.use(express.json())

// route list

const PORT = process.env.PORT

console.log(PORT)

app.listen(PORT, console.log(`Server running on port: ${PORT}`))