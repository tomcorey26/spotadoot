import React from "react";
import "./browse-music-display.styles.scss";
import PropTypes from "prop-types";
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

  setAccessToken = async spotifyApi => {
    const { setToken } = this.props;
    //if token is already stored
    let storedToken = window.localStorage.getItem("refreshToken");
    if (storedToken) {
      let token = await this.requestNewAccessToken(storedToken);
      spotifyApi.setAccessToken(token.access_token);
      setToken(token.access_token);
      window.localStorage.setItem("accessToken", token.access_token);
      return token.access_token;
    }

    //user must autheticate if not stored
    let token = this.getTokenFromParams(spotifyApi);

    return token;
  };

  requestNewAccessToken = async storedToken => {
    let request_url =
      window.location.origin + "/refresh_token?refresh_token=" + storedToken;
    let request_token = await fetch(request_url);
    return await request_token.json();
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

BrowseMusicDisplay.propTypes = {
  topSongs: PropTypes.array,
  newReleases: PropTypes.array,
  featuredPlaylists: PropTypes.array,
  fetchMusicDisplay: PropTypes.func,
  accessToken: PropTypes.string,
  setToken: PropTypes.func
};

export default BrowseMusicDisplay;
