import React, {useState} from "react";
import MyPopUpWindow from '../Utilities/MyPopUpWindow';
import '../CSS/PostCard.css';
import Button from '../Utilities/Button'

const PostCard =({title,content,images})=>{

  const [popUpSeen,setPopUpSeen] = useState(false);
  
  
  const togglePop = () => {
    setPopUpSeen(!popUpSeen);
    console.log(popUpSeen);

};
  return (
    <div >
      <div className="postCardContainer">
            <div className="postImg">
                <img src={`data:image/jpeg;base64,${images?.[0]}`} alt=""></img>
                <div className="blockTitle"><h3>{title}</h3></div> 
                <button className="showPostBtn" onClick={togglePop}>Show Post</button>
            </div> 
        </div>
        <> 
              {
                popUpSeen ? <MyPopUpWindow content={content} images={images} toggle={setPopUpSeen}/> : null
              } 
        </>
        
    </div>
  );
}

export default PostCard;