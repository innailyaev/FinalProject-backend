import React, { useState, useEffect , useRef} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Login =()=>{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const isMountedRef = useRef(null);


    const postNewUser= async () => {
        console.log("post");
        try{
           const response = await axios.post('/api/users/login', {
                email:email,
                password:password
        });
            console.log(response);
            setName(response.data.user.name);
            
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

    useEffect(() => {
        isMountedRef.current = true;
    })

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
                <label>Email</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
                <Link to={`/hello`}><button onClick={clickHandler} className="btn">Login</button></Link>
            </form>
        </div>
    </div>
  );
}

export default Login;