import React from 'react'
import {Link} from 'react-router-dom'

const BlogPreview = ({title, id, author}) => {
  return (
    <div className="blog-preview">
      <h2>{title}</h2>
      <p>by {author.name}</p>
      <Link to={`/post/${id}`}>view more</Link>
    </div>
  )
}

export default BlogPreview
