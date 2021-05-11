import React,{useEffect, useState} from 'react';
import axios from 'axios';
import '../CSS/UserPageStyle.css';


const GetUserProfile =({getDetailes})=>{
      
    const [userName,setName] = useState();
    const [userId,setUserId] = useState();

    const getProfile= async () => {
        console.log("get");
        try{
           const response = await axios.get('/api/users/profile',{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
            setName(response.data.name);
            setUserId(response.data._id);
            console.log(response);
           
        }catch(err){
                console.log(err); 
        }
    }

    useEffect(()=>{
        getProfile();
        getDetailes(userId);
        console.log("user id",userId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userId]);

  return (
    <div className="userProfile">
       <h1>Hello {userName}</h1> 
    </div>
  );
}

export default GetUserProfile;