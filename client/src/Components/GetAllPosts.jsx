import React,{useEffect, useState} from 'react';
import axios from 'axios';
import SimpleAccordion from '../Utilities/Accordion';
import HamburgerMenu from '../Utilities/HamburgerMenu';
import parse from 'html-react-parser';
import '../CSS/AllPosts.css';



const GetAllPosts =()=>{
      
    const [posts,setPosts] = useState([]);

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
            posts.map((post,index)=>{
               return  <SimpleAccordion key={index} title={post.title} content={parse(post.description)}></SimpleAccordion>
            })
        }  
    </div>
  
  );
}

export default GetAllPosts;