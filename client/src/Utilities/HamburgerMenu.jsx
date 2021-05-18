import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LogOut from '../Components/LogOut';
import '../CSS/HamburgetMenu.css';

const HamburgerMenu = () => {
  const [user, setUser] = useState ();

  const getProfile = async () => {
    console.log ('get');
    try {
      const response = await axios.get (
        'http://localhost:5000/api/users/profile',
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem ('token'),
          },
        }
      );
      console.log (response.data);
      setUser (response.data);
    } catch (err) {
      console.log (err);
    }
  };

  useEffect (() => {
    getProfile ();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu">
            {
              (user?.img) ? <img className="profileImg" src={`data:image/jpeg;base64,${user?.img}`} alt="profileImg" width="200" height="200"/>:
            <img
              src="https://www.pngitem.com/pimgs/m/404-4042686_my-profile-person-icon-png-free-transparent-png.png"
              alt=""
              width="200"
              height="200"
            />
            }
            <p>{user?.name}</p>
            <a href="/"><li>Home</li></a>
            <a href="/hello"><li>My Profile</li></a>
            <a href="/newpost"><li>Create New Post</li></a>
            <a href="/myposts"><li>My Posts</li></a>
            <a href="/gallery"><li style={{marginBottom:'40px'}}>My Gallery</li></a>

            <LogOut />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
