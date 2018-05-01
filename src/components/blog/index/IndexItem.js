import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Icon, Divider } from 'antd';

import '../../../styles/components/blog/index/IndexItem.css';

class IndexItem extends Component {
  render() {
    return (
      <div className="blog-index-item">
        <div className="blog-index-item-title">
          <Link to={`/blog/detail/${this.props.number}`}>
            {this.props.title}
          </Link>
        </div>
        <div className="blog-index-item-time">
          <Icon type="calendar" />
          &nbsp;{this.props.updateTime.split('T')[0]}&nbsp;
        </div>
        <div className="blog-index-item-label">
          <Icon type="bars" />
            &nbsp;{this.props.category}&nbsp;
          <Icon type="tag-o" />
            &nbsp;C++&nbsp;
        </div>
        <div className="blog-index-item-desc">
          <p>
            {this.props.body.slice(0, 20)}
            <span className="blog-index-item-desc-more">
              <Link to={`/blog/detail/${this.props.number}`}>
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
  number: PropTypes.number,
  title: PropTypes.string,
  time: PropTypes.string,
  labels: PropTypes.array,
  desc: PropTypes.string,
}

export default IndexItem;