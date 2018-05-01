import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Icon, Divider } from 'antd';

import CommonItem from '../common/CommonItem';
import '../../../styles/components/blog/index/IndexItem.css';

class IndexItem extends Component {
  render() {
    const article = this.props.article;
    return (
      <div className="blog-index-item">
        <div className="blog-index-item-title">
          <Link to={`/blog/detail/${article.id}`}>
            {article.title}
          </Link>
        </div>
        <CommonItem article={this.props.article} />
        <div className="blog-index-item-desc">
          <p>
            {article.body.slice(0, 20)}
            <span className="blog-index-item-desc-more">
              <Link to={`/blog/detail/${article.id}`}>
                Learn more...
              </Link>
            </span>
          </p>
        </div>
        <Divider />
      </div>
    );
  }
}

IndexItem.propTypes = {
  article: PropTypes.object,
}

export default IndexItem;