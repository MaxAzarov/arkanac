import {
  CHANGE_CARDS_AMOUNT,
  FILTER_CARDS_BY_CATEGORIES,
} from "./../actionTypes/actionTypes";

export const changeCardAmount = (amount) => ({
  type: CHANGE_CARDS_AMOUNT,
  payload: amount,
});

export const filterCardByCategory = (category) => ({
  type: FILTER_CARDS_BY_CATEGORIES,
  payload: category,
});
