import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';

import '../../../styles/components/blog/index/IndexPagination.css';

class IndexPagination extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(currentPage) {
    this.props.changeCurrentPage(currentPage);
  }

  render() {
    return (
      <div className="blog-article-info-pagination">
        <Pagination
          current={this.props.currentPage}
          defaultPageSize={this.props.defaultPageSize}
          onChange={this.onChange}
          total={this.props.total}
        />
      </div>
    );
  }
}

export default IndexPagination;