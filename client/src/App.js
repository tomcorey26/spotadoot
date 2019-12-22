import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";

import {
  selectCurrentSong,
  selectIsSongPlaying,
  selectIsSongPaused
} from "./redux/musicPlayer/musicPlayer.selector";

import { createStructuredSelector } from "reselect";
import AudioPlayer from "./components/audioPlayer/audioPlayer.component";
//pages
import BrowseMusicDisplay from "./components/browse-music-display/redux";
// import HomePage from "./pages/homepage/homepage.component";

// "start": "concurrently \"node auth-server/authorization_code/app.js\" \"(cd client && npm start) \"",
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { audioExsists: false };
  }

  render() {
    return (
      <div className="App">
        <a href="/login">
          <button>Log in with Spotify</button>
        </a>
        <BrowseMusicDisplay />
        <AudioPlayer />
      </div>
    );
  }
}

console.log("hey");

const mapStateToProps = createStructuredSelector({
  currentSong: selectCurrentSong,
  isSongPlaying: selectIsSongPlaying,
  isSongPaused: selectIsSongPaused
});

export default connect(mapStateToProps)(App);
