import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: { langSelected: 'en' },
  reducers: {
    setLanguagePreference: (state, action) => {
      state.langSelected = action.payload;
    },
  },
});
export const {setLanguagePreference} = configSlice.actions
export default configSlice.reducer
