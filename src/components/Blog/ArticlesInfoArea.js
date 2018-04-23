import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';

import ArticlesInfoList from './ArticlesInfoList';
import ArticlesInfoPagination from './ArticlesInfoPagination';
import { changeCurrentPage } from '../../redux/actions/blog';

import '../../styles/components/Blog/ArticlesInfoArea.css';

class ArticlesInfoArea extends Component {
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
        <ArticlesInfoList 
          issuesWrapper={this.props.issuesWrapper} 
          defaultPageSize={defaultPageSize}
          currentPage={this.props.currentPage} 
        />
        <ArticlesInfoPagination 
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
})(ArticlesInfoArea);