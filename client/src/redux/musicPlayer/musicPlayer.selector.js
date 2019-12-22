import { createSelector } from "reselect";

const selectPlayer = state => state.musicPlayer;

export const selectIsSongPlaying = createSelector(
  [selectPlayer],
  player => player.isSongPlaying
);

export const selectIsSongPaused = createSelector(
  [selectPlayer],
  player => player.isSongPaused
);

export const selectCurrentSongId = createSelector(
  [selectPlayer],
  player => player.currentSongId
);

export const selectCurrentSong = createSelector(
  [selectPlayer],
  player => player.currentSong
);
