import React,{useEffect, useState} from 'react';
import axios from 'axios';


const GetAllPosts =()=>{
      
    const [posts,setPosts] = useState([]);

    const getProfile= async () => {
        console.log("get");
        try{
           const response = await axios.get('/api/posts/posts',{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
            console.log(response.data[0]);
            setPosts([posts, ...response.data[0].description]);
           
        }catch(err){
                console.log(err); 
        }
    }

    useEffect(()=>{
        getProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  return (
    <>
    <div>
        {
            posts.map((post)=>(
                <div>{post}</div> 
            ))
        }
        </div>
    </>
  );
}

export default GetAllPosts;