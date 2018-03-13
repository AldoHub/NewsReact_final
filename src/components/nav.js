import React from 'react'
import { NavLink } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Nav = () => (
    
    <nav className="nav">
      <div id="nav-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="links">
        <p>NewsReact</p>
        
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
