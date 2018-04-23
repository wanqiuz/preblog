import React, { Component } from 'react';
import { Link } from 'react-router';

import '../styles/layouts/FrameHeader.css';

class FrameHeader extends Component {
  render() {
    return (
      <div className="frame-header">
        <div className="frame-header-title">
          <Link to="/">
          Personal website
          </Link>
        </div>
        <nav className="frame-header-nav">
          <Link className="frame-header-nav-item" to="/">Home</Link>
          <Link className="frame-header-nav-item" to="/blog">Blog</Link>
          <Link className="frame-header-nav-item" to="/demo">Demo</Link>
          <Link className="frame-header-nav-item" to="/about">About Me</Link>
        </nav>
      </div>
    );
  }
}

export default FrameHeader;