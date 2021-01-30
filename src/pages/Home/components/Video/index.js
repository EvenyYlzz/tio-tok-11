import React, {useEffect, useRef, useState} from "react";
import VideoFooter from "../VideoFooter";
import VideoSidebar from "../VideoSidebar";
import "./Video.css";
import {nanoid} from 'nanoid';
function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(true);
  const [loop, setLoop] = useState(0);
  const [mouse, setMouse] = useState(false);
  const videoRef = useRef(nanoid());
  const divvideoRef = useRef(nanoid());

  const onVideoPress = () => {
    if (playing) {
        stopVideo()
      setPlaying(false);
    } else {
        startVideo()
        setLoop(loop+1);
      setPlaying(true);
    }
  };
  function stopVideo(){
      videoRef.current.pause();
  }
  function startVideo(){

        videoRef.current.play();
    }
    function mouseState(flag){
      setMouse(flag);
    }
    useEffect(()=>{

        if(loop===0&&mouse){
            console.log("初始化播放")
            startVideo()
            setLoop(loop+1);
            setPlaying(true);
        }else if(!mouse){
            stopVideo();
            setPlaying(false);
        }
    },[loop,mouse])
    // console.log(divvideoRef.current.);
  return (
    <div ref = {divvideoRef} onMouseEnter={()=>mouseState(true)}
        onMouseLeave={()=>mouseState(false)} className="video">
      <video
          ref={videoRef}
        className="video__player"
        loop
        onClick={onVideoPress}
          // onMouseEnter={handleMouse(true)}
          // onMouseLeave={handleMouse(false)}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;