import React from 'react';
import autoBind from '../../utils/auto-bind';

const emptyState = {
  title: '',
  content: '',
  tags: '',
};

export default class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = emptyState;
    autoBind.call(this, ArticleForm);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // ----------------------------
    // TODO: send to backend, etc.
    // ----------------------------
    this.setState(emptyState);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.title}
          placeholder='Title'
          name='title'
          onChange={this.handleChange}
        />
        <textarea
          value={this.state.content}
          placeholder='Type article here'
          name='content'
          onChange={this.handleChange}
        />
        <input
          type='text'
          value={this.state.tags}
          placeholder='Comma separated tags'
          name='tags'
          onChange={this.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}
