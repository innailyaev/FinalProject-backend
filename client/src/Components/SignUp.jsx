import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from '../Utilities/Button';
import '../CSS/SignUpStyle.css';


const SignApp =()=>{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const postNewUser= async () => {
        console.log("post");
        try{
           const response = await axios.post('/api/users/signup', {
                name:name,
                email:email,
                password:password
        });
            console.log(response.data.error.errors.name.message);
            if(response.data.error){
                setError(response.data.error.errors.name.message);
            }
            else{
                setError('');
            }
           
        }catch(err){
                console.log(err); 
        }
    }

    const formHandler = (e)=>{
        e.preventDefault()
    }

    const clickHandler = (e)=>{
        // e.preventDefault()
        postNewUser();
    }

  return (
    <div className="signUpContainer">
        <div className="signUp">
            <form onSubmit={formHandler} className="formContainer">
                <label>Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                <label>Email</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
                {/* {
                    error ? <p>{error}</p> : null
                } */}
            <Link to={`/hello`}><Button click={clickHandler} content={'SignUp'} className="signInbtn"/></Link>
            <Link to={`/login`}><Button click={clickHandler} content={'LogIn'} className="loginbtn"/></Link>


            </form>
        </div>
    </div>
  );
}

export default SignApp;