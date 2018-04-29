import React, { Component } from 'react';
import { Icon, Tag, Spin } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadTags } from '../../../redux/actions/blog';

import '../../../styles/components/blog/index/IndexTag.css';

class IndexTag extends Component {

  componentDidMount() {
    this.props.loadTags();
  }

  render() {
    const { loading, error, tagTypes} = this.props.tagTypesWrapper;
    // //console.log("start testing")
    //console.log(tagTypes);;

    if (typeof(tagTypes) === "undefined" || error) {
      return <p className="message">Oops, something is wrong.</p>;
    }
    
    if (loading) {
      return (
        <div className="blog-antd-spin">
          <Spin tip="Loading..." />
        </div>
      );
    }

    return (
      <div className="blog-sider-area">
        <div className="blog-sider-title">
          <Icon type="tag-o" />
          &nbsp;标签
        </div>
        <div className="blog-sider-tag-content">
          {
            tagTypes.map(item => { 
              return (
                <div key={{item}} style={{ margin: '5px 5px' }}>
                  <Tag><a href="">{item}</a></Tag>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

//export default BlogSiderTag;

export default connect(state => {
  return {
    tagTypesWrapper: state.loadTagsReducer,
  }
}, dispatch => {
  return {
    loadTags: bindActionCreators(loadTags, dispatch),
  };
})(IndexTag);