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

// admin routes ********************************

// @desc    get all users
// @route   POST /api/users/register
// @access  private/admin
exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find()

  if (!users) {
    res.status(400)
    throw new Error('No users are registered')
  }

  res.json(users)
})

// @desc    update user
// @route   PUT /api/users/:userId
// @access  private/admin
exports.updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.role = req.body.role || user.role

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    update user
// @route   DELETE /api/users/:userId
// @access  private/admin
exports.deleteUsers = asyncHandler(async(req, res) => {
  const user = await User.findById(req.params.userId)

  if(user) {
    await user.remove()
    res.json({message: 'User removed'})
  }else{
    res.status(404)
    throw new Error('User not found')
  }
})