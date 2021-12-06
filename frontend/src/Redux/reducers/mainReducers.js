import { combineReducers } from "redux";
import itineraryReducers from "./itineraryReducers";
import cityReducers from "./cityReducers";

const mainReducer = combineReducers({
  itineraryReducers:itineraryReducers,
  cityReducers:cityReducers,
});

export default mainReducer;
