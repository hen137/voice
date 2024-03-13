import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-nav">
      <div className="n-title">
        <h1>Mindful Consumer</h1>
      </div>
      <div className="n-navitems">
        <ul>
          <li>what we do</li>
          <li>who we are</li>
          <li>podcast</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
