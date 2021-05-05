import React from "react";

const Button =({content,click,className})=>{


  return (
    <div>
       <button className={className} onClick={click}>{content}</button>
   </div>
  );
}

export default Button;