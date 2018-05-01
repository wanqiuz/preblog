import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Spin } from 'antd';

import { loadIssues } from '../../../redux/actions/blog';
import CategoryContent from './CategoryContent';
import IndexSider from '../index/IndexSider';

class Category extends Component {
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
            <CategoryContent 
              issuesWrapper={this.props.issuesWrapper}
              number={this.props.params.number}
            />
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
})(Category);