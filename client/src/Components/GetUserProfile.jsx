import React,{useEffect, useState} from 'react';
import axios from 'axios';
import '../CSS/UserPageStyle.css';


const GetUserProfile =({getDetailes})=>{
      
    const [user,setUser] = useState('');
    

    const getProfile= async () => {
        console.log("get");
        try{
           const response = await axios.get('http://localhost:5000/api/users/profile',{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
            setUser(response.data);
            await getDetailes(user);

        }catch(err){
                console.log(err); 
        }
    }

    useEffect(()=>{
        getProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  return (
    <div className="userProfile">
       <h1>Hello {user?.name}</h1>
       {/* <img src={`data:image/jpeg;base64,${user?.img}`} alt="profileImg" /> */}
    </div>
  );
}

export default GetUserProfile;