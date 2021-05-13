import React, { useEffect,useState } from 'react';
import axios from 'axios';
import HamburgerMenu from '../Utilities/HamburgerMenu';
import GetProfile from '../Components/GetUserProfile';
import 'aos/dist/aos.css';
import '../CSS/UserPageStyle.css';


const UserPage =()=>{

  
  return (
    <div className="mainContainer">
      <HamburgerMenu/>
        <GetProfile/>  
    </div>
  );
}

export default UserPage;