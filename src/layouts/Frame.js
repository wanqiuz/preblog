import React, { Component } from 'react';

import FrameHeader from './FrameHeader';

import "../styles/layouts/Frame.css";

class Frame extends Component {
  render() {
    return (
      <div>
        <FrameHeader />
        <div className="middle">
          {this.props.children}
        </div>
      </div>    
    );
  }
}

export default Frame;