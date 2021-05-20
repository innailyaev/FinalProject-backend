import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PostCard from '../Utilities/PostCard';
import MyPopUpWindow from '../Utilities/MyPopUpWindow';
import '../CSS/AllUsersPosts.css';


const AllUsersPosts = () => {

  const [postsData,setPostsData] = useState([]);
  const [searchInput,setSesrchInput] = useState('');
  const [searchResultArr,setSearchResultArr] = useState([]);
  const [postsToShow,setPostsToShow] = useState([]);
  const [btnToggle,setBtnToggle] = useState(false);

  const getAllPosts= async () => {
    try{
        const response = await axios.get('/api/posts/posts/allposts');
        console.log(response);
        setPostsData(response.data);
        setPostsToShow(response.data);
       
    }catch(err){
            console.log(err); 
    }
}

  useEffect(()=>{
      Aos.init({duration:2000});
      getAllPosts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const changeHandler = (e)=>{
    setSesrchInput(e.target.value);
    if(e.target.value === ''){
      setPostsToShow(postsData);
    }
  }

  const searchHandler = () =>{
    const resultArr = postsData.filter((post)=>{
          if(post.title.toLowerCase() === searchInput.toLowerCase())
            return post; 
    })
    setPostsToShow(resultArr);
    console.log("resArr",resultArr);
  }
  

  return(
      <div>
        <div data-aos="flip-left" className="postsContainer">
          <div className="imageDiv"></div>
          <div>
              <h1>Life is short<br/>and the world<br/>is wide!</h1>
              <h2>To get best of your adventure you just <br/>need to leave and go where you like. <br/> We will give you all the information you need for that. </h2>
          </div>
        </div>
        
        <div className="postsCardsSection" data-aos="fade-up" >
          <div className="discoverTitle">
            <h2>Discover your next journey</h2>
          </div>
          <div>
              <input type="text" onChange={changeHandler}/><i className="fas fa-search" onClick={searchHandler}></i>
          </div>
          <div className="postsCards">
          { 
          postsToShow.map((post)=>{
              return <PostCard title={post.title} content={post.description} images={post.images}/>
            })

          }  
          </div>
        </div>
      </div>

  )
  
}

export default AllUsersPosts;