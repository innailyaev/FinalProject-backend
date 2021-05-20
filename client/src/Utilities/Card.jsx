import React from "react";
import '../CSS/Card.css';

const Card =({title,link,content,image})=>{


  return (
    <div className="CardsContainer">
        <div className="Card"> 
             <h3>{title}</h3>
                <img className="" src={image} alt="" />
                <span>Read the article:</span><a href={link} rel="noreferrer" target="_blank">{content}</a>    
        </div>
            
        </div>
  );
}

export default Card;