import React from 'react';
import './landing.scss';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='landing-page fade-in'>
        <img src='http://via.placeholder.com/960x300'/>
        <p className='hero-text'>
          Hello Team!
        </p>
      </div>
    );
  }
}
