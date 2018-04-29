import React, {Component} from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Blog from '../views/Blog';
import BlogIndex from '../components/Blog/index/Index';
import BlogDetail from '../components/Blog/detail/Detail';

class Index extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={Frame}>
          <IndexRoute component={Home} />
          <Route path='/blog' component={Blog}>
            <IndexRoute component={BlogIndex}/>
            <Route path="articles/:number" component={BlogDetail}/>
          </Route>
        </Route>
      </Router>
    );
  }
}

export default Index;
