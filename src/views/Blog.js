import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/views/Blog.css';

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        {this.props.children}
      </div>
    );
  }
}

export default Blog;