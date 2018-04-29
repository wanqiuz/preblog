import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Spin } from 'antd';
import marked from 'marked'
import hljs from 'highlight.js'

import { loadIssue } from '../../../redux/actions/blog';

import '../../../styles/components/blog/detail/DetailContent.css';

class ArticleContent extends Component {
  componentWillMount() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: code => hljs.highlightAuto(code).value,
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
    })
  }

  componentDidMount() {
    this.props.loadIssue(this.props.number);
    //console.log("loadIssue");
    //console.log(this.props.issueWrapper);
  }

  render() {
    // const { loading, error, articleList } = this.props.issuesWrapper;

    // const number = this.props.number - 1;
    // const article = articleList.filter(article => article.number === number)[0];

    const { loading, error, article} = this.props.issueWrapper;
    //console.log("start testing")
    //console.log(article);;

    if (typeof(article) === "undefined" || error) {
      return <p className="message">Oops, something is wrong.</p>;
    }
    
    if (loading) {
      return (
        <div className="blog-antd-spin">
          <Spin tip="Loading..." />
        </div>
      );
    }  

    // console.log(article.body.indexOf("\n"))
    // const body = article.body.replace(/\n/g,"\r\n");
    // console.log("hey, my body is")
    // console.log({body: body});

    const body = article.body;

    return (
      //<div className="blog-container">
        <div className="blog-article-area">
          <div className="blog-article-title">
            {article.title}
          </div>
          <div className="blog-article-time">
            {article.updateTime.split('T')[0]}
          </div>
          <div className="blog-article-body"    
          dangerouslySetInnerHTML={{ __html: marked(body) }} 
          />
        </div>
      //</div>
    );
  }
}

export default connect(state => {
  return {
    issueWrapper: state.loadIssueReducer,
  };
}, dispatch => {
  return {
    loadIssue: bindActionCreators(loadIssue, dispatch),
  };
})(ArticleContent);

// export default connect(state => {
//   return {
//     issuesWrapper: state.loadIssuesReducer,
//   };
// }, dispatch => {
//   return {
//     loadIssues: bindActionCreators(loadIssues, dispatch),
//   };
// })(ArticleContent);

//export default ArticleContent;