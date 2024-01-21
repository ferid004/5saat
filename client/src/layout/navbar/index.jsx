import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div id='navbar'>
      <div className="dev">
        <div className="title">
          Tasty
        </div>
        <div className="links">
          <NavLink to={'/'}>HOME</NavLink>
          <Link>about</Link>
          <Link>contact</Link>
          <NavLink to={'/add'}>ADD</NavLink>
          <NavLink to={'/wish'}>WİSH</NavLink>
          <NavLink to={'/basket'}>BASKET</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar