import { browseActionTypes } from "./browse.types";
import { spotifyApi } from "../../utils/spotifyWrapper";

//create one big action that fetches all of these
export const fetchMusicDisplay = () => {
  return dispatch => {
    dispatch(fetchTopSongs());
    dispatch(fetchNewReleases());
    dispatch(fetchFeaturedPlaylists());
  };
};

//featured playlists

//get reccomendations

// Top artists

// New Realeases success
export const fetchNewReleasesSuccess = newReleases => ({
  type: browseActionTypes.FETCH_NEW_RELEASES_SUCCESS,
  payload: newReleases
});

//get Top Songs success
export const fetchTopSongsSuccess = topSongs => ({
  type: browseActionTypes.FETCH_TOP_SONGS_SUCCESS,
  payload: topSongs
});

export const fetchFeaturedPlaylistsSuccess = userReccomendations => ({
  type: browseActionTypes.FETCH_FEATURED_PLAYLISTS_SUCCESS,
  payload: userReccomendations
});

export const fetchNewReleases = () => {
  return dispatch => {
    spotifyApi
      .getNewReleases()
      .then(data => {
        dispatch(fetchNewReleasesSuccess(data.albums.items));
      })
      .catch(err => console.log(err));
  };
};

export const fetchTopSongs = () => {
  return dispatch => {
    spotifyApi
      .getMyTopTracks()
      .then(data => {
        dispatch(fetchTopSongsSuccess(data.items));
      })
      .catch(err => console.log(err));
  };
};

export const fetchFeaturedPlaylists = () => {
  return dispatch => {
    spotifyApi
      .getFeaturedPlaylists()
      .then(data => {
        dispatch(fetchFeaturedPlaylistsSuccess(data.playlists.items));
      })
      .catch(err => console.log(err));
  };
};
