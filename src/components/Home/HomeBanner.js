import React, { Component } from 'react';
import '../../styles/components/Home/HomeBanner.css';

class HomeBanner extends Component {
  render() {
    return (
      <div className="home-banner">
        <div className="home-banner-me">
          <div className="home-banner-photo">
            <img src="./src/assets/myPhoto.png" alt="头像" />
          </div>
          <div className="home-banner-desc">
            <h1>赵鹏</h1>
            <p>一个正在努力的程序猿</p>
            <p>分享技术与生活</p>
            <div className="home-banner-link">
              <div className="home-banner-link-item">
                <a target="_black" rel="noopener noreferrer" hrel="https://github.com/wanqiu">
                  Github
                </a>
              </div>
              <div className="home-banner-link-item">
                <a target="_black" rel="noopener noreferrer" hrel="http://axuebin.com/cv">
                  在线简历
                </a>
              </div>
              <div className="home-banner-link-item">
                <a target="_black" rel="noopener noreferrer" hrel="https://axuebin.tuchong.com">
                  摄影作品
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeBanner;