import React, { Component } from 'react';
import { Divider } from 'antd';

import ArticlesInfoItem from './ArticlesInfoItem';

import '../../styles/components/Blog/ArticlesInfoList.css';

class ArticlesInfoList extends Component {
  render() {
    const { loading, error, articleList } = this.props.issuesWrapper;

    // return articleList.map(item => (
    //   <Preview {...item} key={item.id} push={this.props.push} />
    // ));;
    console.log(articleList);
    const articleItemComponents = [];
    const defaultPageSize = this.props.defaultPageSize;
    const startArticleNumber = (this.props.currentPage - 1)* defaultPageSize;
    const endArticleNumber = startArticleNumber + defaultPageSize < articleList.length ? startArticleNumber + defaultPageSize : articleList.length;
    for (let i = startArticleNumber; i < endArticleNumber; ++i) {
      articleItemComponents.push(
        <ArticlesInfoItem 
          key={articleList[i].id}
          number={articleList[i].id}
          title={articleList[i].title}
          updateTime={articleList[i].updateTime}
          category={articleList[i].category}
          labels={articleList[i].labels}
          body={articleList[i].body}
        />
      );
    }
    return (
      <div className="blog-article-info-list">
        <Divider />
        {articleItemComponents}
      </div>
    );
  }
}

export default ArticlesInfoList;