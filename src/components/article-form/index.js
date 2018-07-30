import React from 'react';
import autoBind from '../../utils/auto-bind';
import './article-form.scss';

const emptyState = {
  title: '',
  content: '',
  tags: '',
  link: '',
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
    // TODO: form validation
    // TODO: send to backend, etc.
    // ----------------------------
    console.log(this.state);
    this.setState(emptyState);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='article-form'>
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
          type='url'
          value={this.state.link}
          placeholder='link'
          name='link'
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
