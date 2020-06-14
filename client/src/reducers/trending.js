import { TRENDING_CARD } from "../actionTypes/actionTypes";

const initialState = {
  trending: [],
};

const trending = (state = initialState, action) => {
  switch (action.type) {
    case TRENDING_CARD: {
      return {
        ...state,
        trending: [...action.payload],
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default trending;
