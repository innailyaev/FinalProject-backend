import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../CSS/AllUsersPosts.css';


const AllUsersPosts = () => {

  useEffect(()=>{
      Aos.init({duration:2000});
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return(
      <div>
        <div data-aos="flip-left" className="postsContainer">
          <div className="imageDiv"></div>
          <div>
              <h1>Life is short<br/>and the world<br/>is wide!</h1>
              <h2>To get best of your adventure you just <br/>need to leave and go where you like. <br/> We will give you all the information you need for that. </h2>
          </div>
        </div>
      </div>

  )
  
}

export default AllUsersPosts;