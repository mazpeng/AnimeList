"use client";

import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState();

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "480",
    height: "350",
  };

  const Player = () => {
    return (
      <div>
        <bottom
          onClick={handleVideoPlayer}
          className="rounded cursor-pointer text-color-dark float-left bg-color-primary hover:bg-color-accent px-3 mb-1 transition-all shadow-xl"
        >
          Close
        </bottom>
        {/* <buttton onClick={handleVideoPlayer} className="text-color-primary float-right bg-color-secondary px-3 mb-1 cursor-pointer">X</buttton> */}
        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Vidio Rusak.")}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl"
      >
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
