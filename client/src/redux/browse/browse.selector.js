import { createSelector } from "reselect";

const selectSpotify = state => state.browse;

export const selectSpotifyApi = createSelector(
  [selectSpotify],
  browse => browse.spotifyWrapper
);

export const selectTopSongs = createSelector(
  [selectSpotify],
  browse => browse.topSongs
);

export const selectNewReleases = createSelector(
  [selectSpotify],
  browse => browse.newReleases
);

export const selectFeaturedPlaylists = createSelector(
  [selectSpotify],
  browse => browse.featuredPlaylists
);
