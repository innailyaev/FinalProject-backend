import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from '../Utilities/Button';
import '../CSS/LogOut.css';


const LogOut =()=>{
      
    const postLogOut= async () => {
        console.log("post");
        try{
           const response = await axios.post('/api/users/logout', {});
            console.log(response);
           
            
            // if(response.data.error){
            //     setError(response.data.error);
            // }
            // else{
            //     setError('');
            // }
           
        }catch(err){
                console.log(err); 
        }
    }
 
    const clickHandler = ()=>{
        postLogOut();
        localStorage.removeItem('token');

    }

  return (
    <div className="logout">
        <Link to={`/`}><Button click={clickHandler} className="btn" content="LogOut"/></Link>
    </div>
  );
}

export default LogOut;