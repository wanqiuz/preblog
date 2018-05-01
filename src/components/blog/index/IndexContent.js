import React, { Component } from 'react';
import { Divider } from 'antd';
import IndexList from './IndexList';
import IndexPagination from './IndexPagination';

import '../../../styles/components/blog/index/IndexContent.css';

class IndexContent extends Component {

  render() {
    const defaultPageSize = 4;

    return (
      <div className="blog-index-content">
        <div className="blog-index-promotion">
          <h1>
            Welcome to ZhaoPeng's Blog!
          </h1>
          <small>
            这里记录着我的程序员学习之路
          </small>
          <Divider />
        </div>
        <IndexList
          defaultPageSize={defaultPageSize}
        />
        <IndexPagination
          defaultPageSize={defaultPageSize}
        />
      </div>
    );
  }
}

export default IndexContent;