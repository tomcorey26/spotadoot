import { musicPlayerActionTypes } from "./musicPlayer.types";

const INITIAL_STATE = {
  currentSong: null,
  currentSongId: null,
  isSongPlaying: false,
  isSongPaused: false,
  songQueue: [],
  songLengthInTime: 0
};

const musicPlayerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case musicPlayerActionTypes.PLAY_SONG:
      return {
        ...state,
        currentSong: action.payload,
        currentSongId: action.payload.id,
        isSongPlaying: true,
        isSongPaused: false
        //have util for get song quue
      };
    case musicPlayerActionTypes.PAUSE_SONG:
      return {
        ...state,
        isSongPaused: true,
        isSongPlaying: false
      };
    case musicPlayerActionTypes.RESUME_SONG:
      return {
        ...state,
        isSongPaused: false,
        isSongPlaying: true
      };

    default:
      return state;
  }
};

export default musicPlayerReducer;
