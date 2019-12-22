import React from "react";
import "./browse-music-display.styles.scss";

//components
import SongList from "../song-list/song-list.component";
import Container from "@material-ui/core/Container";
class BrowseMusicDisplay extends React.Component {
  componentDidMount() {
    const { fetchMusicDisplay } = this.props;
    fetchMusicDisplay();
  }
  render() {
    const { topSongs, newReleases, featuredPlaylists } = this.props;
    return (
      <Container maxWidth="lg">
        <div className="browse-music-display">
          <div className="main-browse-content">
            <SongList title="New Releases" songs={newReleases} />
            <SongList title="Featured Playlists" songs={featuredPlaylists} />
            <SongList title="Your Top Songs" songs={topSongs} />
          </div>
          <div className="sidebar-browse-content">
            <h1>Side bar</h1>
          </div>
        </div>
      </Container>
    );
  }
}

export default BrowseMusicDisplay;
