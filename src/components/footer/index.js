import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Link to='/'>Home</Link>
      </footer>
    );
  }
}
