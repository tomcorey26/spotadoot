import { browseActionTypes } from "./browse.types";

const INITIAL_STATE = {
  spotifyWrapper: null,
  topSongs: [],
  newReleases: [],
  featuredPlaylists: []
};

const browseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case browseActionTypes.FETCH_TOP_SONGS_SUCCESS:
      return {
        ...state,
        topSongs: action.payload
      };
    case browseActionTypes.FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        newReleases: action.payload
      };
    case browseActionTypes.FETCH_FEATURED_PLAYLISTS_SUCCESS:
      return {
        ...state,
        featuredPlaylists: action.payload
      };
    //if action type doesnt match switch statements
    //return the state you already had
    default:
      return state;
  }
};

export default browseReducer;
