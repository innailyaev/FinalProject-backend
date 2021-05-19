import React,{useEffect, useState} from 'react';
import axios from 'axios';
import SimpleAccordion from '../Utilities/Accordion';
import HamburgerMenu from '../Utilities/HamburgerMenu';
import parse from 'html-react-parser';
import {Spinner} from '../Utilities/Spinner';
import '../CSS/AllPosts.css';



const GetAllPosts =()=>{
      
    const [posts,setPosts] = useState([]);
    const [loaderToggle,setLoaderToggle] = useState(true);
    
    const getPosts= async () => {
        console.log("get");
        try{
           const response = await axios.get('/api/posts/posts',{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
            console.log(response);
            setPosts(response.data);
            setLoaderToggle(false)      
        }catch(err){
                console.log(err); 
        }
    }

    useEffect(()=>{
        getPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  return (
    <div className="allPostsContainer">
        <HamburgerMenu/>
        {
                (loaderToggle) ? <Spinner/> :null
        }
        {
            posts.map((post,index)=>{
               return  <SimpleAccordion key={index} title={post.title} content={parse(post.description)}></SimpleAccordion>
            })
        }  
    </div>
  
  );
}

export default GetAllPosts;