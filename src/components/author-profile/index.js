import React from 'react';
import PropTypes from 'prop-types';

class AuthorProfile extends React.Component {
  render() {
    const {
      avatar, posts, username, gitHub, linkedIn, portfolio,
    } = this.props.user;
    return (
      <div className='author-profile'>
        <img src={avatar} alt={username}/>
        <a href={gitHub}>GitHub</a>
        <a href={linkedIn}>LinkedIn</a>
        <p>{ portfolio }</p>
        { /* Map over post items here */ }
      </div>
    );
  }
}

AuthorProfile.propTypes = {
  user: PropTypes.object,
};

export default AuthorProfile;
