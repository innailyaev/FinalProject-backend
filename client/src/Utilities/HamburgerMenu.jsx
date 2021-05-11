import React from 'react';
import LogOut from '../Components/LogOut';
import '../CSS/HamburgetMenu.css';

const HamburgerMenu =()=>{

  return (
    <div>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
            <img src="https://www.pngitem.com/pimgs/m/404-4042686_my-profile-person-icon-png-free-transparent-png.png" alt="Girl in a jacket" width="200" height="200"/>
              <a href="/"><li>Home</li></a>
              <a href="/profile"><li>See Profile</li></a>
              <a href="/newpost"><li>Create New Post</li></a>
              <a href="/myposts"><li>My Posts</li></a>
              <a href="/gallery"><li>My Gallery</li></a>

              <LogOut/>
            </ul>
          </div>
        </nav>
    </div>
  );
}

export default HamburgerMenu;