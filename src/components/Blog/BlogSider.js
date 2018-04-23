import React, { Component } from 'react';

import BlogSiderBanner from './BlogSiderBanner';
import BlogSiderCategory from './BlogSiderCategory';
import BlogSiderTag from './BlogSiderTag';

import '../../styles/components/Blog/BlogSider.css';

class BlogSider extends Component {
  render() {
    return (
      <div className="blog-sider">
        <BlogSiderBanner />
        <BlogSiderCategory />
        <BlogSiderTag />
      </div>
    );
  }
}

export default BlogSider;