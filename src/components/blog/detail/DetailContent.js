import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked'
import hljs from 'highlight.js'

import { loadIssue } from '../../../redux/actions/blog';

import '../../../styles/components/blog/detail/DetailContent.css';

class ArticleContent extends Component {
  componentWillMount() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: code => hljs.highlightAuto(code).value,
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
    })
  }

  render() {
    const { loading, error, article} = this.props.issueWrapper;

    const body = article.body;

    return (
      <div className="blog-detail">
        <div className="blog-detail-title">
          {article.title}
        </div>
        <div className="blog-detail-time">
          {article.updateTime.split('T')[0]}
        </div>
        <div className="blog-detail-body"    
        dangerouslySetInnerHTML={{ __html: marked(body) }} 
        />
      </div>
    );
  }
}

export default connect(state => {
  return {
    issueWrapper: state.loadIssueReducer,
  };
})(ArticleContent);