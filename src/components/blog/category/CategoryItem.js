import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Icon } from 'antd';
import { browserHistory } from 'react-router';

import { scrollToAnchor } from '../../../api/api';

import '../../../styles/components/blog/category/CategoryItem.css';

class CategoryItem extends Component {

  render() {
    const article = this.props.article;

    const tagComponents = article.tags.split("\n").filter(item => item.length > 0).map(item => {
        return (
          <Link>
            {item}
          </Link>
        );
    });

    return (
      <div className="blog-category-item">
        <time className="blog-category-item-time">
          <Icon type="calendar" style={{fontSize: 16, color: "#888"}} />
          <span>{article.updateTime}</span>
        </time>
        <div className="blog-category-item-title">
          <Icon type="file-markdown" />
          <Link to={`/blog/detail/${article.id}`}>{article.title}</Link>
        </div>
        <div className="blog-category-item-category">
          <Icon type="bars" style={{fontSize: 16, color: "#9e9d9d"}} />
          <Link to={`/blog/category/#${article.category}`} onClick={() => scrollToAnchor(article.category)}>{article.category}</Link>
        </div>
        <div className="blog-category-item-tag">
          <Icon type="tag-o" style={{fontSize: 16, color: "#c6cbe9"}} />
          {tagComponents}
        </div>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  article: PropTypes.array,
}

export default CategoryItem;