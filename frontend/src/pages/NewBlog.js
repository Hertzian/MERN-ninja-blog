import React from 'react'

const NewBlog = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('new blog created!')
  }
  return (
    <div className='home'>
      <h2>NewBlog</h2>
      <form className="create" onSubmit={handleSubmit}>
        <label htmlFor="title" className="create label">Blog title</label>
        <input type="text"/>
        <label htmlFor="body" className="create label">Body</label>
        <input type="text"/>
        <label htmlFor="author" className="create label">Author</label>
        <input type="text"/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewBlog
