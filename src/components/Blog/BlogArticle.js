import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';

import { loadIssues } from '../../redux/actions/blog';
import ArticleContent from './ArticleContent';
import BlogSider from './BlogSider';

class BlogArticle extends Component {
  componentDidMount() {
    this.props.loadIssues();
  }

  render() {
    return (
      <div className="blog-container">
        <Row>
          <Col span={16}>
            <ArticleContent 
              issuesWrapper={this.props.issuesWrapper}
              number={this.props.params.number}
            />
          </Col>
          <Col span={8}>
            <BlogSider />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => {
  return {
    issuesWrapper: state.loadIssuesReducer,
  };
}, dispatch => {
  return {
    loadIssues: bindActionCreators(loadIssues, dispatch),
  };
})(BlogArticle);