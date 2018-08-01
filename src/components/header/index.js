import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

// -------------------------------------------------------------------------------------------------
// SVG IMPORTS
// -------------------------------------------------------------------------------------------------
import InfiniteSVG from '../../assets/svgs/icomoon/infinite.svg';
import SearchSVG from '../../assets/svgs/icomoon/search.svg';
import DropDownSVG from '../../assets/svgs/icomoon/play3.svg';
import MobileMenuSVG from '../../assets/svgs/icomoon/joomla.svg';
import HomeSVG from '../../assets/svgs/icomoon/home.svg';
import AboutSVG from '../../assets/svgs/icomoon/users.svg';
import ContactSVG from '../../assets/svgs/icomoon/address-book.svg';

import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <InfiniteSVG className='infinite'/>
          <Link to={ROUTES.LANDING}>Loopers</Link>
        </h1>
        <nav>

          <div className='nav-button-container'>
            <button className='link-button'>
              <Link to={ROUTES.ABOUT}>
                About <AboutSVG className='icomoon-svgs'/>
              </Link>
            </button>
          </div>

          <div className='nav-button-container'>
            <button className='link-button'>
              <Link to={ROUTES.CONTACT}>
                Contact <ContactSVG className='icomoon-svgs'/> 
              </Link>
            </button>
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

          <div className='search'>
            <input type='text' className='searchTerm' placeholder='Search for articles'/>
            <button type='submit' className='searchButton'>
              <SearchSVG className='icomoon-svgs'/>
            </button>
          </div>

        </nav>

      <MobileMenuSVG className='menu-icon'/>
        <ul className='menu-list'>
          <li>
            <Link to='/'>
              Home <HomeSVG className='icomoon-svgs'/>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              About <AboutSVG className='icomoon-svgs'/>
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              Contact <ContactSVG className='icomoon-svgs'/>
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}
