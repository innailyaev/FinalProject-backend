import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


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
    }

  return (
    <div>
        <Link to={`/`}><button onClick={clickHandler} className="btn">LogOut</button></Link>
    </div>
  );
}

export default LogOut;