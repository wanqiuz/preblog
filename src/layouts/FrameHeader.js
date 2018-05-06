import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon } from 'antd';

import '../styles/layouts/FrameHeader.css';

class FrameHeader extends Component {
  render() {
    return (
      <div className="frame-header">
        <div className="frame-header-title">
          <Link to="/">
            Zhao's Personal Growth Website
          </Link>
        </div>
        <nav className="frame-header-nav">
          <Link className="frame-header-nav-item" to="/">
            <Icon type="home" />
            &nbsp;Home
          </Link>
          <Link className="frame-header-nav-item" to="/blog">
            <Icon type="book" />
            &nbsp;Blog
          </Link>
          <Link className="frame-header-nav-item" to="/demo">
            <Icon type="camera-o" />
            &nbsp;Demo
          </Link>
          <Link className="frame-header-nav-item" to="/about">
            <Icon type="heart" />
            &nbsp;About Me
          </Link>
        </nav>
      </div>
    );
  }
}

export default FrameHeader;