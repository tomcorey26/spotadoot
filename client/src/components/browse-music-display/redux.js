import BrowseMusicDisplay from "./browse-music-display.component";
import { connect } from "react-redux";
import {
  selectTopSongs,
  selectNewReleases,
  selectFeaturedPlaylists
} from "../../redux/browse/browse.selector";

import { fetchMusicDisplay } from "../../redux/browse/browse.actions";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  topSongs: selectTopSongs,
  newReleases: selectNewReleases,
  featuredPlaylists: selectFeaturedPlaylists
});

const mapDispatchToProps = dispatch => ({
  fetchMusicDisplay: () => dispatch(fetchMusicDisplay())
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseMusicDisplay);
