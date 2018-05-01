import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CategoryItem from './CategoryItem';

import '../../../styles/components/blog/category/CategoryList.css';

class CategoryList extends Component {

  render() {
    const { loading, error, articleList} = this.props.issuesWrapper;

    const categoryItemComponents = this.props.items.map(item => {
      return (
        <CategoryItem article={item}/>
      );
    });

    return (
      <div className="blog-category-list">
        <h2 id={this.props.title} className="blog-category-list-title">
          {this.props.title}
        </h2>
        <div className="blog-category-list-item">
          {categoryItemComponents}
        </div>
      </div>
    );
  }
}

CategoryList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default connect(state => {
  return {
    issuesWrapper: state.loadIssuesReducer,
  };
})(CategoryList);