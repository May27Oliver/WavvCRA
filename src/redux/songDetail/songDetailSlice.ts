import { createSlice } from "@reduxjs/toolkit";

type InitialStat = {
  songTitle: string;
  songPic: string;
  composerName: string;
  composerPic: string;
};

const initialState: InitialStat = {
  songTitle: "",
  songPic: "",
  composerName: "",
  composerPic: "",
};

const songDetailSlice = createSlice({
  name: "songDetail",
  initialState,
  reducers: {
    selectedSong: (state: InitialStat, action) => {
      const { composerName, composerPic, songPic, songTitle } = action.payload;
      state.songTitle = songTitle;
      state.composerName = composerName;
      state.composerPic = composerPic;
      state.songPic = songPic;
    },
  },
});

export default songDetailSlice.reducer;
export const { selectedSong } = songDetailSlice.actions;
