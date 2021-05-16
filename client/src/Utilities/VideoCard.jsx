import React from "react";
import PopUp from '../Utilities/PopUp';
import '../CSS/VideoCard.css';

const VideoCard =({title,link,content,image})=>{


  return (
    <div className="VideoCardsContainer">
            <div className="imageDiv">
                <img src={image} alt=""></img>
                <div className="blockTitle"><h3>{title}</h3></div> 
            </div>
            <div className="popUpDiv">
                <PopUp link={link}/> 
            </div>    
    </div>
  );
}

export default VideoCard;