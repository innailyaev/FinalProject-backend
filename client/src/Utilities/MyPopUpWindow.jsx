import React from "react";
import parse from 'html-react-parser';
import "../CSS/PopUpStyle.css";

const MyPopUpWindow =({toggle,content,images})=>{

const handleClick = () => {
   toggle();
};


  return (
    <div className="modal">
        <div className="modalContent">
            <span className="close" onClick={handleClick}>&times;</span>
            <p>{parse(content)}</p>  
            {
              images.map((img)=>{
                return <img className="" src={`data:image/jpeg;base64,${img}`} alt="" />
              })
            }
        </div>
   </div>
  );
}


export default MyPopUpWindow;