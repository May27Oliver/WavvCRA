import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
type songDetailType = {
  songTitle: string;
  composerName: string;
  composerPic: string;
  songPic: string;
};

type InitialState = {
  showPlayer: boolean;
  songDetail: songDetailType;
};

const initialState: InitialState = {
  showPlayer: false,
  songDetail: {
    songTitle: "",
    composerName: "",
    composerPic: "",
    songPic: "",
  },
};

const musicPlayerSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    showMusicPlayer: (state: InitialState) => {
      state.showPlayer = true;
    },
    closeMusicPlayer: (state) => {
      state.showPlayer = false;
    },
    selectMusic: (
      state: InitialState,
      action: PayloadAction<songDetailType>
    ) => {
      state.songDetail = action.payload;
    },
  },
});

export default musicPlayerSlice.reducer;
export const { showMusicPlayer, closeMusicPlayer, selectMusic } =
  musicPlayerSlice.actions;
