import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Carousel from '../Utilities/Carousel';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PopUp from '../Utilities/PopUp';
import '../CSS/UserPageStyle.css';


const GetUserProfile =()=>{
      
    const [user,setUser] = useState('');
    const [file,setFile] = useState();
    const [userImage,setImage] = useState('');

    

    const uploadImage = async (e) => { 
        // e.preventDefault();
        let formData = new FormData();
        formData.append('avatar', file);
        try{
          const response = await axios.post('/api/users/profile/avatar', formData,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                "Content-Type": "multipart/form-data"
            }
        });
        console.log(response);
        setImage(response.data.img);
        }catch(e){
          console.log(e);
        }
         
      };
    
  
    const getProfile= async () => {
        console.log("get");
        try{
           const response = await axios.get('http://localhost:5000/api/users/profile',{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
            setUser(response.data);

        }catch(err){
                console.log(err); 
        }
    }

    useEffect(()=>{
        getProfile();
        Aos.init({duration:2000});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userImage]);

    const clickHandler =()=>{
      uploadImage();
    }

  
  return (
    <div className="userProfile">
       <h1>Hello {user?.name}</h1>
       <div className="profileContainer">
          <div className="images">
              <div className="coverImg">
                  <img src="https://training.kic.ae/wp-content/uploads/2019/02/IATA-Foundation-in-Travel-Tourism-1024x348.jpg" alt="travel"/>
              </div>
              <label className="profileLabel">Upload Profile Image:</label>
              <input className="inputFile" type="file" id="file"  onChange={(e) => setFile(e.target.files[0])}/>
              <button className="uploadBtn" onClick={clickHandler}><i class="far fa-check-circle fa-2x"></i></button>
              <div className="profileDiv">
              {/* <label for="profileImg"><i class="fas fa-camera fa-2x"></i></label>
              <input type="file" id="profileImg" style={{display:"none", visibility:"none"}} onChange={inputHandler}/> */}
              {
                (user.img) ? <img className="profileImg" src={`data:image/jpeg;base64,${user?.img}`} alt="p" /> : (userImage) ? <img className="profileImg" src={`data:image/jpeg;base64,${userImage}`} alt="p" /> : <img className="profileImg" src={'https://www.pngitem.com/pimgs/m/404-4042686_my-profile-person-icon-png-free-transparent-png.png'} alt="p" />
              }
              <input className="inputFile" type="file" id="file"  onChange={(e) => setFile(e.target.files[0])}/>
              <button className="uploadBtn" onClick={clickHandler}><i class="far fa-check-circle fa-2x"></i></button>
              </div>
            </div>
        </div>
        <div className="carouselContainer">
          <div data-aos="fade-up" className="carousel">
          <h2>Popular places in Europe</h2>
            <Carousel/>
          </div>
        </div>   
    </div>
  );
}

export default GetUserProfile;