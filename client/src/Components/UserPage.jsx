import React from 'react';
import HamburgerMenu from '../Utilities/HamburgerMenu';
import GetProfile from '../Components/GetUserProfile';
import 'aos/dist/aos.css';


const UserPage =()=>{

  
  return (
    <div className="mainContainer">
      <HamburgerMenu/>
        <GetProfile/>  
    </div>
  );
}

export default UserPage;