import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

// -------------------------------------------------------------------------------------------------
// SVG IMPORTS
// -------------------------------------------------------------------------------------------------
import DropDownSVG from '../../assets/svgs/icomoon/play3.svg';

import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        {/* LOGO/TITLE */}
        <nav className='topnav'>
          <div className='nav-button-container'>
            <button className='link-button'><Link to={ROUTES.LANDING}>Home </Link></button>
          </div>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/contact'>About </Link></button>
          </div>

          <div className='dropdown'>
            <button className='dropbutton'>
              Authors <DropDownSVG className='icomoon-svgs drop-down-icon'/>
            </button>
            <div className='dropdown-list'>
              <Link to={ROUTES.DANIEL}>Daniel Shelton</Link>
              <Link to={ROUTES.DAVID}>David Stoll</Link>
              <Link to={ROUTES.LACEY}>Lacey Hogan</Link>
              <Link to={ROUTES.MICHAEL}>Michael Castor</Link>
              <Link to={ROUTES.RYAN}>Ryan Groesch</Link>
              <Link to={ROUTES.SARAH}>Sarah Geyer</Link>
              <Link to={ROUTES.SEAN}>Sean Miller</Link>
            </div>
          </div>

        </nav>
      </header>
    );
  }
}
