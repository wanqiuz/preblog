import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider } from 'antd';

import CategoryList from './CategoryList';

import '../../../styles/components/blog/category/CategoryContent.css';

class ArticleContent extends Component {

  render() {
    const { loading, error, articleList} = this.props.issuesWrapper;

    let categoryList = [];
    let categoryTypes = [];
    for (let i = 0; i < articleList.length; ++i) {
      if (categoryTypes.indexOf(articleList[i].category) < 0) {
        categoryTypes.push(articleList[i].category);
        categoryList[categoryList.length] = new Array(articleList[i]);
      } else {
        categoryList[categoryTypes.indexOf(articleList[i].category)].push(articleList[i]);
      }
    }

    const categoryListComponents = categoryList.map((item, index) => {
      const title = categoryTypes[index];
      return (
        <CategoryList key={title} title={title} items={item} />
      );
    })
    return (
      <div className="blog-category-content">
        <h1>
          Categories
        </h1>
        {categoryListComponents}
      </div>
    );
  }
}

export default connect(state => {
  return {
    issuesWrapper: state.loadIssuesReducer,
  };
})(ArticleContent);
