import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

// -------------------------------------------------------------------------------------------------
// SVG IMPORTS
// -------------------------------------------------------------------------------------------------

import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className='topnav'>
          <ul>
            <li><Link to={ROUTES.LANDING}>Home</Link></li>
            <li><Link to={ROUTES.LOGIN}>Log in</Link></li>
            <li><Link to={ROUTES.CREATE}>Create Article</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
