import React from "react";
import '../CSS/PostCard.css';

const Card =({title,content,images})=>{


  return (
    <div>
        <div className="card"> 
             <h1>{title}</h1>
             <p>{content}</p>         
        </div>
            
        </div>
  );
}

export default Card;