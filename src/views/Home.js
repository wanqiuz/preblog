import React, { Component } from 'react';

import HomeBanner from '../components/home/HomeBanner';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeBanner push={this.props.push} />
      </div>
    );
  }
}

export default Home;