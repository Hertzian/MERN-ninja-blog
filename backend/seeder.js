const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config()
const connectDb = require('./config/connectDB')

// load models
const User = require('./Models/UserModel')
const Blog = require('./Models/BlogModel')

// connect to db
connectDb()

// read json files
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/config/_dummyData/author.json`, 'utf-8')
)
const blogs = JSON.parse(
  fs.readFileSync(`${__dirname}/config/_dummyData/blog.json`, 'utf-8')
)

// import to db
const importData = async () => {
  try {
    await User.create(users)
    await Blog.create(blogs)

    console.log('Data imported')
    process.exit()
  } catch (err) {
    console.log(err)
  }
}

// delete from db
const deleteData = async () => {
  try {
    await User.deleteMany()
    await Blog.deleteMany()

    console.log('Data destroyed')
    process.exit()
  } catch (err) {}
}

// pasing args by console
if (process.argv[2] === '-i') importData()
if (process.argv[2] === '-d') deleteData()
