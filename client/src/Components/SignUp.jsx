import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const SignApp =()=>{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const postNewUser= async () => {
        console.log("post");
        try{
           const response = await axios.post('/api/users/signup', {
                name:name,
                email:email,
                password:password
        });
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

    const formHandler = (e)=>{
        e.preventDefault()
    }

    const clickHandler = ()=>{
        postNewUser();
    }

  return (
    <div className="signUpContainer">
        <div className="formDiv">
            <form onSubmit={formHandler} className="formContainer">
                <label>Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                <label>Email</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
            <Link to={`/login`}><button onClick={clickHandler} className="btn">SignUp</button></Link>
            </form>
        </div>
    </div>
  );
}

export default SignApp;