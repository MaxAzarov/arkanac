import {
  GET_CARDS_SUCCESS,
  GET_CARDS_START,
  GET_CARDS_FAILURE,
} from "../actionTypes/actionTypes";

export const getCardsStart = () => ({
  type: GET_CARDS_START,
});

export function getCards() {
  return async (dispatch) => {
    dispatch(getCardsStart());
    try {
      await fetch("/api/cards")
        .then((response) => response.json())
        .then((data) => {
          dispatch(getCardsSuccess(data));
        });
    } catch (e) {
      dispatch(getCardsFailure(e));
    }
  };
}

export const getCardsSuccess = (data) => ({
  type: GET_CARDS_SUCCESS,
  payload: data,
});

export const getCardsFailure = (e) => ({
  type: GET_CARDS_FAILURE,
  payload: e,
});
