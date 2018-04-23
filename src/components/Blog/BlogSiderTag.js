import React, { Component } from 'react';
import { Icon } from 'antd';

import '../../styles/components/Blog/BlogSiderTag.css';

class BlogSiderTag extends Component {
  render() {
    return (
      <div className="blog-sider-area">
        <div className="blog-sider-title">
          <Icon type="tag-o" />
          &nbsp;标签
        </div>
        <div className="blog-sider-tag-content">
          blog-sider-tag
        </div>
      </div>
    );
  }
}

export default BlogSiderTag;