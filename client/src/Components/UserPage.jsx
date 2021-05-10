import React, { useEffect } from 'react';
import HamburgerMenu from '../Utilities/HamburgerMenu';
import GetProfile from '../Components/GetUserProfile';
import Carousel from '../Utilities/Carousel';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../CSS/UserPageStyle.css';


const UserPage =()=>{

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])


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
        <section className="carouselContainer">
          <div data-aos="fade-up" className="carousel">
            <Carousel/>

          </div>
        </section>
        
    </div>
  );
}

export default UserPage;