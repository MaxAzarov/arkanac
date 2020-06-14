import {
  GET_CARDS_SUCCESS,
  GET_CARDS_START,
  GET_CARDS_FAILURE,
} from "../actionTypes/actionTypes";

const initialState = {
  cards: [],
  cardsStart: false,
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS_SUCCESS: {
      return {
        ...state,
        cards: [...action.payload],
      };
    }

    case GET_CARDS_FAILURE: {
      return {
        ...state,
        cardsFailure: action.payload,
      };
    }

    case GET_CARDS_START: {
      return {
        ...state,
        cardsStart: true,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default cards;
