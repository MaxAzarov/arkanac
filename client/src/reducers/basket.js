import {
  POST_CARD_TO_BASKET_FAILURE,
  // POST_CARD_TO_BASKET_START,
  // POST_CARD_TO_BASKET_SUCCESS,
  GET_CARDS_FROM_BASKET_SUCCESS,
  DELETE_CARD_FROM_CART,
  COUNT_TOTAL_PRICE,
} from "../actionTypes/actionTypes";

const initialState = {
  basket: [],
  totalPrice: 0,
};

const card = (state = initialState, action) => {
  switch (action.type) {
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
      state.basket.map((item) => (totalPrice += item.newPrice * item.amount));
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
