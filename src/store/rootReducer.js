import {combineReducers} from "@reduxjs/toolkit";
import stockOptionsReducer from "../components/stockOptions/stockOptionsSlice.js";
import notificationReducer from "../components/notification/notificationSlicer.js"


const rootReducer = combineReducers({
  stockOptions: stockOptionsReducer,
  notification: notificationReducer
});

export default rootReducer;