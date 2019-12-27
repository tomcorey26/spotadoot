import BrowseMusicDisplay from "./browse-music-display.component";
import { connect } from "react-redux";

import { setToken } from "../../redux/token/token.action";
import {
  selectTopSongs,
  selectNewReleases,
  selectFeaturedPlaylists
} from "../../redux/browse/browse.selector";
import { selectAccessToken } from "../../redux/token/token.selector";

import { fetchMusicDisplay } from "../../redux/browse/browse.actions";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  topSongs: selectTopSongs,
  newReleases: selectNewReleases,
  featuredPlaylists: selectFeaturedPlaylists,
  accessToken: selectAccessToken
});

const mapDispatchToProps = dispatch => ({
  fetchMusicDisplay: () => dispatch(fetchMusicDisplay()),
  setToken: token => dispatch(setToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseMusicDisplay);
