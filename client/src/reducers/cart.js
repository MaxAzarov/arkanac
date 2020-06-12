import {
  CHANGE_CARDS_AMOUNT,
  GET_CARDS_SUCCESS,
  GET_CARDS_START,
  GET_CARDS_FAILURE,
  POST_CARD_TO_BASKET_FAILURE,
  // POST_CARD_TO_BASKET_START,
  // POST_CARD_TO_BASKET_SUCCESS,
  GET_CARDS_FROM_BASKET_SUCCESS,
  DELETE_CARD_FROM_CART,
  COUNT_TOTAL_PRICE,
} from "../actionTypes/actionTypes";

const initialState = {
  cards: [],
  changedCards: [],
  cardsStart: false,
  basket: [],
  totalPrice: 0,
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CARDS_AMOUNT:
      return {
        ...state,
        changedCards: [...state.cards.slice(0, action.payload)],
      };

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

    case POST_CARD_TO_BASKET_FAILURE: {
      return {
        ...state,
        postCard: action.payload,
      };
    }

    case GET_CARDS_FROM_BASKET_SUCCESS: {
      return {
        ...state,
        basket: action.payload,
      };
    }

    case DELETE_CARD_FROM_CART: {
      return {
        ...state,
        basket: [...state.basket.filter((item) => item._id !== action.payload)],
      };
    }

    case COUNT_TOTAL_PRICE: {
      let totalPrice = 0;
      state.basket.map((item) => (totalPrice += item.NewPrice * item.amount));
      return {
        ...state,
        totalPrice,
      };
    }

    default:
      return { ...state };
  }
};

export default card;
