const User = require('../Models/UserModel')
const asyncHandler = require('../utils/asyncHandler')

// @desc    register new user
// @route   POST /api/users/register
// @access  public
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({email})

  if(userExists){
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({name, email,password})
  
})
