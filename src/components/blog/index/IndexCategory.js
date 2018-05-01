import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon } from 'antd';
import { connect } from 'react-redux';

import { scrollToAnchor } from '../../../api/api';

import '../../../styles/components/blog/index/IndexCategory.css';

class IndexCategory extends Component {

  render() {
    const { loading, error, articleList } = this.props.issuesWrapper;
    let categoryTypes = [];
    let categoryCounts = [];
    for (let i = 0; i < articleList.length; ++i) {
      if (categoryTypes.indexOf(articleList[i].category) < 0) {
        categoryTypes.push(articleList[i].category);
        categoryCounts.push(1);
      } else {
        categoryCounts[categoryTypes.indexOf(articleList[i].category)] = categoryCounts[categoryTypes.indexOf(articleList[i].category)] + 1;
      }
    }
    // console.log("begin")
    // console.log(articleList)
    // console.log(categoryTypes)
    // console.log(categoryCounts)
    const categoryComponents = categoryTypes.map((item, index) => {
      return (
        <Link key="item" to={`/blog/category/#${item}`} onClick={() => scrollToAnchor(item)}>
          <span className="blog-index-category-content-name">{item}</span>
          <span className="blog-index-category-content-badge">{categoryCounts[index]}</span>
        </Link>
      )
    });

    return (
      <div className="blog-index-category">
        <div className="blog-index-category-title">
          <Icon type="bars" />
          &nbsp;分类
        </div>
        <div className="blog-index-category-content">
          {categoryComponents}
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    issuesWrapper: state.loadIssuesReducer,
  };
})(IndexCategory);