const Blog = require('../Models/BlogModel')
const asyncHandler = require('../utils/asyncHandler')

// @desc    get all blogs
// @route   GET /api/users/blogs
// @access  public
exports.getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find().populate('author')

  console.log(blogs)

  if (blogs) {
    res.json(blogs)
  } else {
    res.status(404)
    throw new Error('No blogs found!')
  }
})

// @desc    get blog by Id
// @route   GET /api/users/blogs/:blogId
// @access  public
exports.getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.blogId).populate('author')

  // console.log(blog)

  if (blog) {
    res.json(blog)
  } else {
    res.status(404)
    throw new Error('No blog found!')
  }
})

// @desc    update blog
// @route   PUT /api/users/blogs/:blogId
// @access  private
exports.updateOwnerBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.blogId)

  // console.log(blog)
  // console.log('log 1:', String(req.user._id))
  // console.log('log 2:', String(blog.author))

  if (blog) {
    if (String(blog.author) === String(req.user._id)) {
      blog.title = req.body.title || blog.title
      blog.body = req.body.body || blog.body

      const updateBlog = await blog.save()

      res.json({
        _id: updateBlog._id,
        title: updateBlog.title,
        body: updateBlog.body,
      })
    } else {
      res.status(401)
      throw new Error('Not blog owner')
    }
  } else {
    res.status(404)
    throw new Error('No blog found!')
  }
})

// @desc    create blog
// @route   POST /api/users/blogs
// @access  private
exports.createBlog = asyncHandler(async (req, res) => {
  const { title, body } = req.body

  const blog = await Blog.create({ title, body, author: req.user._id })

  if (blog) {
    res.status(201).json(blog)
  }else{
    res.status(400)
    throw new Error('Invalid data')
  }
})

// admin routes ********************************

// @desc    delete blog
// @route   DELETE /api/users/blogs/:blogId
// @access  private/admin
exports.deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.blogId)

  console.log(blog)

  if (blog) {
    await blog.remove()
    res.json({ message: 'Blog removed' })
  } else {
    res.status(404)
    throw new Error('Blog not found')
  }
})
