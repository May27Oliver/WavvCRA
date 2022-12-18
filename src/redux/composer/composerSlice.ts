import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  composerName: string;
  composerPic: string;
};

const initialState: InitialState = {
  composerName: "",
  composerPic: "",
};

const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    selectArtist: (state: InitialState, action) => {
      state.composerName = action.payload.composerName;
      state.composerPic = action.payload.composerPic;
    },
  },
});

export default artistSlice.reducer;
export const { selectArtist } = artistSlice.actions;
