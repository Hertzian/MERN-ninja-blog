function Footer() {
  const date = new Date().getFullYear()
  return (
    <div className='footer'>
      <span>Ninja Blog!</span> | Lalo Aguilar | <span>&copy;{date}</span>
    </div>
  )
}

export default Footer
