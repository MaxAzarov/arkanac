import {
  CHANGE_CARDS_AMOUNT,
  // FILTER_CARDS_BY_CATEGORIES,
} from "./../actionTypes/actionTypes";
import data from "./../mockdata/mockdata";

const initialState = {
  cards: [...data],
  changedCards: [],
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CARDS_AMOUNT:
      return {
        ...state,
        changedCards: [...state.cards.slice(0, action.payload)],
      };
    // "New products", "Prices drop", "Best sales"

    default:
      return { ...state };
  }
};

export default card;
