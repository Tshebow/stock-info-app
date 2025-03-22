import {combineReducers} from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";


const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;