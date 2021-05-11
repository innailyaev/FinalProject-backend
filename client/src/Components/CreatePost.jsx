import React,{useEffect, useState} from 'react';
import axios from 'axios';
import TextEditor from '../Utilities/TextEditor';
import HamburgerMenu from '../Utilities/HamburgerMenu';
import parse from 'html-react-parser';




const CreatePost =()=>{
    
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const createNewPost= async () => {
        console.log("get");
        try{
           const response = await axios.post('/api/posts/posts',{
            title:title,
            description:description
           },
            {
                headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            
        });
            console.log(response);
           
        }catch(err){
                console.log(err); 
        }
    }

    const getText = async (data)=>{
        await setDescription(data);
        createNewPost();
        console.log("from parent", data);
    }

  return (
    <div>
        <HamburgerMenu/>
        <h2>Blog Title: <input type="text" onChange={(e)=>setTitle(e.target.value)}/></h2>
        <TextEditor getText={getText}/>
    </div>
  
  );
}

export default CreatePost;