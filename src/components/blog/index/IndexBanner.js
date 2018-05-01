import React, { Component } from 'react';
import { Link } from 'react-router';

import '../../../styles/components/blog/index/IndexBanner.css';

class IndexBanner extends Component {
  render() {
    return (
      <div className="blog-index-banner">
        <Link to="/blog/banner">
          全部文章
        </Link>
      </div>
    );
  }
}

export default IndexBanner;