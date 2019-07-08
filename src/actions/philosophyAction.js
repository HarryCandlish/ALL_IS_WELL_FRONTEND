import { FETCH_PHILOSOPHY } from "./types";

export const fetchPhilosophy = () => dispatch => {
  fetch("/api/philosophy")
    .then(res => res.json())
    .then(philosophy =>
      dispatch({
        type: FETCH_PHILOSOPHY,
        philosophy: philosophy
      })
    );
};
