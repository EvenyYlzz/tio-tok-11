import React, { useState, useEffect } from "react";
import Video from "./components/Video";
import "./App.css";
import data from './videos.json';

function Home() {
  const [videos, setVideos] = useState([{data:[]}]);

  useEffect(() => {
            setVideos(data);
        }, []);
  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({
               id: id, username: username,
               description: description,hashtags,soundName, videoURL,likeCount,  commentCount, shareCount, liked }) => {
              return (
                  <Video key={id}
                    url={videoURL}
                    channel={username}
                    song={soundName}
                    likes={likeCount}
                    messages={commentCount}
                    description={description}
                    shares={shareCount}
                  />
              );
          }
        )}
      </div>
    </div>
  );
}
export default Home;
