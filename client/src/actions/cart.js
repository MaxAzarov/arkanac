import {
  CHANGE_CARDS_AMOUNT,
  GET_CARDS_SUCCESS,
  GET_CARDS_START,
  GET_CARDS_FAILURE,
  POST_CARD_TO_BASKET_FAILURE,
  POST_CARD_TO_BASKET_START,
  POST_CARD_TO_BASKET_SUCCESS,
  GET_CARDS_FROM_BASKET_SUCCESS,
  DELETE_CARD_FROM_CART,
  COUNT_TOTAL_PRICE,
} from "../actionTypes/actionTypes";

export const changeCardAmount = (amount) => ({
  type: CHANGE_CARDS_AMOUNT,
  payload: amount,
});

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

export function addCardToBasket(id, amount, size, color) {
  return async (dispatch) => {
    dispatch(addCardToBasketStart());
    try {
      await fetch("/api/basket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, amount, size, color }),
      });
      dispatch(getCardsFromBasket());
    } catch (e) {
      dispatch(addCardToBasketFailure());
    }
  };
}

export const addCardToBasketFailure = (e) => ({
  type: POST_CARD_TO_BASKET_FAILURE,
  payload: e,
});

export const addCardToBasketSuccess = () => ({
  type: POST_CARD_TO_BASKET_SUCCESS,
});

export const addCardToBasketStart = () => ({
  type: POST_CARD_TO_BASKET_START,
});

export function getCardsFromBasket() {
  return async (dispatch) => {
    try {
      await fetch("/api/basket")
        .then((response) => response.json())
        .then((data) => dispatch(getCardsFromBasketSuccess(data)));
    } catch (e) {}
  };
}

export const getCardsFromBasketSuccess = (data) => ({
  type: GET_CARDS_FROM_BASKET_SUCCESS,
  payload: data,
});

export function deleteCardFromBasket(id) {
  return async (dispatch) => {
    // dispatch(addCardToBasketStart());
    try {
      await fetch("/api/basket/card", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      dispatch(deleteCardFromCart(id));
    } catch (e) {
      // dispatch(addCardToBasketFailure());
    }
  };
}
export const deleteCardFromCart = (id) => ({
  type: DELETE_CARD_FROM_CART,
  payload: id,
});

export const CountTotalPrice = () => ({
  type: COUNT_TOTAL_PRICE,
});
