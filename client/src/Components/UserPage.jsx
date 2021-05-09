import React from 'react';
import HamburgerMenu from '../Utilities/HamburgerMenu';
import GetProfile from '../Components/GetUserProfile';
import GetAllPosts from '../Components/GetAllPosts';


const UserPage =()=>{



  return (
    <div>
      <HamburgerMenu/>
        <GetProfile/>
        <GetAllPosts/>
    </div>
  );
}

export default UserPage;