import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Spin } from 'antd';

import { loadIssue } from '../../../redux/actions/blog';
import DetailContent from './DetailContent';
import IndexSider from '../index/IndexSider';

class Detail extends Component {
  componentDidMount() {
    this.props.loadIssue(this.props.params.number);
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

    return (
      <div className="blog-container">
        <Row>
          <Col span={18}>
            <DetailContent />
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
    issueWrapper: state.loadIssueReducer,
  };
}, dispatch => {
  return {
    loadIssue: bindActionCreators(loadIssue, dispatch),
  };
})(Detail);