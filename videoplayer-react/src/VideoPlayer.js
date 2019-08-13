import React from 'react';
import './VideoPlayer.css';

function VideoPlayer(props) {
  console.log(props)
  return (
     <div className="Video">
         <video controls width="640" heigh="264">
            <source src={props.trailer} type="video/mp4" />
         </video>
     </div>
  );
}

export default VideoPlayer;