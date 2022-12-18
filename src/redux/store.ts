import { configureStore, combineReducers } from "@reduxjs/toolkit";
import musicPlayerReducer from "./musicPlayer/musicPlayerSlice";
import composerReducer from "./composer/composerSlice";
import songDetailReducer from "./songDetail/songDetailSlice";

const rootReducer = combineReducers({
  musicPlayer: musicPlayerReducer,
  artistDetail: composerReducer,
  songDetail: songDetailReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
