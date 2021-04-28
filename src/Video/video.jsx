import React, { useRef, useState } from "react";

import VideoFooter from "../VideoFooter/videoFooter";

import "./video.css";
import video from "./video.mp4";

const Video = () => {
  const [playing, setPlaying] = useState(false); //state to track vid

  const videoRef = useRef(null); //video ref

  //handle video clicks
  const handleVideoPress = () => {
    //check if video is playing
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
      //check if video is paused
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      >
        <source src={video} type="video/mp4" />
      </video>
      <VideoFooter />
    </div>
  );
};

export default Video;
