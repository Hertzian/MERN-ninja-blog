const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
dotenv.config()
const connectDb = require('./config/connectDB')

connectDb()

// route mounting
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')

const app = express()
app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
}

// route list
app.use('/api/users', userRoutes)
app.use('/api/blogs', blogRoutes)

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running http://localhost:${PORT} on port: ${PORT}`))
