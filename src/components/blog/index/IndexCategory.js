import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';

import '../../../styles/components/blog/index/IndexCategory.css';

class IndexCategory extends Component {
  render() {
    const { loading, error, articleList } = this.props.issuesWrapper;
    
    return (
      <div className="blog-sider-area">
        <div className="blog-sider-title">
          <Icon type="bars" />
          &nbsp;分类
        </div>
        <div className="blog-sider-category-content">
          <ul>
            <li>
              <a href="/categories">
                <span className="blog-sider-category-content-name">C++</span>
                <span className="blog-sider-category-content-badge">3</span>
              </a>
            </li>
            <li>
              <a href="/categories">
                <span className="blog-sider-category-content-name">C++</span>
                <span className="blog-sider-category-content-badge">3</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

//export default IndexCategory;

export default connect(state => {
  return {
    issuesWrapper: state.loadIssuesReducer,
  };
})(IndexCategory);