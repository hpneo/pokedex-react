import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = (props) => (
  <header className='header'>
    <nav>
      <NavLink exact activeClassName='active' to='/'>Home</NavLink>
      <NavLink exact activeClassName='active' to='/profile/me'>Me</NavLink>
      <NavLink exact activeClassName='active' to='/profile/john'>John</NavLink>
      <NavLink exact activeClassName='active' to='/profile/me/edit'>Edit profile</NavLink>
    </nav>
  </header>
);

export default Header;