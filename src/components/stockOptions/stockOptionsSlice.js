import {createSlice} from "@reduxjs/toolkit";


const stockOptionsSlice = createSlice({
  name: "stockOptions",
  initialState: {
    history: []
  },
  reducers: {
    addOption: (state, action) => {
      state.history.push(action.payload);
    }
  }
});

export const {addOption} = stockOptionsSlice.actions;
export default stockOptionsSlice.reducer;