import React from "react";
import "./browse-music-display.styles.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

//components
import SongList from "../song-list/song-list.component";
import Container from "@material-ui/core/Container";

//global spotify object
import Spotify from "spotify-web-api-js";
export const spotifyApi = new Spotify();

class BrowseMusicDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    const { fetchMusicDisplay } = this.props;
    this.setAccessToken(spotifyApi)
      .then(() => {
        fetchMusicDisplay();
      })
      .then(() => {
        this.setState({ isLoading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getHashParams = () => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  };

  setAccessToken = async spotifyApi => {
    //token is already stored
    let storedToken = window.localStorage.getItem("refreshToken");
    if (storedToken) {
      //DEPLOY CHANGE TO window.location.origin
      let request_url =
        "http://localhost:8888" + "/refresh_token?refresh_token=" + storedToken;
      let request_token = await fetch(request_url);
      let token = await request_token.json();
      spotifyApi.setAccessToken(token.access_token);
      window.localStorage.setItem("accessToken", token.access_token);
      window.history.pushState({}, "", "/");
      return token.access_token;
    }

    //user must autheticate if not stored
    const params = this.getHashParams();
    if (params.access_token) {
      spotifyApi.setAccessToken(params.access_token);
      window.localStorage.setItem("refreshToken", params.refresh_token);
      window.localStorage.setItem("accessToken", params.access_token);
      window.history.pushState({}, "", "/");
    }
    return params.access_token;
  };

  render() {
    const { topSongs, newReleases, featuredPlaylists } = this.props;
    return (
      <div className="foo">
        <div className="browse-music-display">
          {this.state.isLoading && (
            <div className="loading">
              <CircularProgress className="spinner" />
            </div>
          )}
          {!this.state.isLoading && (
            <React.Fragment>
              <div className="main-browse-content">
                <SongList title="New Releases" songs={newReleases} />
                <SongList
                  title="Featured Playlists"
                  songs={featuredPlaylists}
                />
                <SongList title="Your Top Songs" songs={topSongs} />
              </div>
              <div className="sidebar-browse-content">
                <h1>Side bar</h1>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default BrowseMusicDisplay;
