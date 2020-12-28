const jwt = require('jsonwebtoken')
const asyncHandler = require('./asyncHandler')
const User = require('../Models/UserModel')

const protect = asyncHandler(async(req, res, next) => {
  let token
  // console.log(req.headers.authorization)

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // console.log(decoded.userId)

      req.user = await User.findById(decoded.userId).select('-password')
      // console.log(req.user)

      next()
    } catch (err ) {
      console.log(err)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if(!token){
    res.status(401)
    throw new Error('Not authorized, token failed')
  }
})

const isAdmin = (req, res, next) => {
  // console.log('*****************el console log*****************', req.user)

  if(req.user && req.user.role === 'admin') {
    next()
  }else{
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}

module.exports = {
  protect, isAdmin
}