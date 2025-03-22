import {combineReducers} from "@reduxjs/toolkit";
import stockOptionsReducer from "../components/stockOptions/stockOptionsSlice.js";


const rootReducer = combineReducers({
  stockOptions: stockOptionsReducer
});

export default rootReducer;