const BlogList = () => {
  return (
    <>
      <h3>User blogs</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>role</th>
            <th>name</th>
            <th>email</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            //blogs && blogs > 0 ? (
            //blogs.map((blog, idx) => <BlogItem blog key={idx} />)
            //) : (
            //<p>this users doesnt have any blogs... </p>
            //)
          }
        </tbody>
        <tfoot>
          <tr>
            <th>role</th>
            <th>name</th>
            <th>email</th>
            <th>actions</th>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default BlogList
