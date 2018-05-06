import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider } from 'antd';
import { browserHistory } from 'react-router';

import { scrollToAnchor } from '../../../api/api';
import CommonList from './CommonList';

import '../../../styles/components/blog/common/CommonContent.css';

class CommonContent extends Component {

  componentDidMount() {
    scrollToAnchor(browserHistory.getCurrentLocation().hash.slice(1));
  }

  render() {
    const { loading, error, articleList} = this.props.issuesWrapper;

    let commonList = [];
    let commonTypes = [];
    const type = this.props.type;

    if (type === "tag") {
      for (let i = 0; i < articleList.length; ++i) {
        const tagArray = articleList[i].tags.split("\n").filter(item => item.length > 0);
        for (let j = 0; j < tagArray.length; ++j) {
          if (commonTypes.indexOf(tagArray[j]) < 0) {
            commonTypes.push(tagArray[j]);
            commonList[commonList.length] = new Array(articleList[i]);
          } else {
            commonList[commonTypes.indexOf(tagArray[j])].push(articleList[i]);
          }
        }
      }    
    } else {
      for (let i = 0; i < articleList.length; ++i) {
        if (commonTypes.indexOf(articleList[i][type]) < 0) {
          commonTypes.push(articleList[i][type]);
          commonList[commonList.length] = new Array(articleList[i]);
        } else {
          commonList[commonTypes.indexOf(articleList[i][type])].push(articleList[i]);
        }
      }
    }
    

    const commonListComponents = commonList.map((item, index) => {
      const title = commonTypes[index];
      return (
        <CommonList key={title} title={title} items={item} />
      );
    })
    return (
      <div className="blog-common-content">
        <h1>
          {this.props.headline}
        </h1>
        {commonListComponents}
      </div>
    );
  }
}

export default connect(state => {
  return {
    issuesWrapper: state.loadIssuesReducer,
  };
})(CommonContent);
