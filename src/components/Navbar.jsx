import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/" activeClassName="active-link">
        Accueil
      </NavLink>
      <NavLink to="/favorites" activeClassName="active-link">
        Favoris
      </NavLink>
    </nav>
  );
}

export default Navbar;
