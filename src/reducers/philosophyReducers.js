import { FETCH_PHILOSOPHY } from "../actions/types";

const initialState = {
  philosophy: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHILOSOPHY:
      return {
        ...state,
        philosophy: action.philosophy
      };
    default:
      return state;
  }
}
