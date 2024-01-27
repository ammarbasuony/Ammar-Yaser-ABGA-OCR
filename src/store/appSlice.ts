import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  image: string;
}

const initialState: AppState = {
  image: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
  },
});

export const { setImage } = appSlice.actions;
export default appSlice.reducer;
