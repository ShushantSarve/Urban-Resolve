import React from 'react'
import './Footer.css'

function Footer() {
  return (
<div className='footer'>
  <div className='footer1'>
    <div className='footerlogo'><h3>Urban Resolve</h3></div>
    <div class="social-menu">
      <ul>
          <li><a href="https://github.com/ShushantSarve" target="blank"><i class="fab fa-github"></i></a></li>
          <li><a href="https://discord.com/users/805476856807686235" target="blank"><i class="fab fa-discord"></i></a></li>
          <li><a href="https://www.linkedin.com/in/shushant-sarve/" target="blank"><i class="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.instagram.com/shushant_sarve/?hl=en" target="blank"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>
  </div>
    <div className='love'>made with ❤️ by shushant</div>
</div>

  )
}

export default Footer;