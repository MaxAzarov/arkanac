import { FILTERED_CARDS } from "../actionTypes/actionTypes";

const initialState = {
  filteredCards: [],
};

const assortment = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_CARDS: {
      return {
        ...state,
        filteredCards: [...action.payload],
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default assortment;
