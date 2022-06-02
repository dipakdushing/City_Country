import { combineReducers } from "redux";
import citiesReducers from "./reducer";

const rootReducer = combineReducers({
   data : citiesReducers
})

export default rootReducer;