import {createSlice} from "@reduxjs/toolkit";


const stockOptionsSlice = createSlice({
  name: "stockOptions",
  initialState: {
    history: []
  },
  reducers: {
    addOption: (state, action) => {
      state.history.push(action.payload);
    },
    clearOptions: state => {
      state.history = [];
    }
  }
});

export const {addOption, clearOptions} = stockOptionsSlice.actions;
export default stockOptionsSlice.reducer;