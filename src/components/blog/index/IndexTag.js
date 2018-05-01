import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon, Tag, Spin } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { scrollToAnchor } from '../../../api/api';
import { loadTags } from '../../../redux/actions/blog';

import '../../../styles/components/blog/index/IndexTag.css';

class IndexTag extends Component {

  render() {
    const { articleList } = this.props.issuesWrapper;
    let tags = [];
    articleList.map(item => {
      const itemTags = item.tags.split("\n").filter(item => item.length > 0);
      itemTags.map(item => {
        if (tags.indexOf(item) < 0)
          tags.push(item);
      });
    });

    return (
      <div className="blog-index-tag">
        <div className="blog-index-tag-title">
          <Icon type="tag-o" />
          &nbsp;标签
        </div>
        <div className="blog-index-tag-content">
          {
            tags.map(item => { 
              return (
                <div key={item} style={{ margin: '5px 5px' }}>
                  <Tag>
                    <Link key={item} to={`/blog/tag/#${item}`} onClick={() => scrollToAnchor(item)}>
                      {item}
                    </Link>
                  </Tag>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    issuesWrapper: state.loadIssuesReducer,
  }
})(IndexTag);