import React from "react";
import ReactPlayer from "react-player";


const Video = ({show,setshow,video_url}) => {
  return (
    <div className="player-wrapper" style={{width:'100%',height:'93%',display:show ? 'block' : 'none',objectFit:'cover',backgroundSize:'cover',borderRadius:20}}>
      <ReactPlayer
        className="react-player fixed-bottom"
        url={video_url}
        width="100%"
        style={{objectFit:'cover',backgroundSize:'cover',borderRadius:20}}
        height="100%"
        controls={true}
        playing={show}
        // onEnded={()=>setshow(false)}
      />
    </div>
  );
};

export default Video;
