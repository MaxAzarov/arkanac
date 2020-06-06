import { CHANGE_CARDS_AMOUNT } from "./../actionTypes/actionTypes";

export const changeCardAmount = (amount) => ({
  type: CHANGE_CARDS_AMOUNT,
  payload: amount,
});
