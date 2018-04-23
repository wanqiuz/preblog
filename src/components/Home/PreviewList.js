import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';

class PreviewList extends Component {
  render() {
    const { loading, error, articleList } = this.props;

    if (error) {
      return <p className="message">Oops, something is wrong.</p>;
    }

    if (loading) {
      return <p className="message">Loading...</p>;
    }

    return articleList.map(item => (
      <Preview {...item} key={item.id} push={this.props.push} />
    ));
  }
  componentDidMount() {
    this.props.loadArticles();
  }
}

PreviewList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  articleList: PropTypes.arrayOf(PropTypes.object),
  loadArticles: PropTypes.func,
}

export default PreviewList;