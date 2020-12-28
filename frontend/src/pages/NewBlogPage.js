import React from 'react'

const NewBlogPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('new blog created!')
  }
  return (
    <div className='home'>
      <h2>NewBlog</h2>
      <form className="create" onSubmit={handleSubmit}>
        <label htmlFor="title" className="create label">Title:</label>
        <input name='title' type="text"/>
        <label htmlFor="body" className="create label">Body:</label>
        <textarea name='body' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewBlogPage
