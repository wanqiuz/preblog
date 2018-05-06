import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import FrameHeader from './FrameHeader';

import "../styles/layouts/Frame.css";

class Frame extends Component {
  render() {
    return (
      <div>
        { browserHistory.getCurrentLocation().pathname === "/login" ? null : <FrameHeader /> }
        <div>
          {this.props.children}
        </div>
      </div>    
    );
  }
}

export default Frame;