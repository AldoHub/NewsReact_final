import React from 'react'
import { NavLink } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Nav = () => (

    <nav className="nav">
      <p id="menu">Menu <span id="icon">&#9776;</span> </p>
      <ul className="links">
        <p id="powered">NewsReact - <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">Powered By News API</a> </p>
        <li><NavLink exact={true} to='/'>Home</NavLink></li>
        <li><NavLink exact={true} to='/news'>News</NavLink></li>
        <li><NavLink exact={true} to='/business'>Business</NavLink></li>
        <li><NavLink exact={true} to='/fame'>Fame</NavLink></li>
        <li><NavLink exact={true} to='/games'>Games</NavLink></li>
        <li><NavLink exact={true} to='/sports'>Sports</NavLink></li>
        <li><NavLink exact={true} to='/tech'>Tech</NavLink></li>
      </ul>
    </nav>
    
 
)

export default Nav
