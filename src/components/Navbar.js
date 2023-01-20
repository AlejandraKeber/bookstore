import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/">BOOKS    </NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
