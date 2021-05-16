import React from "react";
import '../CSS/InfoCard.css';

const InfoCard =({title,content,image})=>{


  return (
    <div className="InfoCardContainer">
        <div className="InfoCard"> 
             <h3>{title}</h3>
                <img className="" src={image} alt=""/>
                <p>{content}</p>  
        </div>
            
    </div>
  );
}

export default InfoCard;