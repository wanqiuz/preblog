import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';

import IndexList from './IndexList';
import IndexPagination from './IndexPagination';
import { changeCurrentPage } from '../../../redux/actions/blog';

import '../../../styles/components/blog/index/IndexArea.css';

class IndexArea extends Component {
  render() {
    const defaultPageSize = 4;
    const { loading, error, articleList } = this.props.issuesWrapper;

    if (error) {
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
      <div className="blog-article-info-area">
        <IndexList 
          issuesWrapper={this.props.issuesWrapper} 
          defaultPageSize={defaultPageSize}
          currentPage={this.props.currentPage} 
        />
        <IndexPagination 
          currentPage={this.props.currentPage}
          defaultPageSize={defaultPageSize}
          total={articleList.length}
          changeCurrentPage={this.props.changeCurrentPage}
        />
      </div>
    );
  }
}

//export default BlogArticleArea;

export default connect(state => {
  return {
    currentPage: state.changeCurrentPageReducer.currentPage,
  };
}, dispatch => {
  return {
    changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
  };
})(IndexArea);