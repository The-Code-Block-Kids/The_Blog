import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';
import AuthForm from '../auth-form';
import autoBind from '../../utils/auto-bind';

class AuthLanding extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, AuthLanding);
  }

  handleLogin(user) {
    // login
    // ex. this.props.doLogin(user)...
  }

  handleSignUp(user) {
    // signup
    // ex. this.props.doSignup(user)...
  }

  render() {
    const signupText = 'This blog is private and only allows users with the secret to sign up as'
      + ' a contributor. If you have the secret, feel free to sign in below.';
    const loginText = 'Log in below to continue contributing to our blog.';
    return (
      <div className='auth-landing'>
        {
          this.props.history.location.pathname === '/login'
            ? <div>
                <p>{loginText}</p>
                <AuthForm type='login' onComplete={this.handleLogin}/>
                <p>No account? <Link to={ROUTES.SIGNUP}>Sign Up!</Link></p>
              </div>
            : <div>
                <p>{signupText}</p>
                <AuthForm type='signup' onComplete={this.handleSignUp}/>
                <p>Already have an account? <Link to={ROUTES.LOGIN}>Log In!</Link></p>
            </div>
        }
      </div>
    );
  }
}

AuthLanding.propTypes = {
  history: PropTypes.object,
};

export default AuthLanding;
