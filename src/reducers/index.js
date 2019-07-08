// root reducer // combine reducers

import { combineReducers } from "redux";
import philosophyReducer from "./philosophyReducer";

export default combineReducers({
  philosophy: philosophyReducer
});
