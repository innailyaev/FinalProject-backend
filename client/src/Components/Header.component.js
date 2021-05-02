import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Header.css';

const Header = () => {
  return (
    <div className="header">

      <div className="headerContainer">
        <div>
        <Link to=""><div className="logo"></div></Link>
          <Link to="/">
           HOMEPAGE
          </Link>
        </div>
        <div />
        <Link to="/login">LogIn</Link>
      </div>

    </div>
  );
};

export default Header;
