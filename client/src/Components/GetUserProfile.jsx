import React,{useEffect, useState} from 'react';
import axios from 'axios';


const GetUserProfile =()=>{
      
    const [userName,setName] = useState();

    const getProfile= async () => {
        console.log("get");
        try{
           const response = await axios.get('/api/users/profile',{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
            setName(response.data.name)
            console.log(response);
           
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
       <h1>Hello {userName}</h1> 
    </>
  );
}

export default GetUserProfile;