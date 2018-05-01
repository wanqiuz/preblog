import React, {Component} from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Blog from '../views/Blog';
import BlogIndex from '../components/blog/index/Index';
import BlogDetail from '../components/blog/detail/Detail';
import BlogCategory from '../components/blog/category/Category';
import BlogTag from '../components/blog/tag/Tag';

class Index extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={Frame}>
          <IndexRoute component={Home} />
          <Route path='/blog' component={Blog}>
            <IndexRoute component={BlogIndex} />
            <Route path="detail/:number" component={BlogDetail} />
            <Route path="category" component={BlogCategory} />
            <Route path="tag" component={BlogTag} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default Index;
