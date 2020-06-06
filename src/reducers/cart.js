import pic1 from "./../images/carts/1.png";
import pic2 from "./../images/carts/2.png";
import pic3 from "./../images/carts/3.png";
import pic4 from "./../images/carts/4.png";
import pic5 from "./../images/carts/5.png";
import pic6 from "./../images/carts/6.png";
import pic7 from "./../images/carts/7.png";
import pic8 from "./../images/carts/8.png";
import pic9 from "./../images/carts/9.png";
import pic10 from "./../images/carts/10.png";

import { CHANGE_CARDS_AMOUNT } from "./../actionTypes/actionTypes";

const initialState = {
  cards: [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10],
  changedCards: [],
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CARDS_AMOUNT:
      return {
        ...state,
        changedCards: [...state.cards.slice(0, action.payload)],
      };

    default:
      return { ...state };
  }
};

export default card;
