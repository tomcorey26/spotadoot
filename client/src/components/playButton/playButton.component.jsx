import React from "react";

const PlayButton = ({ isSongPlaying, playSong }) => (
  <div className="play-button" onClick={playSong}>
    {isSongPlaying ? (
      <i className="fas fa-pause fa-3x"></i>
    ) : (
      <i className="fas fa-play fa-3x"></i>
    )}
  </div>
);

export default PlayButton;
