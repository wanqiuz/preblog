import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomeBanner from '../components/Home/HomeBanner';
import { push } from 'react-router-redux';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeBanner push={this.props.push} />
      </div>
    );
  }
}

// export default connect(state => {
//   return {
//     list: state.rootReducer.homeReducer.list,
//   };
// }, dispatch => {
//   return {
//     listActions: bindActionCreators(listActions, dispatch),
//     push: bindActionCreators(push, dispatch),
//   };
// })(Home);

export default Home;