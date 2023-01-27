import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import user from '../images/user.svg';

const Navbar = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink to="/">BOOKS </NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES </NavLink>
        </li>
      </ul>
    </nav>
    <div className="nav-user">
      <img src={user} alt="user" />
    </div>
  </header>
);

export default Navbar;
