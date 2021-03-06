import { FILTERED_CARDS } from "../actionTypes/actionTypes";

export const SortByPrice = (filtration, category) => {
  return async (dispatch) => {
    await fetch(`/api/${category}/price`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filtration }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FILTERED_CARDS, payload: data });
      });
  };
};
