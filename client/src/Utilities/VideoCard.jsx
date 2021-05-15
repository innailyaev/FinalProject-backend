import React from "react";
import PopUp from '../Utilities/PopUp';
import '../CSS/VideoCard.css';

const VideoCard =({title,link,content,image})=>{


  return (
    <div className="VideoCardsContainer">
        <div className="videoCard"> 
            <div className="imageDiv" >
                <img src={image} alt=""></img>
            </div>
                <div className="blockTitle"><h3>{title}</h3></div>
                <PopUp/> 
      
        </div>
            
    </div>
  );
}

export default VideoCard;