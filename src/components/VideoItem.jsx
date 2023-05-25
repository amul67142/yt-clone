import React from 'react'
import {
  Link
} from "react-router-dom";
    
function VideoItem(props) {

  const handleThumbnailClick = () => {
    props.onClick(props.videoSrc);
  };
  return (
    
    <div className='my-3'>
        
        <Link to={`/video/${props.videoId}`} className='videolink'> <div className="card">
        <img src={props.imgUrl} className=" thumb" alt="..."   onClick={handleThumbnailClick}/>
            <div className="card-body">
                <h5 className="card-title ctxt"><img src={props.dp} className='dp' alt=".."/>  {props.title}</h5>
                <p className="card-text ctxt">{props.desc}</p>
               
            </div>
            </div></Link>
    </div>
  )
}

export default VideoItem
