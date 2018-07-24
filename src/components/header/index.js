import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <li><Link to='/'>Home</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}