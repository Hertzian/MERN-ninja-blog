const User = require('../Models/UserModel')
const asyncHandler = require('../utils/asyncHandler')
const genToken = require('../utils/generateToken')

// @desc    register new user
// @route   POST /api/users/register
// @access  public
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({ name, email, password })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: genToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    get all users
// @route   POST /api/users/register
// @access  private/admin
exports.getUsers = asyncHandler(async(req, res) => {
  const users = await User.find()

  if(!users){
    res.status(400)
    throw new Error('No users are registered')
  }

  res.json(users)
})
