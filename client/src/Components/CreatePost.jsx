import React,{useState} from 'react';
import axios from 'axios';
import TextEditor from '../Utilities/TextEditor';
import HamburgerMenu from '../Utilities/HamburgerMenu';
import '../CSS/CreatePost.css';
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
    <div className="createPostContainer">
        <HamburgerMenu/>
        <h1>My Blog</h1>
        <div className="image"></div>
        <div className="blogTitle">
            <h2>Blog Title:</h2> <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <TextEditor getText={getText}/>
    </div>
  
  );
}

export default CreatePost;