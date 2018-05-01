import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IndexItem from './IndexItem';

import '../../../styles/components/blog/index/IndexList.css';

class IndexList extends Component {

  render() {
    const { loading, error, articleList } = this.props.issuesWrapper;

    //console.log(articleList);
    const articleItemComponents = [];
    const defaultPageSize = this.props.defaultPageSize;
    const startArticleNumber = (this.props.currentPage - 1)* defaultPageSize;
    const endArticleNumber = startArticleNumber + defaultPageSize < articleList.length ? startArticleNumber + defaultPageSize : articleList.length;
    for (let i = startArticleNumber; i < endArticleNumber; ++i) {
      articleItemComponents.push(
        <IndexItem 
          key={articleList[i].id}
          number={articleList[i].id}
          title={articleList[i].title}
          updateTime={articleList[i].updateTime}
          category={articleList[i].category}
          labels={articleList[i].labels}
          body={articleList[i].body}
        />
      );
    }
    return (
      <div className="blog-index-list">
        {articleItemComponents}
      </div>
    );
  }
}

IndexList.propTypes = {
  defaultPageSize: PropTypes.number,
}

export default connect(state => {
  return {
    issuesWrapper: state.loadIssuesReducer,
    currentPage: state.changeCurrentPageReducer.currentPage,
  };
})(IndexList);