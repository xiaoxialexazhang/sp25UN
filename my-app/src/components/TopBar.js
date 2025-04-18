import React from 'react';
import './TopBar.css';
import { AiFillHome } from 'react-icons/ai';

function TopBar() {
  return (
    <div>
        <div className="top-bar">
            <div className="left">
                <AiFillHome className="home-icon" />
                <span>Welcome to the United Nations</span>
            </div>
            <div className="right">
                <button className="lang">العربية</button>
                <button className="lang">中文</button>
                <button className="lang bold">English</button>
                <button className="lang">Français</button>
                <button className="lang">Русский</button>
                <button className="lang">Español</button>
            </div>
        </div>
        <div className="blue-bar"></div>
    </div>
  );
}

export default TopBar;
