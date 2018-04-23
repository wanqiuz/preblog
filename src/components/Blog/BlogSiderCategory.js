import React, { Component } from 'react';
import { Icon } from 'antd';

import '../../styles/components/Blog/BlogSiderCategory.css';

class BlogSiderCategory extends Component {
  render() {
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

export default BlogSiderCategory;