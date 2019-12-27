import { combineReducers } from "redux";
import browseReducer from "./browse/browse.reducer";
import musicPlayerReducer from "./musicPlayer/musicPlayer.reducer";
import tokenReducer from "./token/token.reducer";

const rootReducer = combineReducers({
  browse: browseReducer,
  musicPlayer: musicPlayerReducer,
  token: tokenReducer
});

export default rootReducer;
