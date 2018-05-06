import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CommonItem from './CommonItem';

import '../../../styles/components/blog/common/CommonList.css';

class CommonList extends Component {

  render() {
    const { loading, error, articleList} = this.props.issuesWrapper;

    const commonItemComponents = this.props.items.map(item => {
      return (
        <CommonItem key={item.title} article={item} withTitle />
      );
    });

    return (
      <div className="blog-common-list">
        <h2 id={this.props.title} className="blog-common-list-title">
          {this.props.title}
        </h2>
        <div className="blog-common-list-item">
          {commonItemComponents}
        </div>
      </div>
    );
  }
}

CommonList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default connect(state => {
  return {
    issuesWrapper: state.loadIssuesReducer,
  };
})(CommonList);