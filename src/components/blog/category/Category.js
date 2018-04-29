import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';

import { loadIssues } from '../../../redux/actions/blog';
import CategoryContent from './CategoryContent';
import IndexSider from '../index/IndexSider';

class Category extends Component {
  componentDidMount() {
    this.props.loadIssues();
  }

  render() {
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