import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import {Link,useHistory} from 'react-router-dom';
import Button from '../Utilities/Button';
import '../CSS/CardStyle.css';



const SignApp =()=>{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorMsg,setErrorMsg] = useState('');
    const history = useHistory();


    const formHandler = (e)=>{
        e.preventDefault()
    }

    const clickHandler = async (e)=>{

        if (!validator.isEmail(email)) {
            return setErrorMsg("Invalid email");
        }
        if (!validator.isStrongPassword(password)) {
            return setErrorMsg('Invalid Password, must include: Min length:8, 1 lowercase,1 uppercase, 1 number,1 symbol');
        }

        console.log("post");
        try{
           const response = await axios.post('/api/users/signup', {
                name:name,
                email:email,
                password:password
        });
        history.push(`/login`)
        }catch(err){
            console.log(err);
            // if (err.response.status === 400) {
            //     setErrorMsg(err.response.data.error);
            // }
            // else 
            //   setErrorMsg("Error occurred, please try again");
        }
    }

  return (
    <div className="CardContainer">
        <div className="card">
            <form onSubmit={formHandler} className="formContainer">
            <Link to='/' ><i className="fas fa-times closeBtn"></i></Link>
                <label>Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                <label>Email</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
                {errorMsg ? <p className="errorMsg">{errorMsg}</p>: null}
            <Button click={clickHandler} content={'SignUp'} className="signInbtn"/>
            <div className="cardFooter">
                <span>Already have an account?</span>
                <Link to={`/login`}><Button click={clickHandler} content={'LogIn'} className="loginbtn"/></Link>
            </div>


            </form>
        </div>
    </div>
  );
}

export default SignApp;