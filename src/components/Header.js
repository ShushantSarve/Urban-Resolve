import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>

        <h3 className='textLogo'><b>Urban Resolve</b></h3>
      
        <ul className='headerItems'>
          <a href='#Main1'>Home</a>
          <a href='#main2'>Weather</a>
          <a href='#main3'>News</a>
          <a href='#main4'>preserving the planet</a>
        </ul>
    
    </div>
  )
}

export default Header