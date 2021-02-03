import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <div className='footer'>
      <span>Ninja Blog!</span> Lalo Aguilar &copy; <span>{date}</span>
    </div>
  )
}

export default Footer
