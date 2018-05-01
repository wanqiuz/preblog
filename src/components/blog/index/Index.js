import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Spin } from 'antd';

import IndexContent from './IndexContent';
import IndexSider from './IndexSider';
import { loadIssues } from '../../../redux/actions/blog';

class Index extends Component {
  componentDidMount() {
    this.props.loadIssues();
  }
  
  render() {
    const { loading, error, articleList } = this.props.issuesWrapper;

    if (typeof(articleList) === "undefined" || error) {
      return <p className="message">Oops, something is wrong.</p>;
    }
    
    if (loading) {
      return (
        <div className="blog-antd-spin">
          <Spin tip="Loading..." />
        </div>
      );
    }   

    return (
      <div className="blog-container">
        <Row>
          <Col span={18}>
            <IndexContent />
          </Col>
          <Col span={6}>
            <IndexSider />
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
})(Index);