import TrackItem from "./track-item.component";
import { connect } from "react-redux";
import {
  playSong,
  pauseSong,
  resumeSong
} from "../../../redux/musicPlayer/musicPlayer.action";

import { createStructuredSelector } from "reselect";
import {
  selectIsSongPlaying,
  selectCurrentSongId,
  selectIsSongPaused
} from "../../../redux/musicPlayer/musicPlayer.selector";

const mapStateToProps = createStructuredSelector({
  isSongPlaying: selectIsSongPlaying,
  playingSongId: selectCurrentSongId,
  isSongPaused: selectIsSongPaused
});

const mapDispatchToProps = dispatch => ({
  playSong: song => dispatch(playSong(song)),
  pauseSong: () => dispatch(pauseSong()),
  resumeSong: () => dispatch(resumeSong())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackItem);
