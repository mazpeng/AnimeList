"use client";

import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "500",
    height: "400",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <bottom
          onClick={handleVideoPlayer}
          className="cursor-pointer text-primary float-right bg-secondary px-3 mb-1"
        >
          X
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
        className="rounded fixed bottom-5 right-5 w-32 bg-primary text-dark text-xl hover:bg-accent transition-all shadow-xl"
      >
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
