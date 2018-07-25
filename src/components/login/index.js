import React from 'react';
import autoBind from '../../utils/auto-bind';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    autoBind.call(this, Login);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    // do something
  }

  render() {
    return (
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
        <button type='submit'>Log In</button>
      </form>
    );
  }
}
