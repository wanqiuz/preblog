import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Preview.css';

class Preview extends Component {
  handleNavigate(id, e) {
    e.preventDefault();

    this.props.push('/detail/${id}');
  }
  render() {
    return (
      <article className="article-preview-item">
        <h1 className="title">
          <a href={'/detail/${this.props.id}'} 
             onClick={this.handleNavigate.bind(this, this.props.id)}>
             {this.props.title}
          </a>
        </h1>
        <span className="date">{this.props.date}</span>
        <p className="desc">{this.props.description}</p>
      </article>
    );
  }
}

Preview.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  push: PropTypes.func,
}

export default Preview;