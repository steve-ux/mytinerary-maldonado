import { combineReducers } from "redux";
import itineraryReducers from "./itineraryReducers";
import cityReducers from "./cityReducers";
import authReducer from "./authReducer";

const mainReducer = combineReducers({
  itineraryReducers: itineraryReducers,
  cityReducers: cityReducers,
  authReducer: authReducer,
});

export default mainReducer;
