import React, { useState } from "react";
import "../card-item.styles.scss";

import { spotifyApi } from "../../../utils/spotifyWrapper";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import PlayButton from "../../playButton/playButton.component";

const useStyles = makeStyles({
  card: {
    width: 170,
    height: 200,
    background: "#ffC145"
  },
  media: {
    height: 140
  }
});

//TODO dancing gif with song?
// control the speed of the gifs and make it go with the song
//make video with song playing add giphy gifs to it
const TrackItem = ({
  item,
  playSong,
  resumeSong,
  isSongPlaying,
  playingSongId,
  pauseSong,
  isSongPaused
}) => {
  const classes = useStyles();
  const [isPlayButtonVisible, togglePlayButton] = useState(false);

  //handlePlayClick
  var handlePlayClick = item => {
    // let currentSong = await spotifyApi.getMyCurrentPlaybackState();
    //TODO fix bug where song does not pause
    //due to the item id being different
    if (item.id === playingSongId) {
      if (!isSongPlaying && isSongPaused) {
        //resume song

        spotifyApi.play();
        resumeSong();
      } else if (isSongPlaying && !isSongPaused) {
        //pause song
        spotifyApi.pause();
        pauseSong();
      }
    } else {
      if (item.type === "track") {
        spotifyApi.play({
          uris: [item.uri]
        });
      } else {
        spotifyApi.play({
          context_uri: item.uri
        });
      }
      playSong(item);
    }
  };

  return (
    <div
      className="song-item"
      style={{ paddingRight: "10px", position: "relative" }}
      onMouseEnter={() => togglePlayButton(true)}
      onMouseLeave={() => togglePlayButton(false)}
    >
      <Card className={classes.card}>
        <CardActionArea>
          {/*different json is returned from requesting songs vs albums.
          the turnary just checks which type it is based off the album_type
          exsisting. 
        */}
          <CardMedia
            className={classes.media}
            image={
              item.type !== "track"
                ? item.images[0].url
                : item.album.images[1].url
            }
            title={`${item.name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="body2" component="h2">
              {item.name.length < 20
                ? item.name
                : item.name.substring(0, 16) + "..."}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.type !== "playlist" ? item.artists[0].name : ""}
            </Typography>
          </CardContent>
        </CardActionArea>
        {isPlayButtonVisible || item.id === playingSongId ? (
          <PlayButton
            playSong={() => handlePlayClick(item)}
            isSongPlaying={isSongPlaying && item.id === playingSongId}
          />
        ) : null}
      </Card>
    </div>
  );
};

export default TrackItem;
