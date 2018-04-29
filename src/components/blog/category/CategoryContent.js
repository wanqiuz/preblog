import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Spin } from 'antd';

import { loadIssue } from '../../../redux/actions/blog';

import '../../../styles/components/blog/detail/DetailContent.css';

class ArticleContent extends Component {

  componentDidMount() {
    this.props.loadIssue(this.props.number);
  }

  render() {
    const { loading, error, article} = this.props.issueWrapper;

    if (typeof(article) === "undefined" || error) {
      return <p className="message">Oops, something is wrong.</p>;
    }
    
    if (loading) {
      return (
        <div className="blog-antd-spin">
          <Spin tip="Loading..." />
        </div>
      );
    }  


    const body = article.body;

    return (
      //<div className="blog-container">
        <div className="blog-article-area">
          <div className="blog-article-title">
            {article.title}
          </div>
          <div className="blog-article-time">
            {article.updateTime.split('T')[0]}
          </div>
          <div className="blog-article-body"    
          dangerouslySetInnerHTML={{ __html: marked(body) }} 
          />
        </div>
      //</div>
    );
  }
}

export default connect(state => {
  return {
    issueWrapper: state.loadIssueReducer,
  };
}, dispatch => {
  return {
    loadIssue: bindActionCreators(loadIssue, dispatch),
  };
})(ArticleContent);
