import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-text">
        <span className="logo-name">Nitro</span>
        <span className="name-drop">.</span>
      </div>
      <div className="nav-mmenu">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink >About</NavLink></li>
          <li><NavLink>Contact</NavLink></li>
          <li><NavLink to="/service">Service</NavLink></li>
          <li><NavLink>Blog</NavLink>Blog</li>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
