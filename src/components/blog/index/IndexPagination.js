import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Pagination } from 'antd';

import { changeCurrentPage } from '../../../redux/actions/blog';

import '../../../styles/components/blog/index/IndexPagination.css';

class IndexPagination extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(currentPage) {
    this.props.changeCurrentPage(currentPage);
  }

  render() {
    const { articleList } = this.props.issuesWrapper;

    return (
      <div className="blog-index-pagination">
        <Pagination
          current={this.props.currentPage}
          defaultPageSize={this.props.defaultPageSize}
          onChange={this.onChange}
          total={articleList.length}
        />
      </div>
    );
  }
}

IndexPagination.propTypes = {
  defaultPageSize: PropTypes.number,
}


export default connect(state => {
  return {
    issuesWrapper: state.loadIssuesReducer,
    currentPage: state.changeCurrentPageReducer.currentPage,
  };
}, dispatch => {
  return {
    changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
  };
})(IndexPagination);