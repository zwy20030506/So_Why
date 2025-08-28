import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src="/img/logo.png" alt="所以然" />
      </Link>
      <div className="logo-motto">
        <Link to="/" className="motto-link">
          <span className="motto-text">知其然，知其所以然</span>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
