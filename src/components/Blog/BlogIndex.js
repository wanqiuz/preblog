import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';

import ArticlesInfoArea from './ArticlesInfoArea';
import BlogSider from './BlogSider';
import { loadIssues } from '../../redux/actions/blog';

class BlogIndex extends Component {
  componentDidMount() {
    this.props.loadIssues();
  }
  
  render() {
    return (
      <div className="blog-container">
        <Row>
          <Col span={18}>
            <ArticlesInfoArea issuesWrapper={this.props.issuesWrapper} />
          </Col>
          <Col span={6}>
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
})(BlogIndex);