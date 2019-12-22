import React, { useState } from "react";
import "./song-list.styles.scss";

import TrackItem from "../card-items/track-item/redux";
import LeftArrow from "../slide-arrows/left-arrow.component";
import RightArrow from "../slide-arrows/right-arrow.component";

const SongList = ({ title, songs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [arrowsHeight] = useState(130);

  const goToNextSlide = () => {
    let maxTranslation = calculateMaxTranslation(songs.length);
    let maxIndex = calculateNumOfIndexes(songs.length);

    if (currentIndex === 0) {
      setTranslateValue(translateValue + -slideWidth() * 3.8);
    } else if (currentIndex + 1 === maxIndex) {
      setTranslateValue(maxTranslation + slideWidth() * 4.35);
    } else {
      setTranslateValue(translateValue + -slideWidth() * 4);
    }
    setCurrentIndex(currentIndex + 1);
  };

  const goToPrevSlide = () => {
    let maxIndex = calculateNumOfIndexes(songs.length);

    if (currentIndex === maxIndex) {
      setTranslateValue(translateValue + slideWidth() * 3.8);
    } else if (currentIndex - 1 === 0) {
      setTranslateValue(0);
    } else {
      setTranslateValue(translateValue + slideWidth() * 4);
    }
    setCurrentIndex(currentIndex - 1);
  };

  const calculateNumOfIndexes = listLength => {
    if (listLength % 4 === 0) {
      return Math.floor(listLength / 4) - 1;
    } else {
      return Math.floor(listLength / 4);
    }
  };

  const calculateMaxTranslation = listLength => {
    let cardSize = 180;
    return -(listLength * cardSize);
  };

  const slideWidth = () => {
    return document.querySelector(".song-item").clientWidth;
  };

  const renderCardItems = songs => {
    let types = {
      playlist: "playlist",
      album: "album",
      track: "track"
    };
    return songs.map(song => {
      // if (song.type === types.track) {
      return <TrackItem key={song.id} item={song} />;
      // }
    });
  };

  return (
    <div
      className="song-list"
      style={{
        overflow: "hidden",
        marginLeft: "10px",
        marginRight: "10px"
      }}
    >
      <h1>{title}</h1>
      <div
        className="song-list-wrapper"
        style={{
          display: "flex",
          transform: `translateX(${translateValue}px)`,
          transition: "transform ease-out 0.45s"
        }}
      >
        {renderCardItems(songs)}
      </div>
      <div className="arrows" style={{ bottom: `${arrowsHeight}px` }}>
        {currentIndex !== 0 ? (
          <LeftArrow goToPrevSlide={goToPrevSlide} />
        ) : (
          <div></div>
        )}
        {currentIndex !== calculateNumOfIndexes(songs.length) ? (
          <RightArrow goToNextSlide={goToNextSlide} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default SongList;
