import { TRENDING_CARD } from "../actionTypes/actionTypes";

export const topTrending = (filtration) => {
  return async (dispatch) => {
    await fetch("/api/trending", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filtration }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: TRENDING_CARD, payload: data });
        console.log("data", data);
      });
  };
};
