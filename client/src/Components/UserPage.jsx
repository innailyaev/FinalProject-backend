import React, { useEffect,useState } from 'react';
import axios from 'axios';
import HamburgerMenu from '../Utilities/HamburgerMenu';
import GetProfile from '../Components/GetUserProfile';
import Carousel from '../Utilities/Carousel';
import Aos from 'aos';
import PopUp from '../Utilities/PopUp';
import 'aos/dist/aos.css';
import '../CSS/UserPageStyle.css';


const UserPage =()=>{

  const [file,setFile] = useState();
  const [userId,setUserId] = useState();
  const [image, setImage] = useState();


  const uploadImage = async () => { 
    // e.preventDefault();
    let formData = new FormData();
    formData.append('avatar', file);
    try{
      const response =await axios.post('/api/users/profile/avatar', formData,{
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
      console.log(response);
    }catch(e){
      console.log(e);
    }
     
  };

  const getImage = async ()=>{
    try{
      const response =await axios.get(`/api/users/profile/${userId}/avatar`);
      console.log(response.config.url);
      setImage(response.config.url);
    }catch(e){
      console.log(e);
    }
     
  }

//   const arrayBufferToBase64 = (buffer) => {
//     let binary = '';
//     let bytes = [].slice.call(new Uint8Array(buffer));
//     bytes.forEach((b) => binary += String.fromCharCode(b));
//     return window.btoa(binary);
// }


  useEffect(()=>{
    Aos.init({duration:2000});
    getImage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const clickHandler =()=>{
    uploadImage();
    
  }

  const clickHandler2 = ()=>{
    console.log("dfffff",userId);
    getImage();
  }

  const inputHandler =(e)=>{
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);

  }

  return (
    <div className="mainContainer">
      <HamburgerMenu/>
        <GetProfile getDetailes={(id)=>{
          setUserId(id);
        }}/>
        <div className="profileContainer">
          <div className="images">
              <div className="coverImg">
                  <img src="https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg" alt="travel"/>
                  <input type="file" className="coverBtn" onChange={inputHandler}/>
                  <button onClick={clickHandler}><i class="fas fa-camera fa-2x"></i>Upload</button>
                  <button onClick={clickHandler2}>getImage</button>

              </div>
              <div className="profileImg">
              <i class="fas fa-camera fa-2x"></i>
              {/* <img src={`data:image/jpeg;base64,${arrayBufferToBase64(image)}`} alt="profileImg" /> */}
                <img  src={`http://localhost:5000${image}`} alt="profileImg"/>
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