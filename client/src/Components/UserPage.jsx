import React, { useEffect,useState,videoRef } from 'react';
import HamburgerMenu from '../Utilities/HamburgerMenu';
import GetProfile from '../Components/GetUserProfile';
import Carousel from '../Utilities/Carousel';
import Aos from 'aos';
import PopUp from '../Utilities/PopUp';
import 'aos/dist/aos.css';
import '../CSS/UserPageStyle.css';


const UserPage =()=>{

  const [popUpToggle,setPopUpToggle] = useState(false);

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  const clickHandler =()=>{
    setPopUpToggle(true);
  }

  return (
    <div className="mainContainer">
      <HamburgerMenu/>
        <GetProfile/>
        <div className="profileContainer">
          <div className="images">
              <div className="coverImg">
                  <img src="https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg" alt="travel"/>
                  <button className="coverBtn"><i class="fas fa-camera"></i>Edit cover photo</button>
              </div>
              <div className="profileImg">
              <i class="fas fa-camera fa-2x"></i>
                <img  src="https://www.pngitem.com/pimgs/m/404-4042686_my-profile-person-icon-png-free-transparent-png.png" alt="profileImg"/>
              </div>
            </div>
        </div>
        <div className="carouselContainer">
          <div data-aos="fade-up" className="carousel">
          <h2>Popular places in Europe</h2>
            <Carousel/>
          </div>
        </div>
        
        <div className="videoSection" data-aos="fade-up">
          <h2>Latest Videos</h2>
            <div  className="videoContainer">
              <div onClick={clickHandler} style={{backgroundImage:'url("https://lp-cms-production.imgix.net/2021-02/shutterstockRF_1347219839.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850")'}}>
                  <PopUp/> 
              </div>
              <div>

              </div>
              <div>
              </div>
            </div>
        </div>
        
    </div>
  );
}

export default UserPage;