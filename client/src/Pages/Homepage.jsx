import React from "react";
import {Link} from 'react-router-dom';
import Button from '../Utilities/Button';
import '../CSS/HomepageStyle.css';


const HomePage = () => {
    


        return(
            <div className="homepage">
               <Link to="/signup"><Button content="SignUp" className="loginbtn"/></Link>
            </div>
        )
}

export default HomePage;
