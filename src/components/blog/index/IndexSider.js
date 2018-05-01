import React, { Component } from 'react';

import IndexBanner from './IndexBanner';
import IndexCategory from './IndexCategory';
import IndexTag from './IndexTag';

import '../../../styles/components/blog/index/IndexSider.css';

class IndexSider extends Component {
  render() {
    return (
      <div className="blog-index-sider">
        <IndexBanner />
        <IndexCategory />
        <IndexTag />
      </div>
    );
  }
}

export default IndexSider;