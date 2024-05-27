import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <ul className="d-flex">
        <li>
          <Link to='/'>Rick and Morty</Link>
        </li>
        <li>
          <Link to='/character'>Characters</Link>
        </li>
        <li>
          <Link to='/location'>Locations</Link>
        </li>
        <li>
          <Link to='/episode'>Episodes</Link>
        </li>
        <li>
          <Link to='/allImages'>All Images</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;