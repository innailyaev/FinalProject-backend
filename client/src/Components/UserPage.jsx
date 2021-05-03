import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const UserPage =(name)=>{

  return (
    <div>
        <h1> hello {name}</h1>
    
    </div>
  );
}

export default UserPage;