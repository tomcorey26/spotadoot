import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/privateRoute";
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
import HomePage from "./pages/homepage/homepage.component";
import WelcomePage from "./pages/welcomepage/welcomepage.component";

// "start": "concurrently \"node auth-server/authorization_code/app.js\" \"(cd client && npm start) \"",
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/welcome" component={WelcomePage} />
          <PrivateRoute path="/browse" component={BrowseMusicDisplay} />
        </Switch>
        <AudioPlayer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentSong: selectCurrentSong,
  isSongPlaying: selectIsSongPlaying,
  isSongPaused: selectIsSongPaused
});

export default connect(mapStateToProps)(App);
