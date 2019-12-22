import { musicPlayerActionTypes } from "./musicPlayer.types";
import { spotifyApi } from "../../utils/spotifyWrapper";

export const playSong = song => ({
  type: musicPlayerActionTypes.PLAY_SONG,
  payload: song
});

export const playAlbum = album => ({
  type: musicPlayerActionTypes.PLAY_ALBUM,
  payload: album
});

export const pauseSong = () => ({
  type: musicPlayerActionTypes.PAUSE_SONG
});

export const resumeSong = () => ({
  type: musicPlayerActionTypes.RESUME_SONG
});
