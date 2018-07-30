import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/auto-bind';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      secret: '',
    };
    autoBind.call(this, Login);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    // verify with backend
  }

  render() {
    const buttonText = this.props.type === 'signup' ? 'Sign Up' : 'Log In';
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='fade-in'>
          <input
            type='text'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />

          {
            this.props.type === 'signup'
            && <input
              type='text'
              name='secret'
              placeholder='secret'
              value={this.state.secret}
              onChange={this.handleChange}
            />
          }
          <button type='submit'>{buttonText}</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  type: PropTypes.string,
};
