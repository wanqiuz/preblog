import React, { Component } from 'react';
import { Link } from 'react-router';

import '../../styles/components/Blog/BlogSiderBanner.css';

class BlogSiderBanner extends Component {
  render() {
    return (
      <div className="blog-sider-banner">
        <Link to="/blog/banner">
          全部文章
        </Link>
      </div>
    );
  }
}

export default BlogSiderBanner;