import React from 'react'
import { NavLink } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Nav = () => (
    
    <nav className="nav">
      <ul>
        <li><NavLink exact={true} to='/'>NewsReact</NavLink></li>
      </ul>
   
      <ul id="menu">
        <li><button>&#8801;</button></li>
      </ul>

      <ul className="links">
        <li className="small"><NavLink exact={true} to='/'>Home</NavLink></li>
        <li className="small"><NavLink exact={true} to='/news'>News</NavLink></li>
        <li className="small"><NavLink exact={true} to='/business'>Business</NavLink></li>
        <li className="small"><NavLink exact={true} to='/fame'>Fame</NavLink></li>
        <li className="small"><NavLink exact={true} to='/games'>Games</NavLink></li>
        <li className="small"><NavLink exact={true} to='/sports'>Sports</NavLink></li>
        <li className="small"><NavLink exact={true} to='/tech'>Tech</NavLink></li>
      </ul>
    </nav>
    
 
)

export default Nav
