import { combineReducers } from "redux";
import browseReducer from "./browse/browse.reducer";
import musicPlayerReducer from "./musicPlayer/musicPlayer.reducer";

const rootReducer = combineReducers({
  browse: browseReducer,
  musicPlayer: musicPlayerReducer
});

export default rootReducer;
