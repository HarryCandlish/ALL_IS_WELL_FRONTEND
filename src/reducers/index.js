// root reducer // combine reducers

import { combineReducers } from "redux";
import philosophyReducer from "./philosophyReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  philosophy: philosophyReducer,
  products: productsReducer
});
