const Blog = require('../Models/BlogModel')
const asyncHandler = require('../utils/asyncHandler')

// @desc    get all blogs
// @route   GET /api/users/blogs
// @access  public
exports.getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find().populate('author')

  if (blogs) {
    res.json(blogs)
  } else {
    res.status(404).json({ message: 'No blogs found!' })
    throw new Error('No blogs found!')
  }
})

// @desc    get blog by Id
// @route   GET /api/users/blogs/:blogId
// @access  public
exports.getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.blogId).populate('author')
  if (blog) {
    res.json(blog)
  } else {
    res.status(404).json({ message: 'No blog found!' })
    throw new Error('No blog found!')
  }
})

// @desc    update blog
// @route   PUT /api/users/blogs/:blogId
// @access  private/admin
exports.updateOwnerBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.blogId)

  if (!blog) {
    res.status(401).json({ message: 'Blog not found!' })
    throw new Error('Blog not found!')
  }

  if (String(blog.author) === String(req.user._id) || req.user.isAdmin) {
    blog.title = req.body.title || blog.title
    blog.body = req.body.body || blog.body

    const updateBlog = await blog.save()

    res.json({
      _id: updateBlog._id,
      title: updateBlog.title,
      body: updateBlog.body
    })
  } else {
    res.status(404).json({ message: 'You are not the owner!' })
    throw new Error('You are not the owner!')
  }
})

// @desc    create blog
// @route   POST /api/users/blogs
// @access  private
exports.createBlog = asyncHandler(async (req, res) => {
  const { title, body } = req.body

  const blog = await Blog.create({ title, body, author: req.user._id })

  if (blog) {
    res.status(201).json({ blog })
  } else {
    res.status(400).json({ message: 'Invalid data' })
    throw new Error('Invalid data')
  }
})

// @desc    delete blog
// @route   DELETE /api/users/blogs/:blogId
// @access  private/admin
exports.deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.blogId)

  if (String(blog.author) === String(req.user._id) || req.user.isAdmin) {
    await blog.remove()
    res.json({ message: 'Your blog is gone!', blog: {} })
  } else {
    res.status(404).json({ message: 'Blog not found' })
    throw new Error('Blog not found')
  }
})

// @desc    get blogs by user Id
// @route   GET /api/users/:userId/blogs
// @access  private/admin
exports.getBlogsByUserId = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ author: req.params.userId })

  if (!blogs) {
    res.status(404).json({ message: 'This user doesnt have any blogs...' })
  } else {
    res.json(blogs)
  }
})
